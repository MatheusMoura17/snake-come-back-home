// Referências dos objetos
var canvas = document.GetElementByID("screen");
var context = canvas.GetElement("2D");
var btPause = document.GetElementByID("btPause");

//Informações sobre o grid
var gx = 0; //Número de quadros em X
var gy = 0; //Número de quadros em Y
var largura = 50; //Largura dos quadros
var distance = 5; //Distância entre os quadros
var bordax, borday; //Posições das bordas

//Iniciando o jogo
criarGrid();
newGame();

function criarGrid() {
	gx = Math.floor((canvas.width - distance) / (largura + distance));
	gy = Math.floor((canvas.height - distance) / (largura + distance));
	bordax = gx * (distance + largura) + distance;
	borday = gy * (distance + largura) + distance;
}

function newGame() {
	btPause.innerHTML = "Iniciar";
	btPause.disabled = false;
	desenhar();
}

function desenhar() {
	//Variáveis auxiliares para desenhar
	var xi, yi;
	
	//Limpar a tela
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	//Desenhar bordas
	context.fillStyle = "#888888";
	context.fillRect(bordax, 0, canvas.width - 1, canvas.height - 1);
	context.fillRect(0, borday, canvas.width - 1, canvas.height - 1);
} 