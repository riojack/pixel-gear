import Buffer from "./render_engine/buffer";

(function (w: Window) {
  w.setTimeout(function () {
    const d: Document = w.document;

    const canvas: HTMLCanvasElement = d.createElement('canvas');
    canvas.setAttribute('height', '250');
    canvas.setAttribute('width', '250');
    canvas.style.boxShadow = '10px 10px 0px -5px rgba(227,227,227,1)';

    d.body.appendChild(canvas);

    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    const simpleBuffer: Buffer = new Buffer('simple-buffer', ctx);

    setTimeout(function () {
      const redSquare: Uint8ClampedArray = new Uint8ClampedArray([
        255, 0, 0, 255,
        255, 0, 0, 255,
        255, 0, 0, 255,
        255, 0, 0, 255,

        255, 0, 0, 255,
        255, 0, 0, 255,
        255, 0, 0, 255,
        255, 0, 0, 255,

        255, 0, 0, 255,
        255, 0, 0, 255,
        255, 0, 0, 255,
        255, 0, 0, 255,

        255, 0, 0, 255,
        255, 0, 0, 255,
        255, 0, 0, 255,
        255, 0, 0, 255,
      ]);

      simpleBuffer.putRaw(redSquare, 50, 50, 4, 4);
    }, 2000);
  }, 1);
})(window);