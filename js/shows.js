window.onload = function(){

	var modal = document.getElementById("firstModal");
	var img = document.getElementById("first");
	var modalImg = document.getElementById("img01");
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	}
	var span = document.getElementsByClassName("close")[0];
	span.onclick = function() { 
	  modal.style.display = "none";
	}

	//-----------------------------------------------------------

	var modal2 = document.getElementById("secondModal");
	var img2 = document.getElementById("second");
	var modalImg2 = document.getElementById("img02");
	img2.onclick = function(){
	  modal2.style.display = "block";
	  modalImg2.src = this.src;
	}
	var span = document.getElementsByClassName("close")[1];
	span.onclick = function() { 
	  modal2.style.display = "none";
	}

	//-----------------------------------------------------------

	var modal3 = document.getElementById("thirdModal");
	var img3 = document.getElementById("third");
	var modalImg3 = document.getElementById("img03");
	img3.onclick = function(){
	  modal3.style.display = "block";
	  modalImg3.src = this.src;
	}
	var span = document.getElementsByClassName("close")[2];
	span.onclick = function() { 
	  modal3.style.display = "none";
	}

	//-----------------------------------------------------------

	var modal4 = document.getElementById("fourthModal");
	var img4 = document.getElementById("fourth");
	var modalImg4 = document.getElementById("img04");
	img4.onclick = function(){
	  modal4.style.display = "block";
	  modalImg4.src = this.src;
	}
	var span = document.getElementsByClassName("close")[3];
	span.onclick = function() { 
	  modal4.style.display = "none";
	}

	//-----------------------------------------------------------

	var modal5 = document.getElementById("fifthModal");
	var img5 = document.getElementById("fifth");
	var modalImg5 = document.getElementById("img05");
	img5.onclick = function(){
	  modal5.style.display = "block";
	  modalImg5.src = this.src;
	}
	var span = document.getElementsByClassName("close")[4];
	span.onclick = function() { 
	  modal5.style.display = "none";
	}

	//-----------------------------------------------------------

	var modal6 = document.getElementById("sixthModal");
	var img6 = document.getElementById("sixth");
	var modalImg6 = document.getElementById("img06");
	img6.onclick = function(){
	  modal6.style.display = "block";
	  modalImg6.src = this.src;
	}
	var span = document.getElementsByClassName("close")[5];
	span.onclick = function() { 
	  modal6.style.display = "none";
	}
}