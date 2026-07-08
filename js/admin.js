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
