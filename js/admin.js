// =====================================
// ADMIN.JS
// PAINEL ADMINISTRATIVO
// =====================================


console.log("admin.js carregado");



// =====================================
// LOGIN
// =====================================

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


    const loginArea =
        document.getElementById("loginArea");


    const painelAdmin =
        document.getElementById("painelAdmin");



    if(loginArea){


        loginArea.style.display="none";


    }



    if(painelAdmin){


        painelAdmin.style.display="block";


    }


}






// =====================================
// VERIFICAR LOGIN AO CARREGAR
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



        // =============================
        // CLÍNICAS
        // =============================

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
                    Próxima etapa:
                    formulário de cadastro.
                </p>


            `;


        break;





        // =============================
        // ESPECIALIDADES
        // =============================

        case "especialidades":


            conteudo = `

                <h2>
                    🦷 Especialidades
                </h2>


                <p>
                    Cadastro e gerenciamento
                    das especialidades.
                </p>


            `;


        break;







        // =============================
        // REGIÕES
        // =============================

        case "regioes":


            conteudo = `

                <h2>
                    🌎 Regiões
                </h2>


                <p>
                    Gerenciar regiões cadastradas.
                </p>


            `;


        break;







        // =============================
        // ESTADOS
        // =============================

        case "estados":


            conteudo = `

                <h2>
                    📍 Estados
                </h2>


                <p>
                    Cadastro dos estados.
                </p>


            `;


        break;








        // =============================
        // CIDADES
        // =============================

        case "cidades":


            conteudo = `

                <h2>
                    🏙 Cidades
                </h2>


                <p>
                    Cadastro das cidades.
                </p>


            `;


        break;







        // =============================
        // BAIRROS
        // =============================

        case "bairros":


            conteudo = `

                <h2>
                    📌 Bairros
                </h2>


                <p>
                    Cadastro dos bairros.
                </p>


            `;


        break;







        default:


            conteudo = `

                <h2>
                    Bem-vindo ao painel administrativo
                </h2>


                <p>
                    Escolha uma opção no menu.
                </p>


            `;


    }






    area.innerHTML = conteudo;



}
