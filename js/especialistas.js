// ======================================
// REDE ESPECIALISTAS
// ======================================

console.log("especialistas.js carregado");


// ======================================
// EVENTO BOTÃO BUSCAR
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("buscar");


    if (botao) {

        botao.addEventListener(
            "click",
            buscarClinicas
        );

    }

});



// ======================================
// BUSCAR CLÍNICAS
// ======================================

async function buscarClinicas() {


    const bairro =
    document.getElementById("bairro").value;



    const especialidade =
    document.getElementById("especialidade").value;




    if (!bairro) {


        alert("Selecione um bairro.");

        return;

    }




    // ======================================
    // BUSCAR ID DA ESPECIALIDADE
    // ======================================

    let especialidadeId = null;



    if (especialidade) {


        const {
            data: especialidadeData,
            error: erroEspecialidade

        } = await supabaseClient

            .from("especialidades")

            .select("id")

            .eq(
                "nome",
                especialidade
            )

            .single();



        if (erroEspecialidade) {


            console.error(
                "Erro ao buscar especialidade:",
                erroEspecialidade
            );


            return;

        }



        especialidadeId =
        especialidadeData.id;


    }





    // ======================================
    // CONSULTA CLÍNICAS
    // ======================================


    let consulta =
    supabaseClient

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

        ),


        clinica_especialidades!inner(


            ativo,
            rede,
            especialidade_id,


            especialidades(

                id,
                nome

            )

        )


    `)



    // Clínica ativa

    .eq(
        "ativo",
        true
    )



    // Bairro escolhido

    .eq(
        "bairro_id",
        bairro
    )



    // Somente rede especialistas

    .eq(
        "clinica_especialidades.rede",
        "especialistas"
    )



    // Relação ativa

    .eq(
        "clinica_especialidades.ativo",
        true
    );






    // ======================================
    // FILTRO ESPECIALIDADE
    // ======================================

    if(especialidadeId){


        consulta = consulta.eq(

            "clinica_especialidades.especialidade_id",

            especialidadeId

        );


    }







    // ======================================
    // EXECUTAR CONSULTA
    // ======================================


    const {

        data,
        error

    } = await consulta;




    if(error){


        console.error(
            "Erro ao buscar clínicas:",
            error
        );


        alert(
            "Erro ao buscar clínicas."
        );


        return;

    }




    console.log(
        "Clínicas encontradas:",
        data
    );



    mostrarClinicas(data);



}
