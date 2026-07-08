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

      console.log(resposta.data);
        if(resposta.error){
            console.error("Erro:", resposta.error);
            return;
        }

        console.log(JSON.stringify(resposta.data, null, 2));

    } catch(e){

        console.error("ERRO GERAL:", e);

    }

}
