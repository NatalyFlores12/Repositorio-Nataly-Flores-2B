function suma(){
    let nume1 = +document.getElementById('numero1').value;
    let nume2 = +document.getElementById('numero2').value;
    let display = document.getElementById('salida');

    display.textContent = nume1 + nume2;
}

function resta(){
    let nume1 = +document.getElementById('numero1').value;
    let nume2 = +document.getElementById('numero2').value;
    let display = document.getElementById('salida');

    display.textContent = nume1 - nume2;
}

function multi(){
    let nume1 = +document.getElementById('numero1').value;
    let nume2 = +document.getElementById('numero2').value;
    let display = document.getElementById('salida');

    display.textContent = nume1 * nume2;
}

function divi(){
    let nume1 = +document.getElementById('numero1').value;
    let nume2 = +document.getElementById('numero2').value;
    let display = document.getElementById('salida');

    display.textContent = nume1 / nume2;
}

function raiz(){
    let nume1 = +document.getElementById('numero1').value;
    // let nume2 = +document.getElementById('numero2').value;
    let display = document.getElementById('salida');

    display.textContent =Math.sqrt(nume1) ;
}

function potencia(){
    let nume1 = +document.getElementById('numero1').value;
    let nume2 = +document.getElementById('numero2').value;
    let display = document.getElementById('salida');

    display.textContent =Math.pow(nume1, nume2) ;
}

function borrar(){
    document.getElementById('numero1').value=' ';
    document.getElementById('numero2').value=' ';
    let display= document.getElementById('salida');

    display.textContent=' ';
}
