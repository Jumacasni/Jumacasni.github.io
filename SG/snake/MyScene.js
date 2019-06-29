class MyScene extends THREE.Scene {
  constructor (unRenderer) {
    super();
    
    this.createCamera (unRenderer);

    this.lightIntensity = 0.5;

    this.createLights();

    this.sizeMapX = 40;
    this.sizeMapY = 30;
    // Crear el mapa
    this.createMap ();
    
    // Velocidad independiente del procesador
    this.tiempoAnterior = Date.now();

    this.snake = new Snake(this.sizeMapX, this.sizeMapY);

    this.add(this.snake);

    // COMIDA QUE HACE CRECER LA SERPIENTE
    this.food = new Food(this.sizeMapX, this.sizeMapY);
    
    // COMIDA QUE HACE INCREMENTAR LA VELOCIDAD DE LA SERPIENTE
    this.speedFood = new SpeedFood(this.sizeMapX, this.sizeMapY);

    // COMIDA QUE DISMINUIR EL TAMAÑO DE LA SERPIENTE
    this.decreaseFood = new DecreaseFood(this.sizeMapX, this.sizeMapY);

    // COMIDA QUE AUMENTA LA INTENSIDAD DE LA LUZ
    this.moreIntensityFood = new MoreIntensityFood(this.sizeMapX, this.sizeMapY);

    // COMIDA QUE DISMINUYE LA INTENSIDAD DE LA LUZ
    this.lessIntesityFood = new LessIntensityFood(this.sizeMapX, this.sizeMapY);
    
    this.food.generateFood(this.snake.snakeCubes, this.speedFood, this.decreaseFood, this.lessIntesityFood, this.moreIntensityFood);
    this.speedFood.generateFood(this.snake.snakeCubes, this.food, this.decreaseFood, this.lessIntesityFood, this.moreIntensityFood);
    this.decreaseFood.generateFood(this.snake.snakeCubes, this.food, this.speedFood, this.lessIntesityFood, this.moreIntensityFood);
    this.moreIntensityFood.generateFood(this.snake.snakeCubes, this.food, this.speedFood, this.decreaseFood, this.lessIntesityFood);
    this.lessIntesityFood.generateFood(this.snake.snakeCubes, this.food, this.speedFood, this.decreaseFood, this.moreIntensityFood);

    this.add(this.food);
    this.add(this.speedFood);
    this.add(this.decreaseFood);
    this.add(this.moreIntensityFood);
    this.add(this.lessIntesityFood);

    this.setMessageFood("Las bolas verdes incrementan el tamaño");
	this.setMessageSpeedFood("Las bolas moradas aumentan la velocidad");
	this.setMessageDecreaseFood("Las bolas azules decrementan el tamaño");
	this.setMessageMoreFood("Las bolas amarillas aumentan la luz");
	this.setMessageLessFood("Las bolas blancas disminuyen la luz");
  }
  
  createCamera (unRenderer) {
    // Para crear una cámara le indicamos
    //   El ángulo del campo de visión en grados sexagesimales
    //   La razón de aspecto ancho/alto
    //   Los planos de recorte cercano y lejano
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    // También se indica dónde se coloca
    this.camera.position.set (0, 0, 40);
    // Y hacia dónde mira
    var look = new THREE.Vector3 (0,0,0);
    this.camera.lookAt(look);
    this.add (this.camera);
  }
  
  createLights () {
    var ambientLight = new THREE.AmbientLight(0xccddee, 0.35);
    this.add (ambientLight);
    
    this.spotLight = new THREE.SpotLight( 0xffffff, this.lightIntensity );
    this.spotLight.position.set( 0, 0, 100 );
    this.add (this.spotLight);
  }

  createMap() {

    var map = new THREE.Mesh ();

    map.geometry = new THREE.BoxGeometry (this.sizeMapX,this.sizeMapY,0);

    map.material = new THREE.MeshPhongMaterial( {color: 0x000000} );

    this.add (map);

    // muro superior

    for (var i = 0; i < this.sizeMapX; i++){

      var borde = new THREE.Mesh ();
      borde.geometry = new THREE.BoxGeometry (1,1,0);
      borde.material = new THREE.MeshPhongMaterial( {color: 0x1100EE} );

      borde.position.x = -this.sizeMapX/2+0.5 + i;
      borde.position.y = this.sizeMapY/2-0.5;

      this.add (borde);
    }

    //muro inferior

    for (var i = 0; i < this.sizeMapX; i++){

      var borde = new THREE.Mesh ();
      borde.geometry = new THREE.BoxGeometry (1,1,0);
      borde.material = new THREE.MeshPhongMaterial( {color: 0x1100EE} );

      borde.position.x = -this.sizeMapX/2+0.5 + i;
      borde.position.y = -this.sizeMapY/2+0.5;

      this.add (borde);
    }

    //muro derecho

    for (var i = 0; i < this.sizeMapY; i++){

      var borde = new THREE.Mesh ();
      borde.geometry = new THREE.BoxGeometry (1,1,0);
      borde.material = new THREE.MeshPhongMaterial( {color: 0x1100EE} );

      borde.position.x =  this.sizeMapX/2-0.5;
      borde.position.y = -this.sizeMapY/2+0.5 + i;

      this.add (borde);
    }

    //muro izquierdo

    for (var i = 0; i < this.sizeMapY; i++){

      var borde = new THREE.Mesh ();
      borde.geometry = new THREE.BoxGeometry (1,1,0);
      borde.material = new THREE.MeshPhongMaterial( {color: 0x1100EE} );

      borde.position.x = -this.sizeMapX/2+0.5;
      borde.position.y = -this.sizeMapY/2+0.5 + i;

      this.add (borde);
    }

   }
  
  getCamera () {
    // En principio se devuelve la única cámara que tenemos
    // Si hubiera varias cámaras, este método decidiría qué cámara devuelve cada vez que es consultado
    return this.camera;
  }
  
  setCameraAspect (ratio) {
    this.camera.aspect = ratio;
    this.camera.updateProjectionMatrix();
  }

  setMovement(move){

      if(!this.snake.running)
      	this.snake.start();
        
      this.snake.changeDirection(move);

  }

  comprobarComerComida(){

  	// Si la serpiente se ha comido una bola verde
	if(this.snake.snakeCubes[0].position.x == this.food.position.x
		&& this.snake.snakeCubes[0].position.y == this.food.position.y){

		this.food.generateFood(this.snake.snakeCubes, this.speedFood, this.decreaseFood, this.lessIntesityFood, this.moreIntensityFood);

		this.snake.increaseSize();

		// Comprobar si se ha ganado el juego
		this.snake.winner();
		if(this.snake.win){
			this.setMessage("¡Has ganado! Pulsa 'r' para empezar de nuevo");
		}
	}

	// Si la serpiente se ha comido una bola morada
	if(this.snake.snakeCubes[0].position.x == this.speedFood.position.x
		&& this.snake.snakeCubes[0].position.y == this.speedFood.position.y){

		this.speedFood.generateFood(this.snake.snakeCubes, this.food, this.decreaseFood, this.lessIntesityFood, this.moreIntensityFood);

		this.snake.increaseSpeed();
	}

	// Si la serpiente se ha comido una bola azul
	else if(this.snake.snakeCubes[0].position.x == this.decreaseFood.position.x
		&& this.snake.snakeCubes[0].position.y == this.decreaseFood.position.y){

		this.decreaseFood.generateFood(this.snake.snakeCubes, this.food, this.speedFood, this.lessIntesityFood, this.moreIntensityFood);

		//this.snake.decreaseSize();
	}

	// Si la serpiente se ha comido una bola amarilla
	else if(this.snake.snakeCubes[0].position.x == this.moreIntensityFood.position.x
		&& this.snake.snakeCubes[0].position.y == this.moreIntensityFood.position.y){

		this.moreIntensityFood.generateFood(this.snake.snakeCubes, this.food, this.speedFood, this.decreaseFood, this.lessIntesityFood);

		this.lightIntensity += 0.1;
	}

	// Si la serpiente se ha comido una bola blanca
	else if(this.snake.snakeCubes[0].position.x == this.lessIntesityFood.position.x
		&& this.snake.snakeCubes[0].position.y == this.lessIntesityFood.position.y){

		this.lessIntesityFood.generateFood(this.snake.snakeCubes, this.food, this.speedFood, this.decreaseFood, this.moreIntensityFood);

		this.lightIntensity -= 0.1;
	}
  }

  /// It shows a feed-back message for the user
/**
 * @param str - The message
 */
  setMessage (str) {
  		document.getElementById ("Messages").innerHTML = "<h2>"+str+"</h2>";
  }

/******************************************************************/
/* MENSAJES DE INFORMACIÓN SOBRE EL COLOR DE LAS BOLAS AL USUARIO */
/******************************************************************/

    /// It shows a feed-back message for the user
/**
 * @param str - The message
 */
  setMessageFood (str) {
  		document.getElementById ("food").innerHTML = "<h2>"+str+"</h2>";
  }

    /// It shows a feed-back message for the user
/**
 * @param str - The message
 */
  setMessageSpeedFood (str) {
  		document.getElementById ("speedFood").innerHTML = "<h2>"+str+"</h2>";
  }

    /// It shows a feed-back message for the user
/**
 * @param str - The message
 */
  setMessageDecreaseFood (str) {
  		document.getElementById ("decreaseFood").innerHTML = "<h2>"+str+"</h2>";
  }

    /// It shows a feed-back message for the user
/**
 * @param str - The message
 */
  setMessageMoreFood (str) {
  		document.getElementById ("moreFood").innerHTML = "<h2>"+str+"</h2>";
  }

    /// It shows a feed-back message for the user
/**
 * @param str - The message
 */
  setMessageLessFood (str) {
  		document.getElementById ("lessFood").innerHTML = "<h2>"+str+"</h2>";
  }

  update () {

  	this.comprobarComerComida();

    this.snake.update();

    this.spotLight.intensity = this.lightIntensity;

    if(this.snake.gameOver){
    	this.setMessage("¡Has perdido! Pulsa 'r' para empezar de nuevo");
    	this.setMessageFood("");
    	this.setMessageSpeedFood("");
    	this.setMessageDecreaseFood("");
    	this.setMessageMoreFood("");
    	this.setMessageLessFood("");
    }
  }
}