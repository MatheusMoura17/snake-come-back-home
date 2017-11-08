// Referências dos objetos
var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");
var btpause = document.getElementById("btPause");

//Informações sobre o grid
var gx = 0; //Número de quadros em X
var gy = 0; //Número de quadros em Y
var largura = 20; //Largura dos quadros
var distance = 5; //Distância entre os quadros
var bordax, borday; //Posições das bordas

//Array contendo todos os nodos da Snake
var nodos = new Array();
nodos.length = 0;

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
	var xcenter = Math.floor(gx / 2);
	var ycenter = Math.floor(gy / 2);
	nodos.length = 0;
	nodos.push(new Nodo(xcenter, ycenter + 2, down));
	nodos.push(new Nodo(xcenter, ycenter + 1, down));
	nodos.push(new Nodo(xcenter, ycenter, down));
	nodos.push(new Nodo(xcenter, ycenter - 1, down));
	nodos.push(new Nodo(xcenter, ycenter - 2, down));
	btpause.innerHTML = "Iniciar";
	btpause.disabled = false;
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
	
	//Desenhar a Snake
	context.fillStyle = "#00FF00";
	for (i = 0; i < nodos.length; i++) {
	xi = distance + nodos[i].x * (largura + distance);
	yi = distance + nodos[i].y * (largura + distance);
	context.fillRect(xi, yi, largura, largura);
	}
}	