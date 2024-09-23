const botoes = document.querySelectorAll("button");
const tela = document.getElementById("tela");
const operacoes = ["%", "/", "*", "-", "+"];

botoes.forEach(button => {
    button.addEventListener("click", ()=> {
        const botaoAtual = button.value;
        const telaAtual = tela.value;

        if(operacoes.includes(botaoAtual)){
            if(operacoes.includes(telaAtual.slice(-1))){
                tela.value = telaAtual.slice(0,-1) + botaoAtual;
            }
            else {
                tela.value +=botaoAtual
            }
        } else {
            tela.value += botaoAtual;
        }

        if(button.id == "backspace"){
            tela.value = telaAtual.slice(0,-1);
        }

        if(button.id == "limpar"){
            tela.value = "";
        }

        if(button.id == "igual"){
            const resultado = math.evaluate(telaAtual);
            tela.value = resultado;
        }
    })
})