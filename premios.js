var indice_slide = 1; //essa variável será usada em todas as nossas funções e será responsável por dizer qual o slide atual
mostrar_slides(indice_slide); //aqui já estamos chamando a função para que o slide já comece mostrando o primeiro slide
// Função principal que mostra os slides
function mostrar_slides(n) {
	var i; // será usada como um contador dentro de nossa função
	var slides = document.getElementsByClassName("meus-slides"); //retorna todos os elementos que possuem a classe "meus-slides"
	var ponto_indicador = document.getElementsByClassName("ponto-indicador-slide"); //retorna todos os elementos que possuem a classe "ponto-indicador-slide"
	if (n &gt; slides.length) {indice_slide = 1} // caso o número passado como parâmetro seja maior que o número de slides então chama o primeiro 
	if (n &lt; 1) {indice_slide = slides.length} // caso o número passado como parâmetro seja menor que 1 nosso variável "indice_slide" receberá o número total de slides
	for (i = 0; i &lt; slides.length; i++) { //inicia um loop entre os slides
		slides[i].style.display = "none"; //deixa o slide com display none
	} //encerra o loop for
	for (i = 0; i &lt; ponto_indicador.length; i++) { //inicia um loop entre os pontos indicadores
		ponto_indicador[i].className = ponto_indicador[i].className.replace(" ativo", ""); // remove a classe "ativo" do indicador
	} // encerra o loop for
	slides[indice_slide-1].style.display = "block"; // faz o slide atual aparecer
	ponto_indicador[indice_slide-1].className += " ativo"; //adiciona a classe "ativo" para o indicador do slide atual
}