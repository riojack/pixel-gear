import Buffer from '../src/render_engine/buffer';

(function (w: Window) {
  w.setTimeout(function () {
    const doc: Document = w.document;

    const canvas: HTMLCanvasElement = doc.createElement('canvas');
    canvas.setAttribute('height', '250');
    canvas.setAttribute('width', '250');
    canvas.style.boxShadow = '10px 10px 0px -5px rgba(227,227,227,1)';

    doc.body.appendChild(canvas);

    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    const simpleBuffer: Buffer = new Buffer('simple-buffer', ctx);

    setTimeout(function () {
      const spare = doc.createElement('canvas');
      spare.setAttribute('height', '200');
      spare.setAttribute('width', '200');

      const thing = new Image();
      thing.src = 'assets/snail-emoji.png';
      thing.onload = function () {
        const spareCtx = spare.getContext('2d');
        spareCtx.imageSmoothingEnabled = false;

        spareCtx.save();
        spareCtx.drawImage(thing, 0, 0, 21, 21);
        spareCtx.scale(75, 75);
        spareCtx.restore();

        simpleBuffer.putRaw(spareCtx.getImageData(0, 0, 75, 75).data, 0, 0, 75, 75);
      };

    }, 0);
  }, 1);
})(window);