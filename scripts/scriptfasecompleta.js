var altura;
var largura;
var alturamenu=480;
var larguramenu=640;

var canvas=document.getElementById("screen");
var ctx=canvas.getContext("2d");

var title1=document.getElementById("title1");
var go=document.getElementById("go");

    proxFase();


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

function desenharTelaDeFaseConcluida() {
    var y=parseInt((altura / 2) - (canvas.height / 2));
	var x=parseInt((largura / 2) - (canvas.width / 2));
    var img1;
	var	img2;

    img1=title1;
    ctx.drawImage(img1, x, y, 1280, 200);
	
	img2=go;
    ctx.drawImage(img2, x + 550, y + 500, 100, 150);
	

}

function proxFase() {
	atualizarPlanoDeFundo();
	//backgroundMenu();
	desenharTelaDeFaseConcluida();
}
