// =======================================
// EXIBIR CLÍNICAS
// =======================================

function mostrarClinicas(clinicas) {

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (!clinicas || clinicas.length === 0) {

        resultado.innerHTML = `
            <div class="semResultado">
                Nenhuma clínica encontrada.
            </div>
        `;

        return;
    }

    clinicas.forEach(clinica => {

        // Bairro
        const bairro = clinica.bairros?.nome || "Não informado";

        // Especialidades
        const especialidades = clinica.clinica_especialidades
            ?.filter(item => item.ativo)
            ?.map(item => item.especialidades?.nome)
            ?.join(", ") || "Não informado";

        resultado.innerHTML += `

            <div class="card">

                <h2>🏥 ${clinica.nome}</h2>

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
