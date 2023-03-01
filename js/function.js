
document.getElementById("boton").onclick = function() {
    console.log("Capturamos el evento click")
    document.getElementById("demo").innerHTML = "Celular: 388-5280000"
}

document.getElementById("Mostrar").onclick = function() {
    console.log("Capturamos el evento click2")
    document.getElementById("demo2").innerHTML = "<li>Lectura<br><li>Trekking<br><li>Calistenia<br><li>Padel"
}