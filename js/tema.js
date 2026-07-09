// ======================================
// TEMA CLARO / ESCURO
// ======================================

// Carrega o tema salvo
document.addEventListener("DOMContentLoaded", () => {

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "dark") {

        document.body.classList.add("dark");

    }

    atualizarIcone();

});


// ======================================
// ALTERAR TEMA
// ======================================

function alternarTema() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("tema", "dark");

    } else {

        localStorage.setItem("tema", "light");

    }

    atualizarIcone();

}


// ======================================
// ALTERAR ÍCONE
// ======================================

function atualizarIcone() {

    const botao = document.getElementById("btnTema");

    if (!botao) return;

    if (document.body.classList.contains("dark")) {

        botao.innerHTML = "☀️";

    } else {

        botao.innerHTML = "🌙";

    }

}
