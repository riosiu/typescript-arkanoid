import { Vector } from "~/types";


export class Brick {
  private brickImage :HTMLImageElement = new Image();

  constructor(
    private position: Vector,
    private brickWidht: number,
    private brickHeight: number,
    private brickEnergy: number,
    image :string,
  ){
    this.brickWidht = brickWidht
    this.brickHeight = brickHeight
    this.brickEnergy = brickEnergy
    this.position =position
    this.brickImage.src = image

  }

  //getters

  get width():number{
    return this.brickWidht
  }
  get height(): number{
    return this.brickHeight
  }
  get energy(): number{
    return this.brickEnergy
  }
  get pos(): Vector{
    return this.position
  }
  get image(): HTMLImageElement{
    return this.brickImage
  }

  //setter

  set energy(energy: number){
    this.brickEnergy = energy
  }
}