import type { FnContext } from "@deco/deco";

export default class Site {
  private baseNum = 2;
  constructor(_state: null) {}
  /**
   * @name MULTPLY_BY_TWO
   * @description Multiplies the input number by two
   */
  multiplyByTwo({ num }: { num: number }, _req: Request, _ctx: FnContext) {
    return num * this.baseNum;
  }

  /**
   * @name HELLO_WORLD
   * @description Say hello world to a given name
   */
  loader_helloWorld(
    { name }: { name: string },
    _req: Request,
    _ctx: FnContext,
  ) {
    return `Hello World, ${name}!`;
  }
}
