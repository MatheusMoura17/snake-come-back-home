var altura;
var largura;
var alturamenu=480;
var larguramenu=640;

var canvas=document.getElementById("screen");
var ctx=canvas.getContext("2d");

var title=document.getElementById("title");
var iniciar=document.getElementById("iniciar");
var sair=document.getElementById("sair");

MenuPrincipal();

function DesenharMenuPrincipal() {
    var y=parseInt((altura / 2) - (alturamenu / 2));
	var x=parseInt((largura / 2) - (larguramenu / 2));
    var img1;
	var	img2;
	var	img3;

    img1=title;
    ctx.drawImage(img1, x, y, larguramenu, alturamenu);

    img2=iniciar;
    ctx.drawImage(img2, x, y + 100, larguramenu, alturamenu);
	
	img3=sair;
	ctx.drawImage(img3, x, y + 200, larguramenu, alturamenu)

}

function MenuPrincipal() {
	DesenharMenuPrincipal();
}
