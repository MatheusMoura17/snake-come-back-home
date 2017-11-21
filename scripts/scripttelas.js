var altura;
var largura;
var alturamenu = 400;
var larguramenu = 300;

var canvas = document.GetElementById("screen");
var ctx = canvas.getContext("2d");

function Background() {
	altura = window.innerHeight;
	largura = window.innerWidth;
	canvas.setAttribute("height", altura);
	canvas.setAttribute("width", largura);
	var img = new Image();
	img.src = "../imagens/game/text1.png";
	cxt.drawImage(img, 0, 0);
}