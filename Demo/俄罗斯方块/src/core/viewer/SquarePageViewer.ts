import { Square } from "../Square";
import { IView } from "../types";
import PageConfig from "./PageConfig";



/**
 * 显示一个小方块到页面上
 */
export class SquarePageViewer implements IView {

  private dom?:HTMLElement;

  /**
   * 
   * @param square 
   * @param container 容器
   */
  constructor(
    private square:Square,
    private container:HTMLElement) {
    
  }

  show(): void {
    const {width:widthVal, height:heightVal } = PageConfig.SquareSize;
    if(!this.dom) {
      const newDiv = document.createElement("div");
      newDiv.textContent = "xgg";

      {
        // 设置样式
        
        newDiv.style.width = widthVal + "px";
        newDiv.style.height = heightVal + "px";
        newDiv.style.position = "absolute";
        newDiv.style.border = "1px solid red";
        newDiv.style.boxSizing = "border-box";
      }

      this.dom = newDiv;
      this.container.appendChild(this.dom);
    }

    this.dom.style.left = (this.square.point.x * widthVal) + "px";
    this.dom.style.top = (this.square.point.y * heightVal) + "px";
    this.dom.style.backgroundColor = "red";

  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
}


