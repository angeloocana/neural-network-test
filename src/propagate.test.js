import { Neuron } from 'synaptic';
import * as assert from 'ptz-assert';

describe('propagate', () => {
  it('example 1', () => {
    const A = new Neuron();
    const B = new Neuron();

    A.project(B); // Neuron A connects to Neuron B

    const learningRate = 0.3;

    for (var i = 0; i < 20000; i++) {
      // when A activates 1
      A.activate(1);

      // train B to activate 0
      B.activate();
      B.propagate(learningRate, 0);
    }

    // test it
    A.activate(1);

    const output = B.activate();
    assert.ok(output < 0.001);
  })
});
