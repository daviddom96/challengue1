// challenge.js

function encriptarTexto() {
    let textoOriginal = document.getElementById('textoOriginal').value.toLowerCase();
    let textoEncriptado = encriptar(textoOriginal);
    document.getElementById('resultado').textContent = `Encriptado: ${textoEncriptado}`;
}

function desencriptarTexto() {
    let textoOriginal = document.getElementById('textoOriginal').value.toLowerCase();
    let textoDesencriptado = desencriptar(textoOriginal);
    document.getElementById('resultado').textContent = `Desencriptado: ${textoDesencriptado}`;
}

function encriptar(texto) {
    const mapeo = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const regex = new RegExp(Object.keys(mapeo).join('|'), 'g');
    return texto.replace(regex, match => mapeo[match]);
}

function desencriptar(texto) {
    const mapeoInverso = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const regex = new RegExp(Object.keys(mapeoInverso).join('|'), 'g');
    return texto.replace(regex, match => mapeoInverso[match]);
}

function copiarResultado() {
    // Seleccionamos el elemento resultado
    const resultadoElement = document.getElementById('resultado');

    // Copiamos el contenido sin las palabras "Desencriptado:" o "Encriptado:"
    const textoResultado = resultadoElement.textContent.replace(/(Desencriptado:|Encriptado:)\s*/g, '');

    // Creamos un elemento de texto temporal y lo seleccionamos
    const textoTemporal = document.createElement('textarea');
    textoTemporal.value = textoResultado;
    document.body.appendChild(textoTemporal);
    textoTemporal.select();

    // Copiamos el texto al portapapeles
    document.execCommand('copy');

    // Eliminamos el elemento de texto temporal
    document.body.removeChild(textoTemporal);

    // Notificamos al usuario que el texto ha sido copiado
    alert('Texto copiado al portapapeles');
}

function visita() {
    copiarResultado();
    alert('¡Gracias por visitar!');
}
