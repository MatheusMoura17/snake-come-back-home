var altura;
var largura;
var alturamenu=480;
var larguramenu=640;

var canvas=document.getElementById("screen");
var ctx=canvas.getContext("2d");

var background=document.getElementById("background");
var title=document.getElementById("title");
var iniciar=document.getElementById("iniciar");
var sair=document.getElementById("sair");


    menuPrincipal();


function atualizarPlanoDeFundo() {
    largura = window.innerWidth;
    altura = window.innerHeight;
    canvas.setAttribute("width", largura);
    canvas.setAttribute("height", altura);
}
	
/*function backgroundMenu() {
    var img;
    var x = parseInt((largura / 2) - (larguramenu / 2));
    var y = parseInt((altura / 2) - (alturamenu / 2));
	img=background;
    ctx.drawImage(img, x, y, larguramenu, alturamenu);
}*/

function desenharMenuPrincipal() {
    var y=parseInt((altura / 2) - (canvas.height / 2));
	var x=parseInt((largura / 2) - (canvas.width / 2));
    var img1;
	var	img2;
	var	img3;

    img1=title;
    ctx.drawImage(img1, x, y, 1370, 300);

    img2=iniciar;
    ctx.drawImage(img2, x + 200, y + 350, 300, 250);
	
	img3=sair;
	ctx.drawImage(img3, x + 880, y + 350, 300, 250);

}

function menuPrincipal() {
	atualizarPlanoDeFundo();
	//backgroundMenu();
	desenharMenuPrincipal();
}
