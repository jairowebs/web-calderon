
document.getElementById("mainButton").addEventListener("click", function() {
  var dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});


function activarModoNocturno() {
  document.body.classList.toggle("modo-nocturno");
}


function duplicarTamano() {
  document.body.classList.toggle("duplicar");
}


var lecturaActiva = false;
var voz;
 function toggleLecturaPagina() {
  if (lecturaActiva) {
    detenerLectura();
  } else {
    iniciarLectura();
  }
}
 function iniciarLectura() {
  var texto = document.body.innerText;
  voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "es-ES";
  voz.pitch = 1;
  voz.rate = 1;
  speechSynthesis.speak(voz);
  lecturaActiva = true;
}
 function detenerLectura() {
  speechSynthesis.cancel();
  lecturaActiva = false;
}


(function ($) {

  "use strict";

  // COUNTER NUMBERS
  jQuery('.counter-thumb').appear(function () {
    jQuery('.counter-number').countTo();
  });

  // BACKSTRETCH SLIDESHOW
  $('.hero-section').backstretch([
    "imagenes/1.jpeg",
    "imagenes/2.jpeg",
    "imagenes/torre.jpeg"
  ], { duration: 2000, fade: 750 });

  // CUSTOM LINK
  $('.smoothscroll').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);

    scrollToDiv(elWrapped);
    return false;

    function scrollToDiv(element) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });
    
}) (window.jQuery);


