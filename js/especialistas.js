// ======================================
// REDE ESPECIALISTAS
// ======================================

console.log("especialistas.js carregado");


// Aguarda carregamento da página
document.addEventListener("DOMContentLoaded",()=>{

    const botao = document.getElementById("buscar");

    if(botao){

        botao.addEventListener(
            "click",
            buscarClinicas
        );

    }

});




// ======================================
// BUSCAR CLÍNICAS
// ======================================

async function buscarClinicas(){


    const bairro =
    document.getElementById("bairro").value;


    const especialidade =
    document.getElementById("especialidade").value;



    if(!bairro){

        alert("Selecione um bairro.");
        return;

    }



    let consulta = supabaseClient

    .from("clinicas")

    .select(`

        id,
        nome,
        endereco,
        telefone,
        ativo,


       bairros(

    nome,

    cidades(

        nome,

        estados(

            nome

        )

    )

)


        clinica_especialidades!inner(

            ativo,
            rede,


            especialidades(
                id,
                nome
            )

        )


    `)



    // clínica ativa

    .eq(
        "ativo",
        true
    )


    // bairro escolhido

    .eq(
        "bairro_id",
        bairro
    )


    // rede

    .eq(
        "clinica_especialidades.rede",
        "especialistas"
    )


    // relação ativa

    .eq(
        "clinica_especialidades.ativo",
        true
    );




    // ==============================
    // FILTRO DE ESPECIALIDADE
    // ==============================

  // ==============================
// FILTRO DE ESPECIALIDADE
// ==============================

if(especialidade){


    const { data: especialidadeData, error: erroEspecialidade } = 
    await supabaseClient
        .from("especialidades")
        .select("id")
        .eq("nome", especialidade)
        .single();



    if(erroEspecialidade){

        console.error(
            "Erro ao buscar especialidade:",
            erroEspecialidade
        );

        return;

    }



    consulta = consulta.eq(
        "clinica_especialidades.especialidade_id",
        especialidadeData.id
    );


}




    const {
        data,
        error

    } = await consulta;



    if(error){

        console.error(error);

        alert(
            "Erro ao buscar clínicas."
        );

        return;

    }



    console.log(
        "Resultado:",
        data
    );



    mostrarClinicas(data);



}
