var jardim,coelho;
var imagemdojardim,imagemdocoelho;
var maca, folhadelaranja, folha, folhavermelha;
var imgmaca, imgfolhadelaranja, imgfolha, imgfolhavermelha;

function preload(){
  imagemdojardim = loadImage("garden.png");
  imgmaca = loadImage("apple.png");
  imgfolhadelaranja = loadImage("orangeLeaf.png");
  imgfolha = loadImage("leaf.png")
  imgfolhavermelha = loadImage("redImage.png")
  imagemdocoelho = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Fundo em movimento
  jardim=createSprite(200,200);
  jardim.addImage(imagemdojardim);

  // Criando o menino corredor
  coelho = createSprite(180,340,30,30);
  coelho.scale =0.09;
  coelho.addImage(imagemdocoelho);
}



function draw() {
  background(0);
  
  bordas= createEdgeSprites();
  coelho.x = World.mouseX;
  coelho.collide(bordas);

  drawSprites();
  geobj();
}

//gerador de objetos
function geobj() {
  if (frameCount % 60 === 0) {
    //seleção de objeto e a faixa a onde ele estará
    obj = Math.round(random(1, 4));
    randPosX = Math.round(random(1, 3));
    
    //informações irá mandar no console
    console.log("Object: "+obj);
    console.log("Line: "+randPosX);
    
    //if e else das posições
    var positionX;
    
    if (randPosX === 1) {
      positionX = 90;
    }else if (randPosX === 2) {
      positionX = 203;
    }else if (randPosX === 3) {
      positionX = 314;
    }
    
    //if e else dos objetos
    if (obj === 1) {
      maca = createSprite(positionX, -10, 80, 80);
      maca.addImage(imgmaca);
      maca.scale = 0.1;
      maca.velocityY = 6;
    }else if (obj === 2) {
      folhadelaranja = createSprite(positionX, -10, 80, 80)
      folhadelaranja.addImage(imgfolhadelaranja);
      folhadelaranja.scale = 0.1;
      folhadelaranja.velocityY = 6;
    }else if (obj === 3) {
      folha = createSprite(positionX, -10, 80, 80)
      folha.addImage(imgfolha);
      folha.scale = 0.1;
      folha.velocityY = 6;
    }else if (obj === 4) {
      folhavermelha = createSprite(positionX, -10, 80, 80)
      folhavermelha.addImage(imgfolhavermelha);
      folhavermelha.scale = 0.1;
      folhavermelha.velocityY = 6;
    }
  }
}
