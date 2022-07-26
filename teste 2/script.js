const env = document.getElementById('envio')

env.addEventListener('click', function (e) {
    e.preventDefault();

    let prop = document.getElementById('prop').value

    let valor = document.getElementById('valor').value

    //parte 2

    if (valor > 0 && valor <= 1903.98) {
        let taxado = valor

        const valorFinal = taxado / prop
        if (prop == 1) {
            document.getElementById('saida').innerText = 'Saida:'+ valorFinal
        }
        if (prop == 2) {
            document.getElementById('saida').innerText = 'Saida:'+ valorFinal + ' ' + valorFinal
        }
    }
    if (valor >= 1903.99 && valor <= 2826.65) {
        let resultado = (valor * 7.50) / 100
        let taxado = valor - resultado

        const valorFinal = taxado / prop
        if (prop == 1) {
            document.getElementById('saida').innerText = 'Saida:'+ valorFinal
        }
        if (prop == 2) {
            document.getElementById('saida').innerText = 'Saida:'+ valorFinal + ' ' + valorFinal
        }
        
    }
    if (valor >= 2826.66 && valor <= 3751.05) {
        let resultado = (valor * 15) / 100
        let taxado = valor - resultado
        
        const valorFinal = taxado / prop
        if (prop == 1) {
            document.getElementById('saida').innerText = 'Saída:'+ valorFinal
        }
        if (prop == 2) {
            document.getElementById('saida').innerText = 'Saída:'+ valorFinal + ' ' + valorFinal
        }
    }
    if (valor >= 3751.06 && valor <= 4664.68) {
        let resultado = (valor * 22.50) / 100
        let taxado = valor - resultado
        
        const valorFinal = taxado / prop
        if (prop == 1) {
            document.getElementById('saida').innerText = 'Saída:'+ valorFinal
        }
        if (prop == 2) {
            document.getElementById('saida').innerText = 'Saída:'+ valorFinal + ' ' + valorFinal
        }
    }
    if(valor >= 4664.69) {
        let resultado = (valor * 27.50) / 100
        let taxado = valor - resultado
        
        const valorFinal = taxado / prop
        if (prop == 1) {
            document.getElementById('saida').innerText = 'Saída:'+ valorFinal
        }
        if (prop == 2) {
            document.getElementById('saida').innerText = 'Saída:'+ valorFinal + ' ' + valorFinal
        }
    }

    
   /*  console.log(taxado, prop)

    // parte 3
    const valorFinal = taxado / prop
    if (prop == 1) {
        document.getElementById('saida').innerText = valorFinal
    }
    if (prop == 2) {
        document.getElementById('saida').innerText = valorFinal + ' ' + valorFinal
    } */




})
