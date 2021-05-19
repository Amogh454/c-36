var database;
var playerCount = 0;
var gameState;
var canvas
var form;
var game;
var player;

function setup(){
  
  console.log(database);
  canvas  =  createCanvas(500,500);
  database = firebase.database();

  game = new Game();
  game.getState()
  game.start();


  
}

function draw(){
 

  
}