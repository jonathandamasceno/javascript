function contar(){// 'let' não vai existir se sair desse bloco
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let numPasso = document.getElementById('passo')
    let res = document.getElementById('res')



    //se n colocar nada 
    if (inicio.value.length == 0 || fim.value.length == 0 || numPasso.value.length == 0) {
        window.alert("[ERRO] DIgite os valores corretamente")
        res.innerHTML = `Não tem como contar`
    }else{
        res.innerHTML = 'Contando: <br>'

        let i = Number(inicio.value)//inicio convertido pra número
        let f = Number(fim.value)//fim '' '' ''   
        let p = Number(passo.value)//passo '' '' '' 
        if(p <=0 ){
            window.alert('[ERRO] Passo invalido. Passo 1 considerado.')
            p = 1
        }
        //contagem crescente
        if (i < f){
            
            for(let c = i; c <= f; c += p){//*Explicação no final
            res.innerHTML += `${c} \u{1F449} `
    }}
        //contagem decrescente
        else{
        for(c=i; c>=f; c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }
}       
}   

    res.innerHTML += `&#x1F3C1;`
}

//O contador inicia no 'i' , se ele for menor que o final, repete ele + o passo