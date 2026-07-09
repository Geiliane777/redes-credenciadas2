// ======================================
// TEMA CLARO / ESCURO
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const btnTema = document.getElementById("btnTema");

    if (!btnTema) return;


    // ======================================
    // CARREGAR TEMA SALVO
    // ======================================

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "dark") {

        document.body.classList.add("dark");

        btnTema.innerHTML = "☀️";

        btnTema.title = "Tema Claro";

    } else {

        document.body.classList.remove("dark");

        btnTema.innerHTML = "🌙";

        btnTema.title = "Tema Escuro";

    }


    // ======================================
    // ALTERAR TEMA
    // ======================================

    btnTema.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark = document.body.classList.contains("dark");


        if (dark) {

            localStorage.setItem("tema", "dark");

            btnTema.innerHTML = "☀️";

            btnTema.title = "Tema Claro";

        } else {

            localStorage.setItem("tema", "light");

            btnTema.innerHTML = "🌙";

            btnTema.title = "Tema Escuro";

        }

    });

});
