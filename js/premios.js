var indice_slide = 1;
mostrar_slides(indice_slide);

function controlador_slides(n) {
  mostrar_slides(indice_slide += n);
}
var slides;
// Função principal que mostra os slides
function mostrar_slides(n) {
  var i;
  var slides = document.getElementsByClassName("meus-slides");
  console.log(slides);
  console.log(slides.length);
  if (n > slides.length) {indice_slide = 1} 
  if (n < 1) {indice_slide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[indice_slide-1].style.display = "block"; 

}
