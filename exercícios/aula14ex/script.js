function contar(){
    var n1 = Number(document.getElementById('inicio').value)
    var n2 = Number(document.getElementById('fim').value)
    var numPasso = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    let cont
    
    res.innerHTML = null
    if(n1 < n2 ){
        cont = n1
        
        while(cont <= n2){
            res.innerHTML += `${cont} &#x1F449;`
            cont ++
        }
    }else if (n1> n2){
        cont = n1
        while(cont >= n2){
            res.innerHTML += `${cont} &#x1F449;`
            cont --
        }

    }else{
        res.innerHTML += `[ERRO] Coloque dados diferentes`
    }

}