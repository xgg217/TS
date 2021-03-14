/**
 * 坐标
 */
export interface IPoint {
  readonly x:number // 逻辑坐标，与在界面中的位置没有关系
  readonly y:number
}

/**
 * 显示者
 * show 显示
 * remove 移除，不再显示
 */
export interface IView {
  show():void;

  remove():void;
}