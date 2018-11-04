interface IImageData {
  readonly data: Uint8ClampedArray;
  readonly height: number;
  readonly width: number;
}


interface IDrawableContext extends CanvasRenderingContext2D {
  putImageData(imagedata: IImageData, dx: number, dy: number): void;
}

export default IDrawableContext;