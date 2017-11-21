var altura;
var largura;
var alturamenu=480;
var larguramenu=640;

var canvas=document.GetElementById("screen");
var ctx=canvas.getContext("2d");

var title=document.GetElementById("title");
var iniciar=document.GetElementById("iniciar");
var sair=document.GetElementById("sair");

function Background() {
	altura=window.innerHeight;
	largura=window.innerWidth;
	canvas.setAttribute("height", altura);
	canvas.setAttribute("width", largura);
	
}

function DesenharMenuPrincipal() {
    var y=parseInt((altura / 2) - (alturaMenu / 2));
	var x=parseInt((largura / 2) - (larguraMenu / 2));
    var img;

    img=title;
    ctx.drawImage(img, x, y);

    img=iniciar);
    ctx.drawImage(img, x, y + 100);
	
	img=sair;
	ctx.drawImage(img, x, y + 200)

}

function MenuPrincipal() {
	Background();
	DesenharMenuPrincipal();
}