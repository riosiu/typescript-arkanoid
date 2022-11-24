// Start here
console.log("Start here!");


import { Canvas } from "./view/Canvas"
import { Brick } from "./sprites/brick"
import { Ball } from "./sprites/ball"
import { Paddle } from "./sprites/paddle"

// import image for paddle

import PADDLE_IMAGE from "./images/paddle.png"
import BALL_IMAGE from "./images/ball.png"


//level and colors 

import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY,

} from "./setup"

import { createBricks } from "./helpers"

let gameOver = false;
let score = 0;

function setGameOver(view: Canvas) {
  view.drawInfo("Game Over!");
  gameOver = true;
}

function setGameWin(view:Canvas){
  view.drawInfo("You Win!");
  gameOver = false;
}

function gameLoop (
  view: Canvas,
  bricks: Brick[],
  paddle: Paddle,
  // ball: Ball,

){
  console.log('gooo');
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);

  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) || (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)) {
    paddle.movePaddle();
  }

  requestAnimationFrame(() => gameLoop(view, bricks ,paddle));
}

function gameStart(view: Canvas){
  // mereset tampilan
  score:0;
  view.drawInfo("");
  view.drawScore(0);
  // membuat bricks
  
  const bricks = createBricks();

  //membuat paddle
  const paddle = new Paddle(
    PADDLE_HEIGHT,
    PADDLE_WIDTH,
    PADDLE_SPEED,
    {
      x : PADDLE_STARTX,
      y : view.canvas.height - PADDLE_HEIGHT - 5,
    },
    PADDLE_IMAGE,
  );
  gameLoop(view ,bricks ,paddle);
}
  // membuat tampilan baru

const view = new Canvas('#playField');
view.initStartButton(gameStart);
