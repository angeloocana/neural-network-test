import { Network, Layer } from 'synaptic';
import * as assert from 'ptz-assert';

describe('networks propagate', () => {
  it('example 1', () => {
    const inputLayer = new Layer(4);
    const hiddenLayer = new Layer(6);
    const outputLayer = new Layer(2);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    const myNetwork = new Network({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
    });

    const output = myNetwork.activate([1, 0, 1, 0]);

    console.log(output);
    assert.equal(output.length, 2);
    assert.ok(output[0] < 1);
    assert.ok(output[1] < 1);
  });

  it('tic tac toe', () => {
    const inputLayer = new Layer(9);
    const hiddenLayer = new Layer(9);
    const outputLayer = new Layer(9);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    const myNetwork = new Network({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
    });

    const output = myNetwork.activate([1, 0, 0, 0, 0, 0, 0, 0, 0]);
    console.log('tic tac toe: ', output);
    assert.equal(output.length, 9);
  });
});
