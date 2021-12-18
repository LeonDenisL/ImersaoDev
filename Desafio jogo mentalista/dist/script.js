var numeroSecreto = parseInt(Math.random() * 10)
var  tentativas = 3

while (tentativas > 0) {

  var chute = parseInt(prompt("Digite um número entre 0 e 10"))

  if (numeroSecreto == chute) {
    document.write("<h2> Acertou </h2>")
    break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  } 
  }

if (chute != numeroSecreto){
  document.write("<h2>" + "Suas tentantivas acabaram. O número secreto era " + numeroSecreto + "</h2>")
}

// Aula 3 imersãoDev
// Leon Denis Silvestre de Lucena