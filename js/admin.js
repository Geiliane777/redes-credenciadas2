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


    const painelAdmin =
        document.getElementById("painelAdmin");



    if(loginArea){


        loginArea.style.display="none";


    }



    if(painelAdmin){


        painelAdmin.style.display="block";


    }


}






// =====================================
// VERIFICAR LOGIN AO CARREGAR
// =====================================


document.addEventListener(
"DOMContentLoaded",
()=>{


    const logado =
        localStorage.getItem(
            "adminLogado"
        );



    if(logado === "true"){


        mostrarPainel();


    }


});






// =====================================
// SAIR DO ADMIN
// =====================================

function sairAdmin(){


    localStorage.removeItem(
        "adminLogado"
    );


    location.reload();


}







// =====================================
// ABRIR MÓDULOS
// =====================================

function abrirModulo(modulo){



    const area =
        document.getElementById(
            "areaTrabalho"
        );



    if(!area) return;



    let conteudo = "";





    switch(modulo){



        // =============================
        // CLÍNICAS
        // =============================

        case "clinicas":

conteudo = `

<div class="card-admin">

<h2>
🏥 Cadastro de Clínicas
</h2>


<p>
Gerencie as clínicas credenciadas.
</p>


<hr><br>


<button onclick="novoCadastroClinica()">
➕ Nova Clínica
</button>


<br><br>


<div id="listaClinicas">

Carregando clínicas...

</div>


</div>

`;

        break;
        // =============================
        // ESPECIALIDADES
        // =============================

        case "especialidades":


            conteudo = `

                <h2>
                    🦷 Especialidades
                </h2>


                <p>
                    Cadastro e gerenciamento
                    das especialidades.
                </p>


            `;


        break;







        // =============================
        // REGIÕES
        // =============================

        case "regioes":


            conteudo = `

                <h2>
                    🌎 Regiões
                </h2>


                <p>
                    Gerenciar regiões cadastradas.
                </p>


            `;


        break;







        // =============================
        // ESTADOS
        // =============================

        case "estados":


            conteudo = `

                <h2>
                    📍 Estados
                </h2>


                <p>
                    Cadastro dos estados.
                </p>


            `;


        break;








        // =============================
        // CIDADES
        // =============================

        case "cidades":


            conteudo = `

                <h2>
                    🏙 Cidades
                </h2>


                <p>
                    Cadastro das cidades.
                </p>


            `;


        break;







        // =============================
        // BAIRROS
        // =============================

        case "bairros":


            conteudo = `

                <h2>
                    📌 Bairros
                </h2>


                <p>
                    Cadastro dos bairros.
                </p>


            `;


        break;







        default:


            conteudo = `

                <h2>
                    Bem-vindo ao painel administrativo
                </h2>


                <p>
                    Escolha uma opção no menu.
                </p>


            `;


    }






    area.innerHTML = conteudo;



}
function novoCadastroClinica(){


const area =
document.getElementById("areaTrabalho");


area.innerHTML = `


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





<label>
Bairro
</label>

<select id="bairroClinica">

<option>
Carregando bairros...
</option>

</select>





<label>
Especialidades
</label>


<select id="especialidadesClinica" multiple>

<option>
Carregando especialidades...
</option>


</select>




<label>
Rede
</label>


<select id="redeClinica">


<option value="especialistas">
Rede Especialistas
</option>


<option value="sindilegis">
Rede Sindilegis
</option>


</select>




<br>


<button onclick="salvarClinica()">

Salvar Clínica

</button>



</div>


`;



carregarBairrosAdmin();

carregarEspecialidadesAdmin();


}
async function salvarClinica(){


const nome =
document.getElementById("nomeClinica").value;


const endereco =
document.getElementById("enderecoClinica").value;


const telefone =
document.getElementById("telefoneClinica").value;


const bairro =
document.getElementById("bairroClinica").value;



const especialidades =
Array.from(
document.getElementById("especialidadesClinica").selectedOptions
)
.map(e=>e.value);



const rede =
document.getElementById("redeClinica").value;



if(!nome || !bairro || especialidades.length===0){

alert(
"Preencha todos os campos"
);

return;

}




// 1 - salva clínica

const {data:clinica,error}=await supabaseClient
.from("clinicas")
.insert([{

nome,
endereco,
telefone,
bairro_id:bairro,
ativo:true

}])
.select()
.single();




if(error){

console.error(error);

alert(
"Erro ao salvar clínica"
);

return;

}






// 2 - salva especialidades


const registros = especialidades.map(e=>({

clinica_id:clinica.id,

especialidade_id:e,

rede:rede,

ativo:true


}));




const {error:errorEsp}=await supabaseClient
.from("clinica_especialidades")
.insert(registros);





if(errorEsp){

console.error(errorEsp);

alert(
"Clínica salva, mas erro nas especialidades"
);

return;

}




alert(
"Clínica cadastrada com sucesso!"
);



abrirModulo("clinicas");


}
// =====================================
// CARREGAR BAIRROS
// =====================================

async function carregarBairrosAdmin(){
const select =
document.getElementById("bairroClinica");

const {data,error}=await supabaseClient
.from("bairros")
.select(`
id,
nome,
cidades(nome)
`)
.order("nome");
select.innerHTML="";
data.forEach(b=>{


select.innerHTML += `

<option value="${b.id}">

${b.nome} - ${b.cidades?.nome}

</option>

`;


});


}
// =====================================
// CARREGAR ESPECIALIDADES
// =====================================
async function carregarEspecialidadesAdmin(){


const select =
document.getElementById("especialidadesClinica");



const {data,error}=await supabaseClient
.from("especialidades")
.select("*")
.eq("ativo",true)
.order("nome");



select.innerHTML="";



data.forEach(e=>{


select.innerHTML += `

<option value="${e.id}">
${e.nome}
</option>

`;


});


}
