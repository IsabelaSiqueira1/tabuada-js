const numero = prompt(
    "Ola, eu sou o Robo da Tabuada!\n" +
    "Informe o numero que voce deseja calcular a tabuada: " 
)
let resultado = ""

for (let fator = 1; fator <= 20; fator++){
    resultado += " -> " + numero + " * " + fator + " = " + (numero*fator) + "\n"
}

alert ("Resultado da tabuada de " + numero + ":\n\n" + resultado)