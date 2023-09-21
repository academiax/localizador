// Función para obtener la hora actual
function obtenerHora() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}

// Función para obtener la fecha actual
function obtenerFecha() {
    const ahora = new Date();
    const dia = ahora.getDate().toString().padStart(2, '0');
    const mes = (ahora.getMonth() + 1).toString().padStart(2, '0'); // Se suma 1 ya que en JavaScript los meses comienzan desde 0
    const año = ahora.getFullYear();
    return `${dia}/${mes}/${año}`;
}

// Función para obtener la ubicación del usuario (solo funciona en navegadores que admiten la API de geolocalización)
function obtenerUbicacion() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitud = position.coords.latitude.toFixed(6);
            const longitud = position.coords.longitude.toFixed(6);
            document.getElementById("ubicacion").textContent = `${latitud}, ${longitud}`;
        });
    } else {
        document.getElementById("ubicacion").textContent = "No se puede obtener la ubicación";
    }
}

// Actualizar la hora y la fecha cada segundo
function actualizarHoraYFecha() {
    const horaElemento = document.getElementById("hora");
    const fechaElemento = document.getElementById("fecha");

    horaElemento.textContent = obtenerHora();
    fechaElemento.textContent = obtenerFecha();
}

setInterval(actualizarHoraYFecha, 1000); // Actualizar cada segundo
obtenerUbicacion(); // Obtener la ubicación una vez cuando se carga la página
