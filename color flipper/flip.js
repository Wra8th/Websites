function change(){
	var back = document.getElementById("BODY");
	back.style.backgroundColor = "#5DADE2";	
}
function rando(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	var back = document.getElementById("BODY");
	back.style.backgroundColor = "#" + randomColor;	
}
