const env = document.getElementById('envio')

env.addEventListener('click', function(e) {
    e.preventDefault();

    const tempo = document.getElementById('tempo') 

    const valor = tempo.value 

    let seg = parseInt(valor)

    const hora = parseInt(seg / 3600)
    seg = seg % 3600

    const minutos = parseInt(seg / 60)
    seg = seg % 60

    document.getElementById('resultado').innerText = hora+':'+minutos+':'+seg
      
})




