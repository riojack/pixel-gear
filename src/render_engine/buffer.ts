import { IDrawableContext } from "../interfaces/context";

class Buffer {
  putRaw(image_data: Uint8ClampedArray, x: number, y: number, height: number, width: number): void {
    const boxed_image_data: ImageData = new ImageData(
      image_data,
      height, width
    );
    this._context.putImageData(boxed_image_data, x, y);
  }
  private _id: string;
  private _context: IDrawableContext;

  constructor(id: string, context: IDrawableContext) {
    this._id = id;
    this._context = context;
  }

  get id(): string {
    return this._id;
  }
}

export default Buffer;
