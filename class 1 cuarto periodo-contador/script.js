function contador(){
    let segundos = +document.querySelector('#segundos').value;
    setTimeout(finalizar, segundos * 1000);//inicia cuenta regresiva//
}

function finalizar(){
    document.querySelector('#salida').textContent = 'ON'
   // alert('Tiempo cumplido');//
   let alarma = document.querySelector('#alarma');
   alarma.play();
}

function reiniciar(){
    location.reload();
}