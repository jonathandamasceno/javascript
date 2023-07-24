var agora = new Date () //var pra Data
var hora = agora.getHours() //Definindo o horário pelo sistema
console.log (`${hora} horas agora.`)
if (hora <= 11 ){
    console.log('Bom dia!')
}else if (hora <=18) {
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}