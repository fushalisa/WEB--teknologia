var counter = 0;

function init() {
    let nro1 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('firstTextInput').value = nro1;
    let nro2 = Math.floor(Math.random() * 10) + 1;
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
    counter = counter + 1;
    document.getElementById('tulos').innerText = tulos;
    document.getElementById('clicks').innerHTML = "Laskutoimituksia: " + counter + " kpl";

    let element = document.querySelector('#element');
    let p = document.createElement('p');
    p.textContent = nro1 + operation + nro2 + "=" + tulos;
    element.append(p);

    /*Voi käyttää eval, switvh - else tai if - else rakennetta
    /*switch(operation){
    case '+':
        tulos = nro1 + nro2;
        document.getElementById('tulos').innerText = tulos;
        break;
    case '-':
        tulos = nro1 - nro2;
        document.getElementById('tulos').innerText = tulos;
        break;
    case '*':
        tulos = nro1 * nro2;
        document.getElementById('tulos').innerText = tulos;
        break;
    case '/':
        tulos = nro1 / nro2;
        document.getElementById('tulos').innerText = tulos.toFixed(2);
        break;
    default:
        tulos = 'Virheellinen operaatio';
        document.getElementById('tulos').innerText = tulos;
    }*/
}

function iInfo() {
    let i = document.getElementById('i-text');
    if (i.style.display === "none") {
        i.style.display = "block";
    }
    else { i.style.display = "none"; }
}




let div = document.createElement('div');
div.append("some text");
console.log(div.textContent);
