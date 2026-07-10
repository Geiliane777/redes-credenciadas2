// =========================================
// CLINICAS.JS
// =========================================

console.log("clinicas.js carregado");

// =========================================
// ABRIR MÓDULO
// =========================================

function abrirModuloClinicas() {

    const area = document.getElementById("areaConteudo");

    area.innerHTML = `

        <div class="card">

            <h2>🏥 Cadastro de Clínicas</h2>

            <p>
                Gerencie as clínicas credenciadas.
            </p>

            <br>

            <button id="btnNovaClinica">

                ➕ Nova Clínica

            </button>

            <hr>

            <br>

            <div id="listaClinicas">

                Carregando clínicas...

            </div>

        </div>

    `;

    document
        .getElementById("btnNovaClinica")
        .addEventListener("click", mostrarFormularioClinica);

    carregarListaClinicas();

}

// =========================================
// FORMULÁRIO
// =========================================

function mostrarFormularioClinica() {

    const area = document.getElementById("areaConteudo");

    area.innerHTML = `

        <div class="card">

            <h2>

                ➕ Nova Clínica

            </h2>

            <div class="grupo">

                <label>Nome</label>

                <input
                    id="nomeClinica"
                    type="text">

            </div>

            <div class="grupo">

                <label>Endereço</label>

                <input
                    id="enderecoClinica"
                    type="text">

            </div>

            <div class="grupo">

                <label>Telefone</label>

                <input
                    id="telefoneClinica"
                    type="text">

            </div>

            <br>

            <button id="btnSalvarClinica">

                Salvar Clínica

            </button>

            <button
                id="btnCancelarClinica"
                class="btn-secundario">

                Cancelar

            </button>

        </div>

    `;

    document
        .getElementById("btnSalvarClinica")
        .addEventListener("click", salvarClinica);

    document
        .getElementById("btnCancelarClinica")
        .addEventListener("click", abrirModuloClinicas);

}

// =========================================
// LISTAR CLÍNICAS
// =========================================

async function carregarListaClinicas() {

    const lista =
        document.getElementById("listaClinicas");

    const { data, error } = await supabaseClient
        .from("clinicas")
        .select("*")
        .order("nome");

    if (error) {

        lista.innerHTML =
            "Erro ao carregar clínicas.";

        console.error(error);

        return;

    }

    if (!data.length) {

        lista.innerHTML =
            "Nenhuma clínica cadastrada.";

        return;

    }

    let html = "";

    data.forEach(clinica => {

        html += `

            <div class="linha-clinica">

                <strong>

                    ${clinica.nome}

                </strong>

                <br>

                ${clinica.endereco ?? ""}

                <br>

                ${clinica.telefone ?? ""}

            </div>

        `;

    });

    lista.innerHTML = html;

}

// =========================================
// SALVAR
// =========================================

async function salvarClinica() {

    const nome =
        document.getElementById("nomeClinica").value.trim();

    const endereco =
        document.getElementById("enderecoClinica").value.trim();

    const telefone =
        document.getElementById("telefoneClinica").value.trim();

    if (!nome) {

        alert("Informe o nome da clínica.");

        return;

    }

    const { error } = await supabaseClient
        .from("clinicas")
        .insert([
            {
                nome,
                endereco,
                telefone,
                ativo: true
            }
        ]);

    if (error) {

        console.error(error);

        alert("Erro ao salvar.");

        return;

    }

    alert("Clínica cadastrada com sucesso.");

    abrirModuloClinicas();

}
