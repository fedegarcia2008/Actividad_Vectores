let nombres = [];
let salida = "";
function arrayNombres() {
    n = document.getElementById('nom').value;
    nombres = n.split(",");
    if (nombres.length != 6) {
        alert(`Debe ingresar solamente seis nombres.`);
        return;
    } else {
        console.log(`Array completo: ${nombres.join(", ")}`);
        salida += `<p>Array completo: <b>${nombres.join(", ")}</b></p>`;
    }
    function arrayOrdenado() {
        nombres.sort();
        console.log(`Array ordenado: ${nombres.join(", ")}`);
        salida += `<p>Array ordenado: <b>${nombres.join(", ")}</b></p>`;
    }
    arrayOrdenado();
    function cantidadElementos() {
        console.log(`Cantidad de elementos: ${nombres.length}`);
        salida += `<p>Cantidad de elementos: <b>${nombres.length}</b></p>`;
    }
    cantidadElementos();
    document.getElementById("resultado").innerHTML = salida;
    document.getElementById("nuevaSeccion").style.display = "block";
}
function buscarNombre() {
    buscado = document.getElementById('nomBuscar').value;    
    let estaIncluido = nombres.includes(buscado);
    if (estaIncluido) {
        let indice = nombres.indexOf(buscado);
        console.log(`Índice: ${indice} - Elemento: ${buscado}`);
        salida += `<p>Índice: <b>${indice}</b> - Elemento: <b>${buscado}</b></p>`;
    } else {
        console.log(`El nombre buscado no se encuentra.`);
        salida += `<p>El nombre buscado no se encuentra.</p>`;
    }
document.getElementById("resultado").innerHTML = salida;
}