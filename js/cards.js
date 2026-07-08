// ======================================
// EXIBIR CLÍNICAS
// ======================================

function mostrarClinicas(clinicas) {

    const resultado = document.getElementById("resultado");

    // Limpa os resultados anteriores
    resultado.innerHTML = "";

    // Se não encontrou clínicas
    if (!clinicas || clinicas.length === 0) {

        resultado.innerHTML = `
            <div class="semResultado">
                <h2>Nenhuma clínica encontrada.</h2>
                <p>Tente selecionar outro bairro.</p>
            </div>
        `;

        return;
    }

    // Título
    resultado.innerHTML = `
        <h2 class="tituloResultado">
            Clínicas Encontradas (${clinicas.length})
        </h2>
    `;

    // Cards
    clinicas.forEach(clinica => {

        const bairro = clinica.bairros?.nome || "Não informado";

        const especialidades = clinica.clinica_especialidades
            ?.map(item => item.especialidades?.nome)
            .filter(nome => nome)
            .join(", ") || "Não informado";

        resultado.innerHTML += `

            <div class="card">

               <div class="cardHeader">

    <h2>${clinica.nome}</h2>

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
                        ${clinica.telefone || "Não informado"}
                    </p>

                    <p>
                        <strong>🦷 Especialidades</strong><br>
                        ${especialidades}
                    </p>

                </div>

            </div>

        `;

    });

}
