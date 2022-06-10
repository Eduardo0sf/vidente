const resposta = [
    "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

const elementoResposta = document.querySelector("#resposta")
const inputPergunt = document.querySelector("#inputQuest")




// gerar resposta
function fazerPergunta(){

  if(inputPergunt.value == "") {
    alert("Digite sua pergunta")
    return
  }



  // gerar numero aleatorio
const totalRespostas = resposta.length
const numeroAleatorio = Math.floor(totalRespostas * Math.random())
console.log(resposta[numeroAleatorio])
//gerando texto no html, apartir do js
const pergunta = "<div>" + inputPergunt.value + "</div>"

elementoResposta.innerHTML = pergunta + resposta[numeroAleatorio]

//sumir depois de um certo tempo
setTimeout(function() {
  elementoResposta.style.opacity = 0;
}, 3000)

}


