function edenor() {
    var consumo = parseFloat(document.getElementById("consumo").value);
    var costo = 0;

    if (consumo <= 100) {
        costo = consumo * 0.5;
    } else if (consumo <= 200) {
        costo = (100 * 0.5) + ((consumo - 100) * 0.75);
    } else {
        costo = (100 * 0.5) + (100 * 0.75) + ((consumo - 200) * 1);
    }

    document.getElementById("resultado").innerText = "El costo total es: $" + costo.toFixed(2);
}