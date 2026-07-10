// ======================================
// LOGIN DO PAINEL ADMINISTRATIVO
// ======================================

const USUARIO = "admin";
const SENHA = "123456";

// Verifica se já existe uma sessão
window.addEventListener("load", () => {

    const logado = localStorage.getItem("adminLogado");

    if(logado === "true"){
        mostrarPainel();
    }

});

// Evento do botão Entrar
document.getElementById("btnLogin").addEventListener("click", fazerLogin);

// Permite pressionar ENTER
document.getElementById("senha").addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        fazerLogin();
    }

});

function fazerLogin(){

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const mensagem = document.getElementById("loginMensagem");

    if(usuario === USUARIO && senha === SENHA){

        localStorage.setItem("adminLogado","true");

        mostrarPainel();

        return;

    }

    mensagem.innerHTML = "Usuário ou senha inválidos.";
    mensagem.style.color = "#dc2626";

}

function mostrarPainel(){

    document.getElementById("loginScreen").classList.add("hidden");

    document.getElementById("painel").classList.remove("hidden");

}

document.getElementById("btnLogout").addEventListener("click",()=>{

    localStorage.removeItem("adminLogado");

    location.reload();

});
