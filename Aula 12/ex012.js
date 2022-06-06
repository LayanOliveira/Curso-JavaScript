var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

//console.log(`Agora são exatamente ${hora}:${minuto}`)
if (hora < 12 && hora >= 5) {
    console.log(`Bom Dia! Agora são exatamente ${hora}:${minuto}AM.`)
}
else if (hora <= 5){
    console.log(`Boa Madrugada! Agora são exatamente ${hora}:${minuto}AM.`)
}
else if (hora <= 18) {
    console.log(`Boa Tarde! Agora são exatamente ${hora}:${minuto}PM.`)
}
else if(hora <= 24){
    console.log(`Boa Noite! Agora são exatamente ${hora}:${minuto}PM.`)
}
