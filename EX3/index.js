//Receber 2 numeros inteiros
//Exibir em ordem crescente

var num1 = parseInt(prompt("Informe o primeiro numero: "))
var num2 = parseInt(prompt("Informe o segundo numero: "))

if(num1 > num2) {
    alert("Os valores em ordem crescente são: " + num2 +  " e " + num1)
} else if(num2 > num1) {
    alert("Os valores em ordem crescente são: " + num1 +  " e " + num2)
} else {
    alert("Os valores são iguais, sendo assim, não possuem ordem crescente");
}