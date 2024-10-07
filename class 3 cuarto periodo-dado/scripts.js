function dice() {
    let minVal = document.querySelector('#min').value; 
    let maxVal = document.querySelector('#max').value;
    let out = document.querySelector('#salida');

    let number = Math.floor(Math.random() * (maxVal - minVal + 2)); 
    out.textContent = number;  
}