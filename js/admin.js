// =====================================
// ADMIN.JS
// PAINEL ADMINISTRATIVO
// =====================================


// =====================================
// LOGIN
// =====================================
console.log("admin.js carregado");

function login(){


    const usuario =
        document.getElementById("usuario").value;


    const senha =
        document.getElementById("senha").value;



    const erro =
        document.getElementById("erroLogin");



    if(
        usuario === "admin" &&
        senha === "123456"
    ){


        localStorage.setItem(
            "adminLogado",
            "true"
        );


        window.location.href="admin.html";


    }else{


        erro.innerHTML =
        "Usuário ou senha incorretos";


    }


}
        mostrarPainel();



    }else{


        erro.innerHTML =
        "Usuário ou senha inválidos";


    }



}





// =====================================
// MOSTRAR PAINEL
// =====================================


function mostrarPainel(){


    const login =
    document.getElementById("loginArea");


    const painel =
    document.getElementById("painelAdmin");



    if(login){

        login.style.display="none";

    }



    if(painel){

        painel.style.display="block";

    }



}







// =====================================
// VERIFICAR LOGIN AO ABRIR
// =====================================


document.addEventListener(
"DOMContentLoaded",
()=>{


    const logado =
    localStorage.getItem(
        "adminLogado"
    );



    if(logado === "true"){


        mostrarPainel();


    }



});







// =====================================
// SAIR DO ADMIN
// =====================================


function sairAdmin(){


    localStorage.removeItem(
        "adminLogado"
    );



    location.reload();


}








// =====================================
// ABRIR MÓDULOS
// =====================================


function abrirModulo(modulo){


    const area =
    document.getElementById(
        "areaTrabalho"
    );



    if(!area) return;



    let conteudo = "";




    switch(modulo){



        case "clinicas":


            conteudo = `

                <h2>
                    🏥 Clínicas
                </h2>

                <p>
                    Cadastro e gerenciamento de clínicas.
                </p>

                <hr>

                <p>
                    Módulo será desenvolvido na próxima etapa.
                </p>

            `;


        break;





        case "especialidades":


            conteudo = `

                <h2>
                    🦷 Especialidades
                </h2>


                <p>
                    Cadastro de especialidades.
                </p>

            `;


        break;





        case "regioes":


            conteudo = `

                <h2>
                    🌎 Regiões
                </h2>

                <p>
                    Gerenciamento das regiões.
                </p>

            `;


        break;






        case "estados":


            conteudo = `

                <h2>
                    📍 Estados
                </h2>

                <p>
                    Cadastro de estados.
                </p>

            `;


        break;






        case "cidades":


            conteudo = `

                <h2>
                    🏙 Cidades
                </h2>

                <p>
                    Cadastro de cidades.
                </p>

            `;


        break;






        case "bairros":


            conteudo = `

                <h2>
                    📌 Bairros
                </h2>

                <p>
                    Cadastro de bairros.
                </p>

            `;


        break;



    }





    area.innerHTML = conteudo;



}
