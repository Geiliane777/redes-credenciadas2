// =========================================
// DASHBOARD
// Rede Especialistas 2
// =========================================

window.addEventListener("load", () => {

    carregarDashboard();

});

// =========================================
// CARREGAR DASHBOARD
// =========================================

async function carregarDashboard(){

    await carregarTotalClinicas();
    await carregarTotalEspecialidades();
    await carregarTotalEstados();
    await carregarTotalCidades();
    await carregarTotalBairros();
    await carregarTotalRegioes();

}

// =========================================
// CLÍNICAS
// =========================================

async function carregarTotalClinicas(){

    const { count, error } = await supabaseClient
        .from("clinicas")
        .select("*", { count: "exact", head: true });

    if(error){

        console.error(error);
        return;

    }

    document.getElementById("totalClinicas").textContent = count;

}

// =========================================
// ESPECIALIDADES
// =========================================

async function carregarTotalEspecialidades(){

    const { count } = await supabaseClient
        .from("especialidades")
        .select("*", { count: "exact", head: true });

    document.getElementById("totalEspecialidades").textContent = count;

}

// =========================================
// ESTADOS
// =========================================

async function carregarTotalEstados(){

    const { count } = await supabaseClient
        .from("estados")
        .select("*", { count: "exact", head: true });

    document.getElementById("totalEstados").textContent = count;

}

// =========================================
// CIDADES
// =========================================

async function carregarTotalCidades(){

    const { count } = await supabaseClient
        .from("cidades")
        .select("*", { count: "exact", head: true });

    document.getElementById("totalCidades").textContent = count;

}

// =========================================
// BAIRROS
// =========================================

async function carregarTotalBairros(){

    const { count } = await supabaseClient
        .from("bairros")
        .select("*", { count: "exact", head: true });

    document.getElementById("totalBairros").textContent = count;

}

// =========================================
// REGIÕES
// =========================================

async function carregarTotalRegioes(){

    const { count } = await supabaseClient
        .from("regioes")
        .select("*", { count: "exact", head: true });

    document.getElementById("totalRegioes").textContent = count;

}
