function entrar(){

    const usuario =
    document.getElementById("usuario").value;


    const senha =
    document.getElementById("senha").value;



    if(usuario === "admin" && senha === "123456"){


        document
        .getElementById("login")
        .classList.add("hidden");


        document
        .getElementById("painel")
        .classList.remove("hidden");


    }
    else{

        alert("Usuário ou senha inválidos");

    }

}



function sair(){

    location.reload();

}
// ======================================
// ABRIR MÓDULOS DO ADMIN
// ======================================

function abrirModulo(modulo){

    const conteudo = document.getElementById("conteudo-admin");


    if(modulo === "localizacao"){

        conteudo.innerHTML = `

            <h2>
                📍 Gerenciar Localização
            </h2>


            <div class="admin-card">

                <h3>
                    Regiões
                </h3>


                <button onclick="carregarRegioesAdmin()">
                    Carregar Regiões
                </button>


                <div id="lista-regioes">

                </div>


            </div>

        `;

    }


    if(modulo === "clinicas"){

        conteudo.innerHTML = `

            <h2>
                🦷 Gerenciar Clínicas
            </h2>

            <p>
                Módulo em desenvolvimento.
            </p>

        `;

    }



    if(modulo === "especialidades"){

        conteudo.innerHTML = `

            <h2>
                📋 Gerenciar Especialidades
            </h2>

            <p>
                Módulo em desenvolvimento.
            </p>

        `;

    }



    if(modulo === "redes"){

        conteudo.innerHTML = `

            <h2>
                🌐 Gerenciar Redes
            </h2>

            <p>
                Módulo em desenvolvimento.
            </p>

        `;

    }


}
