//variáveis compostas

let num = [1 , 8 , 3 , 2 , 5]//coloca com virgulas entre chaves
//num[5] = 7

//num.push(6)coloca o 6 na ultima posicao

//num.length quantidade de números

//num.sort()coloca em ordem

/*for(let pos = 0; pos < num.length; pos++){
    console.log(`a posição é ${pos} e o numero é ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`a posição é ${pos} e o numero é ${num[pos]}`)
}