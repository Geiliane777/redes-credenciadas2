console.log("especialistas.js carregado");

document
    .getElementById("buscar")
    .addEventListener("click", buscarClinicas);

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

        bairros(
            nome
        ),

        clinica_especialidades!inner(
            ativo,
            rede,
            especialidades(
                nome
            )
        )
    `)
    .eq("bairro_id", bairro)
    .eq("clinica_especialidades.rede", "especialistas");

if (error) {
    console.error(error);
    return;
}

mostrarClinicas(data);
}
