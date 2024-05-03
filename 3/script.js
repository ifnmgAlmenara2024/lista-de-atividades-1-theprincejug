const btn = document.getElementById("btn");

btn.onclick = () => {
    let temperatura = Number(document.getElementById("temp").value);
    const far = (temperatura * 9/5) + 32

    window.alert(`Os graus em Fahrenheit eh ${far}`);
}
