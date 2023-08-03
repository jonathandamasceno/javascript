//variáveis compostas

let num = [1 , 8 , 3 , 2 , 5]//coloca com virgulas entre chaves
num[5] = 7
num.push(6)//coloca o 6 na ultima posicao
//num.length quantidade de números
num.sort()//coloca em ordem

/*for(let pos = 0; pos<num.lenght; pos++){
    console.log(`O número é ${num} e a posição é ${pos}`)
}*/

for(let pos in num){
    console.log(num[pos])
}