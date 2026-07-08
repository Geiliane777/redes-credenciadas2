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
// SAIR
// ======================================

function sair(){

    location.reload();

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


                <div id="lista-regioes"></div>


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


                <div id="lista-clinicas"></div>


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

                <button onclick="carregarEspecialidadesAdmin()">
                    Carregar Especialidades
                </button>


                <div id="lista-especialidades"></div>


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

                <button onclick="carregarRedesAdmin()">
                    Carregar Redes
                </button>


                <div id="lista-redes"></div>


            </div>

        `;

    }


}




// ======================================
// CARREGAR REGIÕES
// ======================================

async function carregarRegioesAdmin(){


    const lista = document.getElementById("lista-regioes");


    lista.innerHTML = "Carregando...";


    const {data,error}=await supabaseClient
        .from("regioes")
        .select("*")
        .order("nome");


    if(error){

        console.error(error);
        lista.innerHTML="Erro ao carregar regiões.";
        return;

    }


    lista.innerHTML="";


    data.forEach(item=>{


        lista.innerHTML += `

            <div class="admin-item">

                📍 ${item.nome}

            </div>

        `;


    });


}




// ======================================
// CARREGAR CLÍNICAS
// ======================================

async function carregarClinicasAdmin(){


    const lista=document.getElementById("lista-clinicas");


    lista.innerHTML="Carregando clínicas...";



    const {data,error}=await supabaseClient
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
        lista.innerHTML="Erro ao carregar clínicas.";
        return;

    }



    lista.innerHTML="";



    data.forEach(clinica=>{


        lista.innerHTML += `

            <div class="admin-card">


                <h3>
                    ${clinica.nome}
                </h3>


                <p>
                    📍 ${clinica.endereco}
                </p>


                <p>
                    🏙 Bairro:
                    ${clinica.bairros?.nome || "Não informado"}
                </p>


                <p>
                    📞 ${clinica.telefone || "Não informado"}
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




// ======================================
// CARREGAR ESPECIALIDADES
// ======================================

async function carregarEspecialidadesAdmin(){


const lista=document.getElementById("lista-especialidades");


lista.innerHTML="Carregando...";


const {data,error}=await supabaseClient
.from("especialidades")
.select("*")
.order("nome");



if(error){

console.error(error);
lista.innerHTML="Erro ao carregar especialidades.";
return;

}



lista.innerHTML="";


data.forEach(item=>{


lista.innerHTML += `

<div class="admin-item">

🦷 ${item.nome}

</div>

`;


});


}




// ======================================
// CARREGAR REDES
// ======================================

async function carregarRedesAdmin(){


const lista=document.getElementById("lista-redes");


lista.innerHTML="Carregando...";


const {data,error}=await supabaseClient
.from("clinica_especialidades")
.select("rede")
.order("rede");



if(error){

console.error(error);
lista.innerHTML="Erro ao carregar redes.";
return;

}



let redes=[...new Set(data.map(item=>item.rede))];


lista.innerHTML="";


redes.forEach(rede=>{


lista.innerHTML += `

<div class="admin-item">

🌐 ${rede}

</div>

`;


});


}
