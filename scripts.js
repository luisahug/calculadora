const botoes = document.querySelectorAll("button");
const tela = document.getElementById("tela");

botoes.forEach(button => {
    button.addEventListener("click", ()=> {
        tela.value += button.value;
    })
})