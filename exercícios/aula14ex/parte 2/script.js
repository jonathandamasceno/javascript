var txtnum =document.getElementById('numero')
var res = document.getElementById('res')    

function gerarmult(){
    res.innerHTML = null
    if(txtnum.value.length == 0 ){
        res.innerHTML = ("Por favor digite um número!")
      
    }else if(txtnum.value != null ){
        let num = Number(txtnum.value)
        let mult = 1
        while(mult <= 10){
            res.innerHTML += ` ${num} * ${mult} = ${num * mult}<br>`
            mult++
        }
    }
    }
//jeito certo
function gerarsom(){
    res.innerHTML = null
    if(txtnum.value.length == 0 ){
        res.innerHTML = ("Por favor digite um número!")
      
    }else if(txtnum.value != null ){
        let num = Number(txtnum.value)
        let soma = 1
        while(soma <= 10){
            res.innerHTML += ` ${num} + ${soma} = ${num + soma}<br>`
            soma++
        }
    }

}
//jeito certo também, só que trabalhoso
    
    /*res.innerHTML += `${num} * 1 = ${num *1} <br>`
    res.innerHTML += `${num} * 2 = ${num *2} <br>`
    res.innerHTML += `${num} * 3 = ${num *3} <br>`
    res.innerHTML += `${num} * 4 = ${num *4} <br>`
    res.innerHTML += `${num} * 5 = ${num *5} <br>`
    res.innerHTML += `${num} * 6 = ${num *6} <br>`
    res.innerHTML += `${num} * 7 = ${num *7} <br>`
    res.innerHTML += `${num} * 8 = ${num *8} <br>`
    res.innerHTML += `${num} * 9 = ${num *9} <br>`
    res.innerHTML += `${num} * 10 = ${num *10}`*/