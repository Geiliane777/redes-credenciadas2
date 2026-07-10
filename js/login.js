// ======================================
// LOGIN DO PAINEL ADMINISTRATIVO (Supabase Auth)
// ======================================

// Verifica se já existe uma sessão válida
window.addEventListener("load", async () => {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
        mostrarPainel();
    }
});

document.getElementById("btnLogin").addEventListener("click", fazerLogin);

document.getElementById("senha").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        fazerLogin();
    }
});

async function fazerLogin(){
    const email = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("loginMensagem");

    mensagem.innerHTML = "Entrando...";
    mensagem.style.color = "#6b7280";

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: senha
    });

    if(error){
        mensagem.innerHTML = "Usuário ou senha inválidos.";
        mensagem.style.color = "#dc2626";
        return;
    }

    mensagem.innerHTML = "";
    mostrarPainel();
}

function mostrarPainel(){
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("painel").classList.remove("hidden");
}

document.getElementById("btnLogout").addEventListener("click", async () => {
    await supabaseClient.auth.signOut();
    location.reload();
});
