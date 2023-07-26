function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var agora = new Date()
    var hora = agora.getHours()
    //variaveis

    msg.innerHTML = `<h2>Agora são ${hora} horas</h2>`


    //mudança da foto e cor de fundo
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#FFADA0'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'tarde.png'//horários
        document.body.style.background = '#F6C18B'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#0E2829'
    }
}
