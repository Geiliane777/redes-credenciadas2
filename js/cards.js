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
                <h2>Nenhuma clínica encontrada.</h2>
                <p>Tente selecionar outro bairro.</p>
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

    // Percorre as clínicas
    clinicas.forEach(clinica => {

        const bairro = clinica.bairros?.nome || "Não informado";

        const telefone = clinica.telefone || "Não informado";

        const especialidades = clinica.clinica_especialidades
            ?.map(item => item.especialidades?.nome)
            .filter(nome => nome) || [];

        let tags = "";

        especialidades.forEach(nome => {

            tags += `
                <span class="tag">
                    ${nome}
                </span>
            `;

        });

        // Endereço para o Google Maps
        const enderecoMaps = encodeURIComponent(clinica.endereco);

        resultado.innerHTML += `

            <div class="card">

                <div class="cardHeader">

                    <h2>🏥 ${clinica.nome}</h2>

                </div>

                <div class="info">

                    <p>

                        <strong>📍 Endereço</strong><br>

                        ${clinica.endereco}

                    </p>

                    <p>

                        <strong>🏙 Bairro</strong><br>

                        ${bairro}

                    </p>

                    <p>

                        <strong>📞 Telefone</strong><br>

                        ${telefone}

                    </p>

                    <div class="especialidades">

                        <strong>🦷 Especialidades</strong>

                        <div class="tags">

                            ${tags}

                        </div>

                    </div>

                    <div class="acoes">

                        <a
                            class="btnAcao"
                            href="https://www.google.com/maps/search/?api=1&query=${enderecoMaps}"
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
