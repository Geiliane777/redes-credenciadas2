// =====================================
// LOGIN.JS
// =====================================

console.log("login.js carregado");

// =====================================
// CONFIGURAÇÃO
// =====================================

const USUARIO = "admin";
const SENHA = "123456";

// =====================================
// BOTÃO LOGIN
// =====================================

const btnEntrar = document.getElementById("btnEntrar");

if (btnEntrar) {

    btnEntrar.addEventListener("click", fazerLogin);

}

// Permite apertar ENTER

document.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        fazerLogin();

    }

});

// =====================================
// LOGIN
// =====================================

function fazerLogin(){

    const usuario = document
        .getElementById("usuario")
        .value
        .trim();

    const senha = document
        .getElementById("senha")
        .value
        .trim();

    const mensagem =
        document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if(usuario === "" || senha === ""){

        mensagem.innerHTML = "Preencha usuário e senha.";

        return;

    }

    if(usuario !== USUARIO || senha !== SENHA){

        mensagem.innerHTML = "Usuário ou senha inválidos.";

        return;

    }

    localStorage.setItem("adminLogado","true");

    window.location.href = "painel.html";

}
