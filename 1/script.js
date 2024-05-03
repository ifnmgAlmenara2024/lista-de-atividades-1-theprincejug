const btn = document.getElementById("btn");

btn.onclick = () => {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    const imc = peso / (altura * altura);

    if(imc < 18.5) {
        window.alert("Abaixo do peso!");
    }
    else if(imc < 24.9) {
        window.alert("Peso normal!");
    }
    else if(imc < 29.9) {
        window.alert("Excesso de peso!");
    }
    else if(imc < 34.0) {
        window.alert("Obesidade I!");
    }
    else if(imc < 39.9) {
        window.alert("Obesidade II!");
    }
    else {
        window.alert("Thais Carla!");
    }
}
