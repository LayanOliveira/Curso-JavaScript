function tabuada() {
    let num = parseInt(document.getElementById('txtn').value)
    let tab = document.getElementById('seltab')
    if (num.length == 0) { window.alert('Por Favor digite um número') }
    else {
        let n = num
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = (`${n} x ` + c + " = " + `${n * c}`)
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}


// RESOLUÇÃO DO GUANABARA (Ele fez com while, mas da no mesmo)

// function tabuada() {
//     let num = document.getElementById('txtn')
//     let tab = document.getElementById('seltab')
//     if (num.value.lenght == 0) { window.alert('Por Favor digite um número') }
//     else {
//         let n = Number(num.value)
//         let c = 1
//         tab.innerHTML = ''
//         while (c <= 10) {
//             let item = document.createElement('option')
//             item.text = `${n} X ${c} = ${n * c}`
//             item.value = `tab${c}`
//             tab.appendChild(item)
//             c++
//         }
//     }
// }

