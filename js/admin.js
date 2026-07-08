// ======================================
// LOGIN ADMIN
// ======================================

function entrar(){

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;


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



// ======================================
// SAIR DO ADMIN
// ======================================

function sair(){

    location.reload();

}



// ======================================
// LOCALIZAÇÃO
// CARREGAR REGIÕES
// ======================================

async function carregarRegioesAdmin(){


    const lista = document.getElementById("lista-regioes");


    if(!lista){

        console.error("Elemento lista-regioes não encontrado");
        return;

    }


    lista.innerHTML = "Carregando regiões...";



    const { data, error } = await supabaseClient
        .from("regioes")
        .select("*")
        .order("nome");



    if(error){

        console.error(error);

        lista.innerHTML =
        "Erro ao carregar regiões.";

        return;

    }



    lista.innerHTML = "";



    data.forEach(regiao => {


        lista.innerHTML += `

            <div class="admin-item">

                📍 ${regiao.nome}

            </div>

        `;


    });


}




// ======================================
// ABRIR MÓDULOS
// ======================================

function abrirModulo(modulo){


    const conteudo = document.getElementById("conteudo-admin");



    // ==========================
    // LOCALIZAÇÃO
    // ==========================

    if(modulo === "localizacao"){


        conteudo.innerHTML = `


            <h2>
                📍 Gerenciar Localização
            </h2>


            <div class="admin-card">


                <h3>
                    Regiões cadastradas
                </h3>


                <button onclick="carregarRegioesAdmin()">

                    Carregar Regiões

                </button>



                <div id="lista-regioes">

                </div>



            </div>


        `;


    }





    // ==========================
    // CLÍNICAS
    // ==========================

    if(modulo === "clinicas"){


        conteudo.innerHTML = `


            <h2>
                🦷 Gerenciar Clínicas
            </h2>



            <div class="admin-card">


                <button onclick="carregarClinicasAdmin()">

                    Carregar Clínicas

                </button>



                <div id="lista-clinicas">

                </div>


            </div>


        `;


    }





    // ==========================
    // ESPECIALIDADES
    // ==========================

    if(modulo === "especialidades"){


        conteudo.innerHTML = `


            <h2>
                📋 Gerenciar Especialidades
            </h2>



            <div class="admin-card">


                <p>

                Cadastro e edição de especialidades será desenvolvido aqui.

                </p>


            </div>


        `;


    }





    // ==========================
    // REDES
    // ==========================

    if(modulo === "redes"){


        conteudo.innerHTML = `


            <h2>
                🌐 Gerenciar Redes
            </h2>



            <div class="admin-card">


                <p>

                Controle das redes Especialistas e Sindilegis será desenvolvido aqui.

                </p>


            </div>


        `;


    }



}





// ======================================
// CARREGAR CLÍNICAS
// ======================================


async function carregarClinicasAdmin(){


    const lista = document.getElementById("lista-clinicas");


    if(!lista){

        console.error("Lista de clínicas não encontrada");

        return;

    }



    lista.innerHTML = "Carregando clínicas...";




    const { data, error } = await supabaseClient

        .from("clinicas")

        .select(`

            id,
            nome,
            endereco,
            telefone,
            ativo,

            bairros(
                nome
            )

        `)

        .order("nome");




    if(error){


        console.error(error);


        lista.innerHTML =
        "Erro ao carregar clínicas.";


        return;


    }





    lista.innerHTML = "";




    if(!data || data.length === 0){


        lista.innerHTML = `

            <div class="admin-item">

                Nenhuma clínica encontrada.

            </div>

        `;


        return;

    }





    data.forEach(clinica => {



        lista.innerHTML += `



        <div class="admin-card">



            <h3>

                🦷 ${clinica.nome}

            </h3>



            <p>

                📍 <strong>Endereço:</strong><br>

                ${clinica.endereco}

            </p>




            <p>

                🏙 <strong>Bairro:</strong><br>

                ${clinica.bairros?.nome || "Não informado"}

            </p>




            <p>

                📞 <strong>Telefone:</strong><br>

                ${clinica.telefone || "Não informado"}

            </p>




            <p>

                Status:

                ${
                    clinica.ativo
                    ?
                    "🟢 Ativa"
                    :
                    "🔴 Inativa"
                }


            </p>



        </div>



        `;



    });



}
