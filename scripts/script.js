// Referências dos objetos
var canvas = document.GetElementByID("screen");
var context = canvas.GetElement("2D");
var btPause = document.GetElementByID("btPause");

//Informações sobre o grid
var gx = 0; //Número de quadros em X
var gy = 0; //Número de quadros em Y
var width = 20; //Largura dos quadros
var distance = 5; //Distância entre os quadros
var bordax, borday; //Posições das bordas

//Iniciando o jogo
criarGrid();
newGame();

function criarGrid() {
	gx = Math.floor((canvas.width - distance) / (width + distance));
	gy = Math.floor((canvas.height - distance) / (width + distance));
	bordax = gx * (distance + width) + distance;
	borday = gy * (distance + width) + distance;
}

function newGame() {
	btPause.innerHTML = "Iniciar";
	btPause.disabled = false;
	desenhar();
