let nome = "coloque o seu nome"
//sinta-se a vontade para por o xp inicial que quiser, e ver seu personagem subindo até o nivel desejado
let xp = 100
let nivel
/*a ideia era criar uma função algo mais complexo para brincar um pouco
mas acabou que complicou muito,o looping esta ai para substituir a funçã "subir de nivel"*/

/*"Função" subir de nivel
No valor da variavel "xp" que fica como parametro do looping,coloque o numero do nivel
que quer evoluir*/
while(xp <= 9000){
   xp++
console.log("seu xp atual é de " + xp)
}

if(xp <= 1000){
   nivel = "Ferro"
}else if(xp >= 1001 && xp <= 2000){
nivel = "Bronze"
}else if(xp >= 2001 && xp <= 5000){
nivel = "Prata"
}else if(xp >= 5001 && xp <= 7000){
nivel = "Ouro"
}else if(xp >= 7001 && xp <= 8000){
nivel = "Platina"
}else if (xp >= 8001 && xp <= 9000){
nivel = "Radiante"
}else if(xp >= 9001 && xp <= 10.000){
nivel = "Ascendente"
}else if(xp >= 10.001){
nivel = "Imortal"   
}
//uma mensagem extra no final do looping.
console.log("Você chegou ao nivel " + nivel + " parabéns!")

console.log("O Herói de nome " + nome + " está no nivel " + nivel)
