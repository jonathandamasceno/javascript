function verificar(){
//variaveis de data
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
var data = new Date()
var ano = data.getFullYear()

if(fano.value.length == 0 || fano.value > ano){
    window.alert ('[ERRO] Verifique os dados.')
}else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''//vazio, se um dos dois for selecionado, chama a condicão .checked
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            genero = ' um bebê'
            img.setAttribute('src', 'bebe-m.png')
        }else if(idade <15){
            genero = ' um menino'
            img.setAttribute('src', 'crianca-m.png')
        }
        else if(idade < 21){
            genero = ' um adolescente'
            img.setAttribute('src', 'jovem-m.png')

        }else if(idade < 50){
            genero += ' adulto'
            img.setAttribute('src', 'adulto-m.png')
        }else if (idade > 50){
            genero += ' idoso'
            img.setAttribute('src', 'velho-m.png')
        }

    }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            genero = ' uma bebê'
            img.setAttribute('src', 'bebe-f.png')
        }else if(idade <15){
            genero = ' uma menina'
            img.setAttribute('src', 'crianca-f.png')
        }
        else if(idade < 21){
            genero += ' adolescente'
            img.setAttribute('src', 'jovem-f.png')

        }else if(idade < 50){
            genero += ' adulta'
            img.setAttribute('src', 'adulta-f.png')
        }else if (idade > 50){
            genero += ' idosa'
            img.setAttribute('src', 'velha-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    img.style.maxHeight = '300px'
    res.appendChild(img)
}

}