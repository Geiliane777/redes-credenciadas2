// =============================
// CARREGAR REGIÕES
// =============================

async function carregarRegioes() {

    console.log("Buscando regiões...");

    const { data, error } = await supabaseClient
        .from("regioes")
        .select("*")
        .order("nome");

    console.log(data);
    console.log(error);

    if (error) {
        console.error(error);
        return;
    }

    const select = document.getElementById("regiao");

    select.innerHTML = `<option value="">Selecione a Região</option>`;

    data.forEach(regiao => {
        select.innerHTML += `
            <option value="${regiao.id}">
                ${regiao.nome}
            </option>
        `;
    });

}

carregarRegioes();
