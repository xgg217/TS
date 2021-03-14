import { IPoint, IView } from "./types"

/**
 * 小方块
 */
export class Square {
  private _point:IPoint;
  private _color:string; // 方块颜色
  private _viewer?:IView; // 显示者

  constructor(point:IPoint, color:string) {
    this._point = point;
    this._color = color;
  }

  /**
   * 坐标
   */
  get point() {
    return this._point;
  }
  set point(val) {
    this._point = val;

    // 完成显示
    if(this._viewer) {
      this._viewer.show();
    }
  }

  /**
   * 小方块颜色不能变
   * 所以只设置 get
   */
  get color() {
    return this._color;
  }

  /**
   * 显示者
   */
  get viewer() {
    return this._viewer;
  }
  set viewer(val) {
    this._viewer = val;
  }
}