
var operacao = prompt("Digite o número do Pokemon na Pokédex (cadastrado do 1 ao 9 no momento): ")

if (operacao == 1) {
  document.write("<h2>Bulbasaur</h2>")
  window.onload = function imageOption() {                      document.getElementById("imageoption").src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";
}
} else if (operacao == 2) {
  document.write("<h2>Ivysaur</h2>")
  window.onload = function imageOption() {                     document.getElementById("imageoption").src="https://cdn.bulbagarden.net/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png";
}
} else if (operacao == 3) {
  document.write("<h2>Venusaur</h2>")
  window.onload = function imageOption() {                     document.getElementById("imageoption").src=" https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/1200px-003Venusaur.png";
}
} else if (operacao == 4) {
  document.write("<h2>Charmander</h2>")
  window.onload = function imageOption() {                     document.getElementById("imageoption").src=" https://i.imgur.com/mMV5phi.png";
}
}else if (operacao == 5) {
  document.write("<h2>Chameleon</h2>")
  window.onload = function imageOption() {                     document.getElementById("imageoption").src=" https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.png";
}
} else if (operacao == 6) {
  document.write("<h2>Charizard</h2>")
  window.onload = function imageOption() {                     document.getElementById("imageoption").src=" https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/1200px-006Charizard.png";
}
}else if (operacao == 7) {
  document.write("<h2>Squirtle</h2>")
  window.onload = function imageOption() {                     document.getElementById("imageoption").src=" https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png";
}
} else if (operacao == 8) {
  document.write("<h2>Wartortle</h2>")
  window.onload = function imageOption() {                     document.getElementById("imageoption").src=" http://static.pokemonpets.com/images/monsters-images-800-800/8-Wartortle.png";
}
} else if (operacao == 9) {
  document.write("<h2>Blastoise</h2>")
  window.onload = function imageOption() {                     document.getElementById("imageoption").src=" https://i.pinimg.com/originals/27/8a/81/278a81da06402041a98a6693246d6dbe.png";
}
} else {
  document.write("<h2>Não cadastrado</h2>")
}

// Segunda aula Alura ImersãoDev
//Leon Denis Silvestre de Lucena
//escrevenndo na tela - document.write()
//concatenação - ("palavra" + variavel)]


