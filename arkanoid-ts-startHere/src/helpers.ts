import { Brick } from "./sprites/brick";
import {
  BRICK_IMAGES,
  LEVEL,
  STAGE_COLS,
  STAGE_PADDING,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_ENERGY,
} from "./setup";



export function createBricks(): Brick[] {
  return LEVEL.reduce((ack, element, i) => {
    const row = Math.floor(i+1)/STAGE_COLS;
    const col = i % STAGE_COLS ;

    const x = STAGE_PADDING + col * (BRICK_WIDTH + STAGE_PADDING);
    const y = STAGE_PADDING + row * (BRICK_HEIGHT + STAGE_PADDING);
    

  if (element === 0) return ack;
    return [
      ...ack,
      new Brick(
        { x, y },
        BRICK_WIDTH,
        BRICK_HEIGHT,
        BRICK_ENERGY[element],
        BRICK_IMAGES[element]
      ),
    ];
  }, [] as Brick[]);  
}