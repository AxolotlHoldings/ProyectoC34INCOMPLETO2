//variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var stadium_bg, football_bg;
var titleText,titleTextImg,logo,logoSprite,
playButton, playButton_Img,
footballGameButton, footballGameImg;

var footballer;
var footballRival, footballRival_anim;

var playerGoal, rivalGoal, playerGoal_Img, rivalGoal_Img;
var aim_arrow;
var football;
var playerBalls = []

var presentation;

var gameState = "Presentation"

//cargar los objectos
function preload(){
  stadium_bg = loadImage("assets/FondoEstadio.png");
  titleTextImg = loadImage("assets/StickOlimpiadasTexto.png");
  logo = loadImage("assets/LogoTransparente.png");
  playButton_Img = loadImage("assets/botonJUgar.png");
  footballGameImg = loadImage("assets/BotonFutbol.png");
  football_bg = loadImage("assets/FondoFutbol.png");
  playerGoal_Img = loadImage("assets/PorteriaJugador.png");
  rivalGoal_Img = loadImage("assets/PorteriaRival.png")
  
  footballRival_anim = loadAnimation("assets/FootballRival1.png",
   "assets/FootballRival2.png",
   "assets/FootballRival3.png");

}

//configuración
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  engine = Engine.create();
  world = engine.world;

  //Sprites usados para la pantalla de inicio
  titleText = createSprite(width-1200, height-825, 100, 50);
  titleText.addImage(titleTextImg);
  titleText.scale = 0.75;

  logoSprite = createSprite(width-300, height-825, 50, 50);
  logoSprite.addImage(logo);
  logoSprite.scale = 0.5;

  playButton = createSprite(width+200, height-500, 100, 50);
  playButton.addImage(playButton_Img);
  playButton.scale = 1.5;

  footballGameButton = createSprite(width-1050, height-450, 100, 50);
  footballGameButton.addImage(footballGameImg);
  footballGameButton.scale = 0.5;

  footballRival = createSprite(width-700, height-250, 50, 50);
  footballRival.addAnimation("running", footballRival_anim);

  rivalGoal = createSprite(width-200, height-300, 50, 50);
  rivalGoal.addImage(rivalGoal_Img);
  rivalGoal.debug = false;

  playerGoal = createSprite(width-1800, height-300, 50, 50);
  playerGoal.addImage(playerGoal_Img);

  presentation = new Presentation(width-1050, height-450, 100, 100);
  footballer = new Footballer(width-1400, height-250, 50, 50);
  aim_arrow = new Flecha(footballer.body.position.x, footballer.body.position.y, 50, 50);
}



//dibujo
function draw() 
{
  console.log("Estado de juego: ", gameState)
  
if(gameState === "Presentation")
{
  background(51);
  titleText.visible = false;
  logoSprite.visible = false;
  playButton.visible = false;
  footballGameButton.visible = false;
  footballRival.visible = false;
  playerGoal.visible = false;
  rivalGoal.visible = false;
  presentation.display();

    setTimeout(() =>{
    gameState = "titleScreen";
    },5500)
}

if(gameState === "titleScreen")
{
    background(stadium_bg);
    logoSprite.visible = true;
    titleText.visible = true;
    playButton.visible = true;
    footballRival.visible = false;
    footballGameButton.visible = false;
    playerGoal.visible = false;
    rivalGoal.visible = false;

    if(mousePressedOver(playButton)){
      playButton.scale = playButton.scale-0.35;
      setTimeout(() =>{
        gameState = "sportSelection";
        },750)
    }


    MenuSlides();
}

if(gameState === "sportSelection"){
  background("orange");
  stroke("black");
  fill("white");
  textSize(100);
  text("Selecciona un deporte" , width-1575, height-800);
  playButton.visible = false;
  logoSprite.visible = false;
  titleText.visible = false;
  footballGameButton.visible = true;
  footballRival.visible = false;
  playerGoal.visible = false;
  rivalGoal.visible = false;
  
  if(footballGameButton.scale<0.75){
    footballGameButton.scale = footballGameButton.scale+0.25;
  }
  
  if(mousePressedOver(footballGameButton)){
    gameState = "Football"
  }
}

if(gameState === "Football")
{
  background(football_bg);
  footballGameButton.scale = footballGameButton.scale-0.05;
  footballGameButton.visible = false;
  footballRival.visible = true;
  rivalGoal.visible = true;
  playerGoal.visible = true;
  footballer.display();
  aim_arrow.display();
  //Posiciones del Rival
  
}
  console.log(footballRival.velocityY);
  Engine.update(engine);
  drawSprites();
  
}


//Funciones
function MenuSlides()
{
  //Características del botón de jugar
playButton.velocityX = -50;
  if(playButton.x<width-1000){
      playButton.velocityX = 0;
      playButton.scale = playButton.scale+0.25;
      if(playButton.scale>2){
      playButton.scale = 2;
    }
  }
}

