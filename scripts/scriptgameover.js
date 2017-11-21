var altura;
var largura;
var alturamenu=480;
var larguramenu=640;

var canvas=document.getElementById("screen");
var ctx=canvas.getContext("2d");

var title1=document.getElementById("title1");
var go=document.getElementById("go");
var voltar=document.getElementById("voltar");
var repet=document.getElementById("repet");

    gameOver();


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

function desenharTelaDeGameOver() {
    var y=parseInt((altura / 2) - (canvas.height / 2));
	var x=parseInt((largura / 2) - (canvas.width / 2));
    var img1;
	var	img2;
	var img3;
	var img4;

    img1=title1;
    ctx.drawImage(img1, x+200, y+50, 1000, 200);
	
	img2=go;
    ctx.drawImage(img2, x+550, y+300, 300, 200);
	
	img3=voltar;
    ctx.drawImage(img3, x+350, y+400, 200, 100);
	
	img4=repet;
    ctx.drawImage(img4, x+850, y+400, 200, 100);

}

function gameOver() {
	atualizarPlanoDeFundo();
	//backgroundMenu();
	desenharTelaDeGameOver();
}
