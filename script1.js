let musica = ["Jazz", "Blues"];
let salida = "";
console.log(`Array inicial: ${musica.join(", ")}`);
salida += `<p>Géneros musicales: <b>${musica.join(", ")}</b></p>`;
function agregarFinal() {
    musica.push("Rock-n-Roll");
    console.log(`Agregar al final: ${musica.join(", ")}`);
    salida += `<p>Agregar un género al final: <b>${musica.join(", ")}</b></p>`;
}
agregarFinal();
function reemplazarValor() {
    musica[Math.floor(musica.length / 2)] = "Classics";
    console.log(`Reemplazar valor del medio: ${musica.join(", ")}`);
    salida += `<p>Reemplazar el género del medio: <b>${musica.join(", ")}</b></p>`;
}
reemplazarValor();
function mostrarPrimero() {
    let eliminado = musica.shift();
    console.log(`Eliminar y mostrar el primer valor: ${eliminado}`);
    salida += `<p>Eliminar y mostrar el primer género: <b>${eliminado}</b></p>`;
}
mostrarPrimero();
function agregarInicio() {
    musica.unshift("Rap", "Reggae");
    console.log(`Agregar dos valores al inicio: ${musica.join(", ")}`);
    salida += `<p>Agregar géneros al inicio: <b>${musica.join(", ")}</b></p>`;
}
agregarInicio();
document.getElementById("resultado").innerHTML = salida;