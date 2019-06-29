 
class Snake extends THREE.Mesh {
  constructor(sizeMapX, sizeMapY) {
    super();

    this.sizeMapX = sizeMapX;
    this.sizeMapY = sizeMapY;

    // Bool que determina si el juego ha terminado
    this.gameOver = false;

    // Bool que determina si se ha ganado el juego
    this.win = false;

    // True si el jugador ya ha pulsado una tecla para mover la serpiente
    this.running = false;

    // Array de cubos que forman la serpiente
    this.snakeCubes = [];

    // Posición de la cabeza de la serpiente
    this.snakePosX = 0;
    this.snakePosY = 0;
    
    // Tamaño de los cubos de la serpiente
    this.xSnake = 1;
    this.ySnake = 1;

    // Cubos de la serpiente
    this.sizeSnake = 1;

    // Dirección en la que se mueve la serpiente:
    // 0 derecha
    // 1 abajo
    // 2 izquierda
    // 3 arriba
    this.direction = 0;
    this.anteriorDireccion = 0;

    // Para controlar la velocidad de la serpiente
    this.tiempoAnterior = Date.now();
    this.tiempoTranscurrido = 0;
    this.speed = 0.1;

    /* CABEZA */
    var cabeza = new THREE.Mesh();
    cabeza.geometry = new THREE.BoxGeometry (this.xSnake,this.ySnake,0);
    cabeza.material = new THREE.MeshPhongMaterial( {color: 0xee0000} );

    cabeza.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0.5, 0.5, 0));
    cabeza.position.x = -(sizeMapX/2-1);
    cabeza.position.y = sizeMapY/2-2;
    var edges = new THREE.EdgesGeometry( cabeza.geometry );
	  var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
	  cabeza.add(line);

    this.add(cabeza);
    this.snakeCubes.push(cabeza);

    // Tail es la posición en la que se colocará el próximo cubo cuando la serpiente
    // crezca
    this.tail = this.snakeCubes[0];
  }

  // cambiar la direccion en la que se mueve la serpiente
  changeDirection(direccion){

    if (this.direction == 0 && direccion != 2){ // si esta yendo hacia la derecha y le metemos que direccion sea izquierda, no hace nada
          this.direction = direccion;
    }
    else if (this.direction == 2 && direccion != 0){ //izquierda
          this.direction = direccion;
    }
    else if (this.direction == 1 && direccion != 3){ // abajo
          this.direction = direccion;
    }
    else if (this.direction == 3 && direccion != 1){ //arriba
          this.direction = direccion;
    }

  }

  start(){
  	this.running = true;
  }

  lose(){
    this.gameOver = true;
  }
 
  winner(){
  	if(this.sizeSnake == (this.sizeMapX-2)*(this.sizeMapY-2)-5){ // -5 porque hay 5 tipos de bolas y siempre estarán en pantalla
  		this.win = true;  
      this.running = false;
  	}
  }

  increaseSize(){
  	this.sizeSnake++;

  	this.snakeCubes.length++;

  	var newCube = new THREE.Mesh();
  	newCube.geometry = new THREE.BoxGeometry (this.xSnake,this.ySnake,0);
  	newCube.material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  	newCube.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0.5, 0.5, 0));
  	
  	var edges = new THREE.EdgesGeometry( newCube.geometry );
  	var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  	newCube.add(line);

  	newCube.position.x = this.tail.position.x;
  	newCube.position.y = this.tail.position.y;

  	this.add(newCube);
  	this.snakeCubes[this.snakeCubes.length-1] = newCube;
  }

  increaseSpeed(){
    this.speed -= 0.01;
  }

  decreaseSize(){
    if(this.sizeSnake > 1){
      this.remove(this.snakeCubes[this.snakeCubes.length-1]);
      this.snakeCubes[this.snakeCubes.length-1].geometry.dispose();
      this.snakeCubes[this.snakeCubes.length-1].material.dispose();
      this.sizeSnake--;
      this.snakeCubes.length--;
    }

    else if(this.sizeSnake == 1){
      this.lose();
      this.running = false;
    }
  }

  moveSnake(){

  	this.tail = this.snakeCubes[this.snakeCubes.length-1];

    for (var i=this.snakeCubes.length-1; i > 0; i--){
        this.snakeCubes[i].position.x = this.snakeCubes[i-1].position.x;
        this.snakeCubes[i].position.y = this.snakeCubes[i-1].position.y;
    }

  	if (this.direction == 0){ // derecha
  		  this.snakeCubes[0].position.x += this.xSnake;  
    }
    else if (this.direction == 2){ //izquierda
 		    this.snakeCubes[0].position.x -= this.xSnake;
    }
    else if (this.direction == 1){ // abajo
    	  this.snakeCubes[0].position.y -= this.ySnake;
    }
    else if (this.direction == 3){ //arriba
    	  this.snakeCubes[0].position.y += this.ySnake;
    }
  }

  // Comprobar los choques con los muros
  compruebaMuros(){

    if (this.snakeCubes[0].position.x <= (-this.sizeMapX/2+0.5) || this.snakeCubes[0].position.x >= (this.sizeMapX/2-1.5) || 
      this.snakeCubes[0].position.y >= (this.sizeMapY/2-1.5) || this.snakeCubes[0].position.y <= (-this.sizeMapY/2+0.5)){
        this.lose();
        this.running = false;
    } 

  }

  // Comprobar choques con la propia serpiente
  compruebaChoque(){

    for (var i=1; i < this.snakeCubes.length; i++){
      if ((this.snakeCubes[0].position.x == this.snakeCubes[i].position.x) && (this.snakeCubes[0].position.y == this.snakeCubes[i].position.y)){
            this.lose();
            this.running = false;
      }
    }
  }

  update () {

    // Si no ha perdido o ganado
    if(!this.gameOver && !this.win){
	    var tiempoActual = Date.now();
	    var segundosTranscurridos = (tiempoActual - this.tiempoAnterior)/1000;
	    this.tiempoTranscurrido += segundosTranscurridos;
	    this.tiempoAnterior = tiempoActual;

      if(this.tiempoTranscurrido >= this.speed){
      	if(this.running){
      		  this.moveSnake();
          	//this.compruebaMuros();
          	this.compruebaChoque(); 
        }

      	this.tiempoTranscurrido = 0;
      }
    }

  }

}
