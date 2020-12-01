var dog,dogi,happydog;
var FoodS,FoodStock;
var database;

function preload()
{
  dogi = loadImage("dogImg.png");
  happydog = loadImage("dogImg1.png");
}
function setup() {
  database = firebase.database;
	createCanvas(500, 500);
  dog = createSprite(250,300,150,150);
  dog.addImage(dogi);
  dog.scale = 0.15;
  FoodStock = database.ref('food');
  FoodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  
  if (keyWentDown(UP_ARROW)){
    writeStock(FoodS);
    dog.addImage(happydog);
  }
  drawSprites();
  //text(print(database.ref(food)))
  text("food remaining" + Foods,170,200);
}
function readStock(data){
  FoodS = data.val();
}
function writeStock(x){
  if (x<=0){
    x = 0;
  }
  else {
    x = x - 1;
    }
 database.ref('/').update({
   food:x
 })
}
