var altura;
var largura;
var alturamenu=480;
var larguramenu=640;

var canvas=document.getElementById("screen");
var ctx=canvas.getContext("2d");

var title1=document.getElementById("title1");
var f1=document.getElementById("fase1");
var f2=document.getElementById("fase2");
var f3=document.getElementById("fase3");
var barra=document.getElementById("barra");
var title2=document.getElementById("title2");
var livre=document.getElementById("livre");
var voltar=document.getElementById("voltar");

    faseDeSelecao();


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

function desenharFaseDeSelecao() {
    var y=parseInt((altura / 2) - (canvas.height / 2));
	var x=parseInt((largura / 2) - (canvas.width / 2));
    var img1;
	var	img2;
	var img3;
	var	img4;	
	var	img5;
	var	img6;
	var	img7;	
	var	img8;

    img1=title1;
    ctx.drawImage(img1, x + 800, y + 100, 500, 150);
	
	img2=f1;
    ctx.drawImage(img2, x + 900, y + 300, 100, 100);
	
	img3=f2;
    ctx.drawImage(img3, x + 1100, y + 300, 100, 100);
	
	img4=f3;
    ctx.drawImage(img4, x + 1000, y + 450, 100, 100);
	
	img5=barra;
    ctx.drawImage(img5, x + 650, y + 50, 10, 550);
	
	img6=title2;
    ctx.drawImage(img6, x + 100, y + 100, 500, 150);
	
	img7=livre;
    ctx.drawImage(img7, x + 280, y + 300, 100, 100);
	
	img8=voltar;
    ctx.drawImage(img8, x + 50, y + 500, 150, 100);


}

function faseDeSelecao() {
	atualizarPlanoDeFundo();
	//backgroundMenu();
	desenharFaseDeSelecao();
}
