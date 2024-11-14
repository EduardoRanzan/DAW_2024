function main(){
    const mensagem = 'Função sem retorno (procedure)';

    console.log(mensagem);
}

function process(){
    const mensagem = 'Função com retorno (function)'

    return mensagem;
}

function run() {
    inicio()

    const resultado = process();

    console.log(resultado)
}

run()