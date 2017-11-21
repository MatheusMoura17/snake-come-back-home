var altura;
var largura;
var alturamenu = 480;
var larguramenu = 640;

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

function DesenharMenuPrincipal() {
    var y = parseInt((altura / 2) - (alturaMenu / 2));
	var x = parseInt((largura / 2) - (larguraMenu / 2));
    var img;

    img = new Image();
    img.src = "../imagens/game/play.png";
    ctx.drawImage(img, x, y);

    img = new Image();
    img.src = "../imagens/game/quit.png";
    ctx.drawImage(img, x, y + 100);

}