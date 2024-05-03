const btn = document.getElementById("btn");

btn.onclick = () => {
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    const area = base * altura;

    window.alert(`A area do triangulo eh ${area}`);
}

