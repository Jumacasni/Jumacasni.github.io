 
class LessIntensityFood extends THREE.Mesh {
  constructor(sizeMapX, sizeMapY) {
    super();
    this.sizeMapX = sizeMapX;
    this.sizeMapY = sizeMapY;

    this.geometry = new THREE.CircleGeometry (0.5,32);
    this.material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    this.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0.5, 0.5, 0));
    this.position.z = 0.5;
  }

  generateFood(snakeCubes, food, speedFood, decreaseFood, moreIntensityFood){
    while(true){
      var seguir_buscando = false;

      var xFood = Math.floor(Math.random() * (this.sizeMapX/2-2 - (-this.sizeMapX/2+1) )) + (-this.sizeMapX/2+1);
      var yFood = Math.floor(Math.random() * (this.sizeMapY/2-2 - (-this.sizeMapY/2+1) )) + (-this.sizeMapY/2+1);

      // Si la nueva posición de la comida no está en una casilla de la serpiente o de otra bola
      for(var i=0;i<snakeCubes.length;++i){
        if((snakeCubes[i].position.x == xFood && snakeCubes[i].position.y == yFood) | 
          (xFood == food.position.x && yFood == food.position.y) | 
          (xFood == speedFood.position.x && yFood == speedFood.position.y) |
          (xFood == decreaseFood.position.x && yFood == decreaseFood.position.y) |
          (xFood == moreIntensityFood.position.x && yFood == moreIntensityFood.position.y)){
              seguir_buscando = true;
              break;
        }
      }

      if(!seguir_buscando)
        break;
    }

    this.position.x = xFood;
    this.position.y = yFood;
    return this;
  }

  update () {

  }

}
