console.log("especialistas.js carregado");

const botao = document.getElementById("buscar");

console.log(botao);

botao.addEventListener("click", buscarClinicas);

async function buscarClinicas() {

    console.log("Entrou na função buscarClinicas");

    const bairro = document.getElementById("bairro").value;

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

console.log(data);

mostrarClinicas(data);
}
