//Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

let tamanho = 500
let velocidadembps = 100
let velocidade = velocidadembps / 8
let time = 0
console.log(velocidade)
time = (tamanho / velocidade) / 60

console.log(`${time.toFixed(2)} Minuto(s)`)


//ta com um erro q tenho q arrumar... :) 



