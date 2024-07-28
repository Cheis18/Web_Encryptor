// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función para mostrar el resultado en la página
function mostrarResultado(tipo) {
    const cajaDeTexto = document.getElementById("textBox");
    const texto = cajaDeTexto.value.toLowerCase();
    let resultado = "";

    if (tipo === "encriptado") {
        resultado = encriptarTexto(texto);
    } else if (tipo === "desencriptado") {
        resultado = desencriptarTexto(texto);
    }

    document.getElementById("outputText").innerText = resultado;
    cajaDeTexto.value = ""; // Vaciar la caja de texto
    
    // Ocultar la imagen
    document.getElementById("placeholderImage").style.display = 'none';

    // Mostrar el contenido oculto
    document.getElementById("content2").style.display = 'block';
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const texto = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
