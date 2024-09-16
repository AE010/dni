document.getElementById('formularioDNI').addEventListener('submit', function(evento) {
    evento.preventDefault();

    var letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var numeroDNI = document.getElementById('numeroDNI').value;
    var letraUsuario = document.getElementById('letraDNI').value.toUpperCase();
    var mensaje = document.getElementById('mensaje');

    if (numeroDNI < 0 || numeroDNI > 99999999) {
        mensaje.innerHTML = 'El número de DNI proporcionado no es válido.';
        mensaje.style.color = 'red';
        return;
    }

    var letraCalculada = letrasDNI[numeroDNI % 23];

    if (letraCalculada !== letraUsuario) {
        mensaje.innerHTML = 'La letra ingresada no es correcta.';
        mensaje.style.color = 'red';
    } else {
        mensaje.innerHTML = 'El número y la letra de DNI son correctos.';
        mensaje.style.color = 'green';
    }
});
