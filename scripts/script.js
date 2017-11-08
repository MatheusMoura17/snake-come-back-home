//Informações sobre estado atual do jogo
var rodando = false;
var xfruta;
var yfruta;
var relogio;
var intervalo;

// Referências dos objetos
var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");
var btpausa = document.getElementById("btPause");

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
	if (rodando) {
		pausa();
	}
	
	intervalo = 200;
	xfruta = gx - 1;
	yfruta = gy - 1;
	
	var xcenter = Math.floor(gx / 2);
	var ycenter = Math.floor(gy / 2);
	nodos.length = 0;
	nodos.push(new Nodo(xcenter, ycenter + 2, down));
	nodos.push(new Nodo(xcenter, ycenter + 1, down));
	nodos.push(new Nodo(xcenter, ycenter, down));
	nodos.push(new Nodo(xcenter, ycenter - 1, down));
	nodos.push(new Nodo(xcenter, ycenter - 2, down));
	btpausa.innerHTML = "Iniciar";
	btpausa.disabled = false;
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
	
		//Desenhar a fruta
		context.fillStyle = "#FF0000";
		xi = distance + (xfruta * (largura + distance)) + Math.floor(largura / 2);
		yi = distance + (yfruta * (largura + distance)) + Math.floor(largura / 2);
		context.beginPath();
		context.arc(xi, yi, distance, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
	}
}	

function pause() {
	rodando = !rodando;
	if (rodando) {
		btpausa.innerHTML = "Pausar";
		relogio = setInterval("loopPrincipal()" , intervalo);
	}
	else {
		clearInterval(relogio);
		btpausa.innerHTML = "Continuar";
	}
}

function loopPrincipal() {
	//atualizar valores
	moverSnake();
	detectarColisoes();
	desenhar();
}

function moverSnake() {
	//Mover todos os nodos, exceto cabeça
	for (i = nodos.length - 1; i > 0; i--) {
	nodos[i].x = nodos[i-1].x;
	nodos[i].y = nodos[i-1].y;
	nodos[i].direc = nodos[i-1].direc;
	}
	
	//Executa movimento da cabeça
	nodos[0].Mover();
}

function detectarColisoes() {
	//Colisão da cabeça com alguma parede
	if ((nodos[0].x < 0) || (nodos[0].x >= gx) || (nodos[0].y < 0) || (nodos[0].y >= gy)) {
	executarGameOver(); //Game Over!
	}
	
	//Colisão da cabeça com o corpo
	for (i = 1; i < nodos.length; i++) {
		if ((nodos[0].x == nodos[i].x) && (nodos[0].y == nodos[i].y)) {
		executarGameOver(); //Game Over!
		}
	}
}

function executarGameOver() {
	btPausa.disabled = true;
	if (rodando)
		pausa();