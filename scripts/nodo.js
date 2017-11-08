// Movimentação
var up = 1;
var right = 2;
var down = 3;
var left = 4;

function Nodo(px, py, dir) {
	
	var x, y, direc;
	this.x = px;
	this.y = py;
	this.direc = dir;
	
	this.Move = function() {
		switch (this.direc) {
			case up:
				this.y -= 1;
				break;
				
			case down:
				this.y += 1;
				break;
			
			case right:
				this.x += 1;
				break;
				
			case left: 
				this.x -= 1;
				break;
		}
	};
}