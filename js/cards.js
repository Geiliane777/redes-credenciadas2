// ======================================
// EXIBIR CLÍNICAS
// ======================================

function mostrarClinicas(clinicas) {


    const resultado = document.getElementById("resultado");


    resultado.innerHTML = "";



    // ======================================
    // REMOVER DUPLICIDADES
    // ======================================

    const clinicasUnicas = [
        ...new Map(
            clinicas.map(item => [
                item.id,
                item
            ])
        ).values()
    ];




    // ======================================
    // NENHUMA CLÍNICA
    // ======================================

    if (!clinicasUnicas || clinicasUnicas.length === 0) {


        resultado.innerHTML = `

            <div class="semResultado">

                <h2>
                    Nenhuma clínica encontrada.
                </h2>

                <p>
                    Tente selecionar outro bairro ou especialidade.
                </p>

            </div>

        `;


        return;

    }





    // ======================================
    // TÍTULO
    // ======================================

    resultado.innerHTML = `

        <h2 class="tituloResultado">

            Clínicas Encontradas (${clinicasUnicas.length})

        </h2>

    `;






    // ======================================
    // MONTAR CARDS
    // ======================================

    clinicasUnicas.forEach(clinica => {



        const bairro =
            clinica.bairros?.nome || "Não informado";



        const cidade =
            clinica.bairros?.cidades?.nome || "Não informado";



        const estado =
            clinica.bairros?.cidades?.estados?.nome || "Não informado";



        const telefone =
            clinica.telefone || "Não informado";





        // ======================================
        // ESPECIALIDADES
        // ======================================

        const especialidades =
            clinica.clinica_especialidades
            ?.map(item => item.especialidades?.nome)
            .filter(nome => nome)
            || [];



        let tags = "";



        especialidades.forEach(nome => {


            tags += `

                <span class="tag">

                    ${nome}

                </span>

            `;


        });





        // ======================================
        // GOOGLE MAPS
        // BUSCA PELO NOME DA CLÍNICA
        // ======================================


        const buscaMaps = encodeURIComponent(

            `${clinica.nome}, ${bairro}, ${cidade}, ${estado}`

        );





        // ======================================
        // TELEFONE PARA LIGAÇÃO
        // ======================================

        const telefoneLink = telefone
            .replace(/\D/g,'');





        // ======================================
        // CARD
        // ======================================


        resultado.innerHTML += `


            <div class="card">



                <div class="cardHeader">


                    <h2>
                         ${clinica.nome}
                    </h2>


                </div>





                <div class="info">





                    <p>

                        <strong>
                            Endereço
                        </strong>

                        <br>

                        ${clinica.endereco}

                    </p>






                    <p>

                        <strong>
                            Localização
                        </strong>

                        <br>

                        ${bairro}

                        <br>

                        ${cidade} - ${estado}

                    </p>







                    <p>

                        <strong>
                             Telefone
                        </strong>

                        <br>


                        ${
                            telefone !== "Não informado"

                            ?

                            `<a href="tel:${telefoneLink}">
                                ${telefone}
                            </a>`

                            :

                            telefone

                        }


                    </p>








                    <div class="especialidades">



                        <strong>

                             Procedimentos disponíveis

                        </strong>




                        <div class="tags">


                            ${tags}


                        </div>



                    </div>









                    <div class="acoes">





                        <a

                            class="btnAcao"

                            href="https://www.google.com/maps/search/?api=1&query=${buscaMaps}"

                            target="_blank"

                        >

                            📍 Ver no Google Maps


                        </a>




                    </div>





                </div>




            </div>



        `;



    });



}
