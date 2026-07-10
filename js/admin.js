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


    const painel =
    document.getElementById("painelAdmin");



    if(loginArea){

        loginArea.style.display="none";

    }



    if(painel){

        painel.style.display="block";

    }


}





// =====================================
// VERIFICAR LOGIN
// =====================================


document.addEventListener(
"DOMContentLoaded",
()=>{


    const logado =
    localStorage.getItem(
        "adminLogado"
    );



    if(logado==="true"){

        mostrarPainel();

    }


});







// =====================================
// SAIR
// =====================================


function sairAdmin(){


    localStorage.removeItem(
        "adminLogado"
    );


    location.reload();


}








// =====================================
// MENU
// =====================================


function abrirModulo(modulo){


const area =
document.getElementById(
"areaTrabalho"
);



let conteudo="";



switch(modulo){



case "clinicas":


conteudo=`

<div class="card-admin">


<h2>
🏥 Clínicas
</h2>


<button onclick="novoCadastroClinica()">

➕ Nova Clínica

</button>



<div id="listaClinicas">

</div>


</div>


`;

break;






case "especialidades":


conteudo=`

<div class="card-admin">

<h2>
🦷 Especialidades
</h2>


<p>
Cadastro de especialidades.
</p>


</div>

`;

break;







case "regioes":


conteudo=`

<div class="card-admin">

<h2>
🌎 Regiões
</h2>


<p>
Gerenciar regiões.
</p>


</div>

`;

break;








case "estados":


conteudo=`

<div class="card-admin">

<h2>
📍 Estados
</h2>


<p>
Gerenciar estados.
</p>


</div>

`;

break;







case "cidades":


conteudo=`

<div class="card-admin">

<h2>
🏙 Cidades
</h2>


<p>
Gerenciar cidades.
</p>


</div>

`;

break;







case "bairros":


conteudo=`

<div class="card-admin">

<h2>
📌 Bairros
</h2>


<p>
Gerenciar bairros.
</p>


</div>

`;

break;


}



area.innerHTML=conteudo;


}










// =====================================
// NOVA CLÍNICA
// =====================================


function novoCadastroClinica(){



const area =
document.getElementById(
"areaTrabalho"
);



area.innerHTML=`


<div class="card-admin">


<h2>
➕ Nova Clínica
</h2>




<label>
Nome da Clínica
</label>

<input id="nomeClinica">





<label>
Endereço
</label>

<input id="enderecoClinica">





<label>
Telefone
</label>

<input id="telefoneClinica">





<h3>
📍 Localização
</h3>





<label>
Região
</label>

<select id="regiaoClinica">

<option>
Selecione
</option>

</select>





<label>
Estado
</label>

<select id="estadoClinica">

<option>
Selecione
</option>

</select>





<label>
Cidade
</label>

<select id="cidadeClinica">

<option>
Selecione
</option>

</select>





<label>
Bairro
</label>

<select id="bairroClinica">

<option>
Selecione
</option>

</select>






<h3>
🦷 Especialidades
</h3>


<div id="listaEspecialidades">

Carregando...

</div>





<h3>
🌐 Rede
</h3>


<select id="redeClinica">


<option value="especialistas">
Rede Especialistas
</option>


<option value="sindilegis">
Rede Sindilegis
</option>


</select>





<br><br>


<button onclick="salvarClinica()">

Salvar Clínica

</button>



</div>


`;



carregarRegioesAdmin();

carregarEspecialidadesAdmin();


}









// =====================================
// CARREGAR REGIÕES
// =====================================


async function carregarRegioesAdmin(){


const select =
document.getElementById(
"regiaoClinica"
);



if(!select) return;



const {data,error}=await supabaseClient
.from("regioes")
.select("*")
.order("nome");



if(error){

console.error(error);

return;

}



select.innerHTML=`

<option value="">
Selecione a Região
</option>

`;



data.forEach(r=>{


select.innerHTML+=`

<option value="${r.id}">
${r.nome}
</option>

`;


});


}








// =====================================
// CARREGAR ESPECIALIDADES
// =====================================


async function carregarEspecialidades(){

    console.log("Carregando especialidades...");

    const select = document.getElementById("especialidade");

    console.log("Select:", select);

    const { data, error } = await supabaseClient
        .from("especialidades")
        .select("*")
        .order("nome");

    console.log("Erro:", error);
    console.log("Dados:", data);

    if(error){
        return;
    }

    select.innerHTML = `
        <option value="">Todas as Especialidades</option>
    `;

    data.forEach(item => {

        select.innerHTML += `
            <option value="${item.id}">
                ${item.nome}
            </option>
        `;

    });

}
// =====================================
// SALVAR CLÍNICA
// =====================================


async function salvarClinica(){



const nome =
document.getElementById(
"nomeClinica"
).value;



const endereco =
document.getElementById(
"enderecoClinica"
).value;



const telefone =
document.getElementById(
"telefoneClinica"
).value;



const bairro =
document.getElementById(
"bairroClinica"
).value;



const rede =
document.getElementById(
"redeClinica"
).value;




const especialidades =
Array.from(
document.querySelectorAll(
".especialidadeCheck:checked"
)
)
.map(e=>e.value);






if(
!nome ||
!bairro ||
especialidades.length===0
){


alert(
"Preencha todos os campos"
);


return;


}






const {data:clinica,error}=await supabaseClient
.from("clinicas")
.insert([{

nome:nome,

endereco:endereco,

telefone:telefone,

bairro_id:bairro,

ativo:true

}])
.select()
.single();






if(error){


console.error(error);

alert(
"Erro ao cadastrar clínica"
);


return;


}

const dadosEspecialidades =
especialidades.map(e=>({


clinica_id:clinica.id,


especialidade_id:e,


rede:rede,


ativo:true



}));






const {error:errorEsp}=await supabaseClient
.from("clinica_especialidades")
.insert(
dadosEspecialidades
);






if(errorEsp){


console.error(errorEsp);


alert(
"Erro ao salvar especialidades"
);


return;


}
alert(
"Clínica cadastrada com sucesso!"
);
abrirModulo("clinicas");
}
