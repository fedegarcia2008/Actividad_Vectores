function diaDeLaSemana() {
    let dia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    n = parseInt(n = document.getElementById('num').value);
    if (n < 0 || n > 6) {
        alert(`Debe ingresar un número válido.`);
    } else {
        let resultado = `<p><b>${n} - ${dia[n]}</b></p>`;
        console.log(`${n} - ${dia[n]}`);
        document.getElementById("diaElegido").innerHTML = resultado;
    }
}