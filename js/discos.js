var tocando = false;
var musica;

function dar_play(name){

	var audio = document.getElementById(name);
	if (tocando){
		musica.pause();
	}
	audio.play();
	tocando = true;
	musica=audio;
	console.log(tocando);

}

function pausar(name){

	if (tocando){
		var audio = document.getElementById(name);
		audio.pause();
		console.log(audio);
	}
	
}