document.addEventListener("DOMContentLoaded", function() {
    // Espera 2 segundos (2000 milisegundos) y luego oculta el video de precarga
    setTimeout(function() {
      var preloadVideoContainer = document.getElementById("preload-video-container");
      preloadVideoContainer.style.display = "none";
  
      // Muestra el contenido principal
      var mainContent = document.getElementById("main-content");
      mainContent.style.display = "block";
    }, 2000); // 2000 milisegundos = 2 segundos
  });
  