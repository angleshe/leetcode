/* eslint-disable @typescript-eslint/camelcase */
export class Solution {
  private radius: number;
  private x: number;
  private y: number;

  constructor(radius: number, x_center: number, y_center: number) {
    this.radius = radius;
    this.x = x_center;
    this.y = y_center;
  }
  /**
   * @description 返回圆内的一个随机点
   * @author angle
   * @date 23/02/2022
   * @return {*}  {number[]}
   * @memberof Solution
   */
  randPoint(): number[] {
    const d = this.radius * Math.sqrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    return [d * Math.cos(theta) + this.x, d * Math.sin(theta) + this.y];
  }
}
