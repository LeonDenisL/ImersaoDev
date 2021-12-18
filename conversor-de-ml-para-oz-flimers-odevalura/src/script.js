var valorEmMl = prompt("Qual o valor em ML(mililitro) que você deseja converter para Oz(onça líquida)?")

var valorEmMlNumero = parseFloat(valorEmMl)

var valorEmOz = valorEmMl * 0.033814
var valorEmOzFinal = valorEmOz.toFixed(2)

alert(valorEmOzFinal)

// escrito por Leon Denis Lucena na imersãoDev Alura
//Revisão
//var são as variáveis - int - float - string
//alert - parseInt - parseFloat - prompt
// soma com + e multiplicar com *