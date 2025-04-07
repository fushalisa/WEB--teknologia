function init(){
    let nro1 = Math.floor(Math.random()* 10)+1;
    document.getElementById('firstTextInput').value = nro1;
    let nro2 = Math.floor(Math.random()* 10)+1;
    document.getElementById('firstTextInput1').value = nro2;
}

function minusNro1() { 
    let nro1 = parseInt(document.getElementById('firstTextInput').value);
    if (nro1 > 1) document.getElementById('firstTextInput').value = nro1 - 1;
}

function plusNro1() {
    let nro1 = parseInt(document.getElementById('firstTextInput').value);
    if (nro1 < 10) document.getElementById('firstTextInput').value = nro1 + 1;
}

function minusNro2() { 
    let nro2 = parseInt(document.getElementById('firstTextInput1').value);
    if (nro2 > 1) document.getElementById('firstTextInput1').value = nro2 - 1;
}

function plusNro2() {
    let nro2 = parseInt(document.getElementById('firstTextInput1').value);
    if (nro2 < 10) document.getElementById('firstTextInput1').value = nro2 + 1;
}

function calculate() {
    let nro1 = parseInt(document.getElementById('firstTextInput').value);
    let nro2 = parseInt(document.getElementById('firstTextInput1').value);
    let operation = document.getElementById('operation').value;
    let tulos = eval(nro1 + operation + nro2);
    document.getElementById('tulos').innerText = tulos;
}
