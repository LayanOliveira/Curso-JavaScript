function contar() {
    let ini = document.getElementById("txtini")
    let fim = document.getElementById("txtfim")
    let pas = document.getElementById("txtpas")
    let res = document.getElementById("res")
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = "Impossível contar"
        // window.alert("Impossível contar. preencha os campos corretamente")
    } else {
        res.innerHTML = "Contando: "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert("Passo inválido, considerando passo 1")
            p = 1
        } if (i < f) { // Contagem Crescente
            for (let c = i; c <= f; c += p){ if (c == f) {res.innerHTML += `${c} `
            } else res.innerHTML += `${c} \u{1f449} `
            }
        } else { //Contagem Descrecente
            for (let c = i; c >= f; c -= p) {
                if (c == f) {res.innerHTML += `${c} `
            } else res.innerHTML += `${c} \u{1f449} `
                }
            }
        res.innerHTML += `\u{1f3c1}`
    }
}
