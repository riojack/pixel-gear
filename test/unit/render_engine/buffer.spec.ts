import * as chai from 'chai';
import Buffer from '../../../src/render_engine/buffer';
import 'mocha';

describe('Buffer test', () => {
  const expectedBufferName = 'primary-buffer';
  let buffer: Buffer;

  beforeEach('set up', () => {
    buffer = new Buffer(expectedBufferName);
  });

  it('should have an id', () => {
    chai.expect(buffer.id).to.equal(expectedBufferName);
  });
});
