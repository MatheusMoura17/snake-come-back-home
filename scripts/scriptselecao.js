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
    var img1, img2, img3, img4, img5, img6, img7, img8;

    img1=title1;
    ctx.drawImage(img1, x+, y, 1370, 300);


}

function menuPrincipal() {
	atualizarPlanoDeFundo();
	//backgroundMenu();
	desenharFaseDeSelecao();
}
