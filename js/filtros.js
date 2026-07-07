// ======================================
// FILTROS - REGIÃO / ESTADO / CIDADE / BAIRRO
// ======================================

// ---------- REGIÕES ----------
async function carregarRegioes() {

    const { data, error } = await supabaseClient
        .from("regioes")
        .select("*")
        .order("nome");

    if (error) {
        console.error(error);
        return;
    }

    const regiao = document.getElementById("regiao");

    regiao.innerHTML = `
        <option value="">Selecione a Região</option>
    `;

    data.forEach(item => {

        regiao.innerHTML += `
            <option value="${item.id}">
                ${item.nome}
            </option>
        `;

    });

}


// ---------- ESTADOS ----------
async function carregarEstados(regiaoId){

    const estado = document.getElementById("estado");
    const cidade = document.getElementById("cidade");
    const bairro = document.getElementById("bairro");

    estado.innerHTML='<option value="">Selecione o Estado</option>';
    cidade.innerHTML='<option value="">Selecione a Cidade</option>';
    bairro.innerHTML='<option value="">Selecione o Bairro</option>';

    if(!regiaoId) return;

    const {data,error}=await supabaseClient
        .from("estados")
        .select("*")
        .eq("regiao_id",regiaoId)
        .order("nome");

    if(error){
        console.error(error);
        return;
    }

    data.forEach(item=>{

        estado.innerHTML += `
            <option value="${item.id}">
                ${item.nome}
            </option>
        `;

    });

}


// ---------- CIDADES ----------
async function carregarCidades(estadoId){

    const cidade=document.getElementById("cidade");
    const bairro=document.getElementById("bairro");

    cidade.innerHTML='<option value="">Selecione a Cidade</option>';
    bairro.innerHTML='<option value="">Selecione o Bairro</option>';

    if(!estadoId) return;

    const {data,error}=await supabaseClient
        .from("cidades")
        .select("*")
        .eq("estado_id",estadoId)
        .order("nome");

    if(error){
        console.error(error);
        return;
    }

    data.forEach(item=>{

        cidade.innerHTML += `
            <option value="${item.id}">
                ${item.nome}
            </option>
        `;

    });

}


// ---------- BAIRROS ----------
async function carregarBairros(cidadeId){

    const bairro=document.getElementById("bairro");

    bairro.innerHTML='<option value="">Selecione o Bairro</option>';

    if(!cidadeId) return;

    const {data,error}=await supabaseClient
        .from("bairros")
        .select("*")
        .eq("cidade_id",cidadeId)
        .order("nome");

    if(error){
        console.error(error);
        return;
    }

    data.forEach(item=>{

        bairro.innerHTML += `
            <option value="${item.id}">
                ${item.nome}
            </option>
        `;

    });

}


// ======================================
// EVENTOS
// ======================================

document.getElementById("regiao").addEventListener("change",function(){

    carregarEstados(this.value);

});

document.getElementById("estado").addEventListener("change",function(){

    carregarCidades(this.value);

});

document.getElementById("cidade").addEventListener("change",function(){

    carregarBairros(this.value);

});


// ======================================

carregarRegioes();
