function mostrarClinicas(clinicas) {

    console.log("mostrarClinicas foi chamada");

    const resultado = document.getElementById("resultado");

    console.log(resultado);

    resultado.innerHTML = "";

    clinicas.forEach(clinica => {

        resultado.innerHTML += `
            <div style="
                border:1px solid #000;
                margin:15px;
                padding:15px;
                background:white;
            ">
                <h2>${clinica.nome}</h2>
                <p>${clinica.endereco}</p>
            </div>
        `;

    });

}
