import * as chai from 'chai';
import Buffer from '../../../src/render_engine/buffer';
import 'mocha';
import { IDrawableContext, IImageData } from '../../../src/interfaces/context';
import * as TypeMoq from "typemoq";

describe('Buffer test', () => {
  const expectedBufferName = 'primary-buffer';
  let rgba_pixel_array: Uint8ClampedArray;
  let mock_context: TypeMoq.IMock<IDrawableContext>;
  let buffer: Buffer;

  beforeEach('set up', () => {
    rgba_pixel_array = new Uint8ClampedArray([
      165, 0, 0, 50,
      0, 165, 0, 50,
      0, 0, 165, 50,
      0, 0, 0, 50,

      165, 0, 0, 50,
      0, 165, 0, 50,
      0, 0, 165, 50,
      0, 0, 0, 50,

      165, 0, 0, 50,
      0, 165, 0, 50,
      0, 0, 165, 50,
      0, 0, 0, 50,

      165, 0, 0, 50,
      0, 165, 0, 50,
      0, 0, 165, 50,
      0, 0, 0, 50,
    ]);
    mock_context = TypeMoq.Mock.ofType<IDrawableContext>(undefined, TypeMoq.MockBehavior.Strict)
    buffer = new Buffer(expectedBufferName, mock_context.object);
  });

  it('should have an id', () => {
    chai.expect(buffer.id).to.equal(expectedBufferName);
  });

  describe('when drawing image data', () => {
    it('should draw on the underlying drawable context', () => {
      mock_context.setup(x => x.putImageData(
        TypeMoq.It.isObjectWith({ data: rgba_pixel_array, height: 4, width: 4 }),
        TypeMoq.It.isValue(0),
        TypeMoq.It.isValue(0)
      ));

      buffer.putRaw(rgba_pixel_array, 0, 0, 4, 4);

      mock_context.verifyAll();
    });
  });
});
