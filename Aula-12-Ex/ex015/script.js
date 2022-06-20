function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    else {
        var fgen = document.getElementsByName('radgen')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fgen[0].checked) {genero = 'Homem'}
        else {genero = 'Mulher'}
        
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', `imagens/${genero}/bebe.png`)
                document.body.style.background = '#b9c7d0'}
            else if (idade <= 21) {
                img.setAttribute('src', `imagens/${genero}/jovem.png`)
                document.body.style.background = '#c9b5ab' }
            else if(idade <= 50) {
                img.setAttribute('src', `imagens/${genero}/adulto.png`)
                document.body.style.background = '#d5d0c7'}
            else {
                img.setAttribute('src', `imagens/${genero}/idoso.png`)
                document.body.style.background = '#626359'}

            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        
    }
}
