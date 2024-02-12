// Configurar el contador al (31 de Diciembre a las 00:00 horas)
var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time remaining
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").getElementsByClassName("countdown-number")[0].innerHTML = days;
    document.getElementById("hours").getElementsByClassName("countdown-number")[0].innerHTML = hours;
    document.getElementById("minutes").getElementsByClassName("countdown-number")[0].innerHTML = minutes;
    document.getElementById("seconds").getElementsByClassName("countdown-number")[0].innerHTML = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-title").innerHTML = "¡El evento ha terminado!";
        document.getElementById("days").getElementsByClassName("countdown-number")[0].innerHTML = "0";
        document.getElementById("hours").getElementsByClassName("countdown-number")[0].innerHTML = "0";
        document.getElementById("minutes").getElementsByClassName("countdown-number")[0].innerHTML = "0";
        document.getElementById("seconds").getElementsByClassName("countdown-number")[0].innerHTML = "0";
    }
}, 1000);

function cambiarImagen(nuevaImagen) {
    document.querySelector('.imagen-fondo img').src = nuevaImagen;
}

// Obtiene el elemento del iframe y los botones
const videoIframe = document.getElementById('video-iframe');
const buttons = document.querySelectorAll('.boton');

// Agrega un evento de clic a cada botón
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Obtiene el ID del video del atributo data-video
        const videoId = button.getAttribute('data-video');
        
        // Construye la URL del video de YouTube
        const videoUrl = `https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1`;
        
        // Actualiza el src del iframe con la nueva URL
        videoIframe.src = videoUrl;
    });
});

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const videoId = button.getAttribute('data-video');
        const videoUrl = `https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1`;
        
        videoIframe.src = videoUrl;
        document.querySelector('.iframe-container').style.display = 'flex';
    });
});

// Agrega un evento clic para cerrar el iframe
document.querySelector('.iframe-container').addEventListener('click', function () {
    this.style.display = 'none';
});
