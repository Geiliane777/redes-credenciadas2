// =========================================
// ADMIN.JS
// CONTROLE DO PAINEL
// =========================================

console.log("admin.js carregado");

// =========================================
// INICIALIZAÇÃO
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    configurarMenu();

});

// =========================================
// MENU
// =========================================

function configurarMenu() {

    document
        .getElementById("btnClinicas")
        .addEventListener("click", () => abrirModulo("clinicas"));

    document
        .getElementById("btnEspecialidades")
        .addEventListener("click", () => abrirModulo("especialidades"));

    document
        .getElementById("btnRegioes")
        .addEventListener("click", () => abrirModulo("regioes"));

    document
        .getElementById("btnEstados")
        .addEventListener("click", () => abrirModulo("estados"));

    document
        .getElementById("btnCidades")
        .addEventListener("click", () => abrirModulo("cidades"));

    document
        .getElementById("btnBairros")
        .addEventListener("click", () => abrirModulo("bairros"));

}

// =========================================
// ABRIR MÓDULOS
// =========================================

function abrirModulo(nome) {

    const area = document.getElementById("areaConteudo");

    switch (nome) {

        case "clinicas":

            if (typeof abrirModuloClinicas === "function") {

                abrirModuloClinicas();

            }

            break;

        case "especialidades":

            if (typeof abrirModuloEspecialidades === "function") {

                abrirModuloEspecialidades();

            }

            break;

        case "regioes":

            if (typeof abrirModuloRegioes === "function") {

                abrirModuloRegioes();

            }

            break;

        case "estados":

            if (typeof abrirModuloEstados === "function") {

                abrirModuloEstados();

            }

            break;

        case "cidades":

            if (typeof abrirModuloCidades === "function") {

                abrirModuloCidades();

            }

            break;

        case "bairros":

            if (typeof abrirModuloBairros === "function") {

                abrirModuloBairros();

            }

            break;

        default:

            area.innerHTML = `

                <div class="card">

                    <h2>Bem-vindo</h2>

                    <p>
                        Escolha uma opção no menu.
                    </p>

                </div>

            `;

    }

}
