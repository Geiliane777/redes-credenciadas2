// =========================================
// LOGIN.JS
// =========================================

console.log("login.js carregado");

// =========================================
// LOGIN
// =========================================

function login() {

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const erro = document.getElementById("erroLogin");

    erro.innerHTML = "";

    if (usuario === "admin" && senha === "123456") {

        localStorage.setItem("adminLogado", "true");

        mostrarPainel();

    } else {

        erro.innerHTML = "Usuário ou senha incorretos.";

    }

}

// =========================================
// MOSTRAR PAINEL
// =========================================

function mostrarPainel() {

    document.getElementById("loginArea").style.display = "none";
    document.getElementById("painelAdmin").style.display = "block";

}

// =========================================
// SAIR
// =========================================

function sairAdmin() {

    localStorage.removeItem("adminLogado");

    location.reload();

}

// =========================================
// VERIFICAR LOGIN
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("adminLogado") === "true") {

        mostrarPainel();

    }

    // Botão Entrar
    document
        .getElementById("btnEntrar")
        .addEventListener("click", login);

    // Enter no usuário
    document
        .getElementById("usuario")
        .addEventListener("keypress", function (e) {

            if (e.key === "Enter") {

                login();

            }

        });

    // Enter na senha
    document
        .getElementById("senha")
        .addEventListener("keypress", function (e) {

            if (e.key === "Enter") {

                login();

            }

        });

    // Botão Sair
    document
        .getElementById("btnSair")
        .addEventListener("click", sairAdmin);

});
