//Informações sobre estado atual do jogo
var rodando = false;
var xfruta;
var yfruta;
var relogio;
var intervalo;
var proxDirec = new Array();
var colPoints = new Array();
proxDirec.length = 0;
var rotacao = 0;
var pontos=0;
var velocidadeInicial=3;
var killed;
var pontosParaVencer=2000;

// Referências dos objetos
var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");
var sndcomer1 = document.getElementById("comer1");
var sndcomer2 = document.getElementById("comer2");
var sndgameover = document.getElementById("gameover");

var pontosTxt=document.getElementById("pontos");
var bigPontosTxt1=document.getElementById("bigPontos2");
var velocidadeTxt=document.getElementById("velocidade");

var snakeHeadLeft=document.getElementById("snakeHeadLeft");
var snakeHeadRight=document.getElementById("snakeHeadRight");
var snakeHeadUp=document.getElementById("snakeHeadUp");
var snakeHeadBottom=document.getElementById("snakeHeadBottom");

var snakeNode=document.getElementById("snakeNode");

var snakeTaleLeft=document.getElementById("snakeTaleLeft");
var snakeTaleRight=document.getElementById("snakeTaleRight");
var snakeTaleUp=document.getElementById("snakeTaleUp");
var snakeTaleBottom=document.getElementById("snakeTaleBottom");

var coco=document.getElementById("coco");
var laranja=document.getElementById("laranja");
var melancia=document.getElementById("melancia");
var fruta=coco;

var playButton=document.getElementById("playButton");
var pauseButton=document.getElementById("pauseButton");
var gameOverPanel=document.getElementById("gameOverPanel");
var gameWinPanel=document.getElementById("gameWinPanel");
var obstaculo=document.getElementById("obstaculo");

//Informações sobre o grid
var snakeX;
var snakeY;
var gx = 0; //Número de quadros em X
var gy = 0; //Número de quadros em Y
var largura = 20; //Largura dos quadros
var distance = 5; //Distância entre os quadros
var bordax, borday; //Posições das bordas

//Array contendo todos os nodos da Snake
var nodos = new Array();
nodos.length = 0;

//Eventos
document.onkeydown = onKD;

//Iniciando o jogo
criarGrid();
newGame();
toggle();

function criarGrid() {
	gx = Math.floor((canvas.width - distance) / (largura + distance));
	gy = Math.floor((canvas.height - distance) / (largura + distance));
	bordax = gx * (distance + largura) + distance;
	borday = gy * (distance + largura) + distance;
}

function newGame() {
	killed=false;

	sndgameover.currentTime=0;
	sndgameover.pause();

	resetarPontos();
	resetarVelocidade();
	
	intervalo = velocidadeInicial;
	novaPosFruta();
	
	var xcenter = Math.floor(3);
	var ycenter = Math.floor(0);
	nodos.length = 0;
	nodos.push(new Nodo(xcenter, ycenter, down));
	nodos.push(new Nodo(xcenter, ycenter - 1, down));

	playButton.style.display="block";
	pauseButton.style.display="none";
	gameOverPanel.style.display="none";
	gameWinPanel.style.display="none";

	toggle();
}

function resetarPontos(){
	pontos=0;
	pontosTxt.innerHTML=pontos;
}

function atualizarPontos(value){
	pontos+=value;
	pontosTxt.innerHTML=pontos;
}

function resetarVelocidade(){
	intervalo=velocidadeInicial;
	velocidadeTxt.innerHTML=intervalo;
}

function atualizarVelocidade(value){
	intervalo+=value;
	if(intervalo>15){
		intervalo=15;
	}
	velocidadeTxt.innerHTML=intervalo;

	clearInterval(relogio);
	relogio = setInterval("loopPrincipal()" , (1/intervalo)*1000);
}

function desenhar() {
	//Variáveis auxiliares para desenhar
	var xi, yi;
	
	//Limpar a tela
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	//Desenhar a Snake
	for (i = 0; i < nodos.length; i++) {
		var graphic=snakeNode;
		if(i==0){
			if(nodos[i].direc==up)		
				graphic=snakeHeadUp;
			else if(nodos[i].direc==down)
				graphic=snakeHeadBottom;
			else if(nodos[i].direc==right)
				graphic=snakeHeadRight;
			else if(nodos[i].direc==left)
				graphic=snakeHeadLeft;

			snakeX = distance + nodos[i].x * (largura + distance);
			snakeY = distance + nodos[i].y * (largura + distance);
		}else if(i==nodos.length-1){
			if(nodos[i].direc==up)		
				graphic=snakeTaleUp;
			else if(nodos[i].direc==down)
				graphic=snakeTaleBottom;
			else if(nodos[i].direc==right)
				graphic=snakeTaleRight;
			else if(nodos[i].direc==left)
				graphic=snakeTaleLeft;
		}

		xi = distance + nodos[i].x * (largura + distance);
		yi = distance + nodos[i].y * (largura + distance);
		context.drawImage(graphic,xi,yi,largura,largura);
	
		//Desenhar a fruta
		xi = distance + (xfruta * (largura + distance)) + Math.floor(largura / 2);
		yi = distance + (yfruta * (largura + distance)) + Math.floor(largura / 2);
		context.drawImage(fruta,xi-(largura/2),yi-(largura/2),largura,largura);

		//obstaculo 1
		for(var x=0;x<19;x++){
			for(var y=0;y<2;y++){
				xi=distance+x*(largura+distance);
				yi=distance+y*(largura+distance);
				context.drawImage(obstaculo,(85+xi)-(largura/2),(235+yi)-(largura/2),largura,largura);
			}
		}

		//obstaculo 2
		for(var x=0;x<2;x++){
			for(var y=0;y<14;y++){
				xi=distance+x*(largura+distance);
				yi=distance+y*(largura+distance);
				context.drawImage(obstaculo,(285+xi)-(largura/2),(85+yi)-(largura/2),largura,largura);
			}
		}
	}
}	

function toggle() {
	if(killed){
		newGame();
		return;
	}

	rodando = !rodando;
	if (rodando) {
		playButton.style.display="none";
		pauseButton.style.display="block";
		relogio = setInterval("loopPrincipal()" , (1/intervalo)*1000);
	}
	else {
		clearInterval(relogio);
		playButton.style.display="block";
		pauseButton.style.display="none";
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
	
	//Se lista de comandos não estiver vazia
	if (proxDirec.length > 0) {
		//Se há uma direção diferente da atual
		if (nodos[0].direc != proxDirec[0]) {
			//Alterar a direção
			nodos[0].direc = proxDirec[0];
		}
	}
	
	//Executa movimento da cabeça
	nodos[0].Mover();
	
	//Enquanto houverem comandos na lista
	while (proxDirec.length > 0) {
		//Se o comando é redundante
		if (proxDirec[0] == nodos[0].direc) {
			//Remove o comando do inicio da lista
			proxDirec.shift();
		} 
		else
		//Se não for, para a repetição
		break;
	}
	console.log("x:"+(snakeX+(largura/2))+" y:"+(snakeY+(largura/2)));
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

	//colisão da cabeça com obstaculo 1
	for(var x=0;x<19;x++){
		for(var y=0;y<2;y++){
			xi=distance+x*(largura+distance);
			yi=distance+y*(largura+distance);
			if(snakeX==(85+xi)-(largura/2) && snakeY==(yi+235)-(largura/2))
				executarGameOver(); //Game Over!
		}
	}

	//colisão da cabeça com obstaculo 2
	for(var x=0;x<2;x++){
		for(var y=0;y<14;y++){
			xi=distance+x*(largura+distance);
			yi=distance+y*(largura+distance);
			if(snakeX==(285+xi)-(largura/2) && snakeY==(yi+85)-(largura/2))
				executarGameOver(); //Game Over!
		}
	}

	//Comer a fruta
	if ((nodos[0].x == xfruta) && (nodos[0].y == yfruta)) {
		atualizarPontos(100);
		atualizarVelocidade(1);
		sndComer();
		if(pontos>=pontosParaVencer){
			executarGameWin();
		}
		var ultimo = nodos.length - 1;
		nodos.push(new Nodo(nodos[ultimo].x, nodos[ultimo].y, nodos[ultimo].direc));
		var novoultimo = ultimo + 1;
		
		switch (nodos[ultimo].direc) {
			case down:
				nodos[novoultimo].y -= 1;
				break;
				
			case right:
				nodos[novoultimo].x -= 1;
				break;
				
			case up:
				nodos[novoultimo].y += 1;
				break;
				
			case left:
				nodos[novoultimo].x += 1;
				break;
		}
		novaPosFruta();
	}
}

function executarGameOver() {
	killed=true;
	sndgameover.play();
	if (rodando){
		clearInterval(relogio);
		rodando=false;
	}
	bigPontosTxt1.innerHTML="Pontos: "+pontos+" / "+pontosParaVencer;
	gameOverPanel.style.display="block";
}

function executarGameWin() {
	killed=true;
	if (rodando){
		clearInterval(relogio);
		rodando=false;
	}
	gameWinPanel.style.display="block";
}

function onKD(evt) {
	switch (evt.keyCode) {
		case 37: //esquerda
			nodos[0].direc = left;
			proxDirec.push(left);
			break;
			
		case 38: //cima
			nodos[0].direc = up;
			proxDirec.push(up);
			break;
			
		case 39: //direita
			nodos[0].direc = right;
			proxDirec.push(right);
			break;
			
		case 40: //baixo
			nodos[0].direc = down;
			proxDirec.push(down);
			break;
	}
}

function sndComer() { //Reproduzir som aleatório de comer
	//if (Math.random() < 0.8)
	//	sndcomer1.play();
	//else
	sndcomer1.currentTime=0;
	sndcomer1.play();
}

function novaPosFruta() { //Determinar uma nova posição para a fruta
	do {
		xfruta = Math.floor(Math.random() * gx);
		yfruta = Math.floor(Math.random() * gy);
	} while (colisaoFruta() == true);

	var rand=Math.random();
	fruta=coco;
	if(rand<0.4)
		fruta=laranja;
	else if (rand>0.6)
		fruta=melancia;
}

function colisaoFruta() { //Verificar se posição da fruta colide com corpo da snake

	var realXFruta=parseInt(distance+xfruta*(largura+distance));
    var realYFruta=parseInt(distance+yfruta*(largura+distance));
	for(var x=0;x<19;x++){
		for(var y=0;y<2;y++){
			xi=distance+x*(largura+distance);
			yi=distance+y*(largura+distance);
			if(realXFruta==(85+xi)-(largura/2) && realYFruta==(yi+235)-(largura/2))
				return true;
		}
	}

	for(var x=0;x<2;x++){
		for(var y=0;y<14;y++){
			xi=distance+x*(largura+distance);
			yi=distance+y*(largura+distance);
			if(realXFruta==(285+xi)-(largura/2) && realYFruta==(yi+85)-(largura/2))
				return true;
		}
	}

	for (i = 0; i < nodos.length; i++) {
		if ((xfruta == nodos[i].x) && (yfruta == nodos[i].y)) {
			return true;
		}
	}
	return false;
}