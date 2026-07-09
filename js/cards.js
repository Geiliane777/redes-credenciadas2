// ======================================
// EXIBIR CLÍNICAS
// ======================================

function mostrarClinicas(clinicas) {


    const resultado = document.getElementById("resultado");


    resultado.innerHTML = "";



    // Nenhuma clínica encontrada

    if (!clinicas || clinicas.length === 0) {


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



    // Título dos resultados

    resultado.innerHTML = `

        <h2 class="tituloResultado">

            Clínicas Encontradas (${clinicas.length})

        </h2>

    `;



    // Percorre clínicas

    clinicas.forEach(clinica => {



        // ==============================
        // LOCALIZAÇÃO
        // ==============================

        const bairro =
        clinica.bairros?.nome || "Não informado";


        const cidade =
        clinica.bairros?.cidades?.nome || "Não informado";


        const estado =
        clinica.bairros?.cidades?.estados?.nome || "Não informado";




        // ==============================
        // TELEFONE
        // ==============================

        const telefone =
        clinica.telefone || "Não informado";




        // ==============================
        // REDE
        // ==============================

        const rede =
        clinica.clinica_especialidades?.[0]?.rede 
        || "Não informado";




        // ==============================
        // ESPECIALIDADES
        // ==============================

        const especialidades = [

            ...new Set(

                clinica.clinica_especialidades

                ?.map(item => 
                    item.especialidades?.nome
                )

                .filter(nome => nome)

            )

        ];



        let tags = "";



        especialidades.forEach(nome => {


            tags += `

                <span class="tag">

                    ${nome}

                </span>

            `;


        });




        // ==============================
        // GOOGLE MAPS
        // ==============================

        const enderecoMaps =
        encodeURIComponent(

            `${clinica.endereco}, ${cidade}, ${estado}`

        );




        // ==============================
        // CARD
        // ==============================

        resultado.innerHTML += `


            <div class="card">


                <div class="cardHeader">


                    <h2>
                        🏥 ${clinica.nome}
                    </h2>


                </div>




                <div class="info">



                    <p>

                        <strong>
                            📍 Endereço
                        </strong>

                        <br>

                        ${clinica.endereco}

                    </p>




                    <p>

                        <strong>
                            🏙 Localização
                        </strong>

                        <br>

                        ${bairro} -
                        ${cidade}/${estado}

                    </p>




                    <p>

                        <strong>
                            📞 Telefone
                        </strong>

                        <br>

                        ${telefone}

                    </p>




                    <p>

                        <strong>
                            🌐 Rede
                        </strong>

                        <br>

                        ${rede}

                    </p>




                    <div class="especialidades">


                        <strong>
                            🦷 Especialidades
                        </strong>



                        <div class="tags">


                            ${
                                tags ||
                                "<span>Não informado</span>"
                            }


                        </div>


                    </div>





                    <div class="acoes">


                        <a

                            class="btnAcao"

                            href="
                            https://www.google.com/maps/search/?api=1&query=${enderecoMaps}
                            "

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
