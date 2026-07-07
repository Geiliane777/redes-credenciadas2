// ================================
// EXIBIR CLÍNICAS NA TELA
// ================================

function mostrarClinicas(clinicas) {

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (clinicas.length === 0) {

        resultado.innerHTML = `
            <p>Nenhuma clínica encontrada.</p>
        `;

        return;
    }

    clinicas.forEach(clinica => {

        resultado.innerHTML += `
            <div class="card">

                <h2>${clinica.nome}</h2>

                <p>
                    <strong>📍 Endereço:</strong><br>
                    ${clinica.endereco}
                </p>

                <p>
                    <strong>📞 Telefone:</strong><br>
                    ${clinica.telefone ?? "Não informado"}
                </p>

            </div>
        `;

    });

}
