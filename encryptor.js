// Función para encriptar el texto
function encriptarTexto(texto) {
    const claves = ["e", "i", "a", "o", "u"];
    const reemplazos = ["enter", "imes", "ai", "ober", "ufat"];

    for (let i = 0; i < claves.length; i++) {
        texto = texto.replace(new RegExp(claves[i], "g"), reemplazos[i]);
    }
    return texto;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    const reemplazos = ["enter", "imes", "ai", "ober", "ufat"];
    const claves = ["e", "i", "a", "o", "u"];

    for (let i = 0; i < reemplazos.length; i++) {
        texto = texto.replace(new RegExp(reemplazos[i], "g"), claves[i]);
    }
    return texto;
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
