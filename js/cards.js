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

        resultado.innerHTML += `

            <div class="card">

                <h2>${clinica.nome}</h2>

                <div class="info">

                    <p>
                        <strong>📍 Endereço</strong><br>
                        ${clinica.endereco}
                    </p>

                    <p>
                        <strong>📞 Telefone</strong><br>
                        ${clinica.telefone || "Não informado"}
                    </p>

                </div>

            </div>

        `;

    });

}
