// ======================================
// REDE ESPECIALISTAS
// ======================================

console.log("especialistas.js carregado");

// Aguarda a página carregar
document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("buscar");

    if (botao) {
        botao.addEventListener("click", buscarClinicas);
    }

});


// ======================================
// BUSCAR CLÍNICAS
// ======================================

async function buscarClinicas() {

    const bairro = document.getElementById("bairro").value;

    if (!bairro) {
        alert("Selecione um bairro.");
        return;
    }

    const { data, error } = await supabaseClient
        .from("clinicas")
        .select(`
            id,
            nome,
            endereco,
            telefone,

            bairros (
                nome
            ),

            clinica_especialidades!inner (
                ativo,
                rede,

                especialidades (
                    nome
                )
            )
        `)
        .eq("bairro_id", bairro)
        .eq("clinica_especialidades.rede", "especialistas")
        .eq("clinica_especialidades.ativo", true);

    if (error) {
        console.error(error);
        alert("Erro ao buscar clínicas.");
        return;
    }

    console.log(data);

    mostrarClinicas(data);

}
