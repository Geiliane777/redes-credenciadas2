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
        .select("*")
        .eq("bairro_id", bairro);

    console.log("Clínicas encontradas:");
    console.log(data);
    console.log(error);

}
