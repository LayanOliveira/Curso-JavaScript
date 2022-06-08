function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[Error] Impossível contar, favor preencher o forumulário!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        } if (i < f) { //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }

        } else { //Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}
