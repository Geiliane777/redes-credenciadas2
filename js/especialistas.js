console.log("especialistas.js carregado");

const botao = document.getElementById("buscar");

console.log(botao);

botao.addEventListener("click", buscarClinicas);

async function buscarClinicas() {

    console.log("Entrou na função");

    try {

        const bairro = document.getElementById("bairro").value;

        console.log("Bairro:", bairro);

        const resposta = await supabaseClient
            .from("clinicas")
            .select(`
                id,
                nome,
                endereco,
                telefone,
                bairros(nome),
                clinica_especialidades(
                    ativo,
                    rede,
                    especialidades(nome)
                )
            `)
            .eq("bairro_id", bairro);

        console.log("Resposta completa:", resposta);

        if(resposta.error){
            console.error("Erro:", resposta.error);
            return;
        }

        mostrarClinicas(resposta.data);

    } catch(e){

        console.error("ERRO GERAL:", e);

    }

}
