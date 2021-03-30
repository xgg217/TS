import { Square } from "./core/Square";
import { IView } from "./core/types"

class SquareConsoleViewer implements IView {
  private square: Square;
  

  constructor(square:Square) {
    this.square = square;
  }

  /**
   * 显示
   */
  show(): void {
    console.log(this.square.point);
    
  }

  /**
   * 移除
   */
  remove(): void {
    console.log(this.square);
  }


}


const square = new Square({ x: 0, y:0}, "red");



square.viewer = new SquareConsoleViewer(square);
square.viewer.show();

square.point = {
  x: 10,
  y: 10
}

square.point = {
  x: 100,
  y: 100
}

export {}
