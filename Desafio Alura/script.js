function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let textoEncriptado = document.getElementById("texto-encriptado");
    let btnCopiar = document.getElementById("btnCopiar");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        textoEncriptado.textContent = textoCifrado;
        textoEncriptado.style.display = "block";
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.style.display = "none";
        btnCopiar.style.display = "block"; 
    } else {
        textoEncriptado.style.display = "none";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        parrafo.style.display = "block";
        swal("Ooops!", "Debes ingresar un texto", "warning");
        btnCopiar.style.display = "none"; 
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let textoEncriptado = document.getElementById("texto-encriptado");
    let btnCopiar = document.getElementById("btnCopiar");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        textoEncriptado.textContent = textoCifrado;
        textoEncriptado.style.display = "block";
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.style.display = "none";
        btnCopiar.style.display = "block"; 
    } else {
        textoEncriptado.style.display = "none";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        parrafo.style.display = "block";
        swal("Ooops!", "Debes ingresar un texto", "warning");
        btnCopiar.style.display = "none"; 
    }
}

function copiar() {
    let contenido = document.getElementById("texto-encriptado").textContent;
    let inputTexto = document.getElementById("texto");
    navigator.clipboard.writeText(contenido).then(() => {
        inputTexto.value = contenido;
        swal("Buen trabajo!", "Texto copiado y pegado", "success");
    });
}
