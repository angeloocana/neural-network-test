import { Network, Layer } from 'synaptic';
import * as assert from 'ptz-assert';
// import {random} from 'ptz-math';

describe('networks propagate', () => {
  it('XOR example', () => {
    const inputLayer = new Layer(2);
    const hiddenLayer = new Layer(3);
    const outputLayer = new Layer(1);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    const myNetwork = new Network({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
    });


    var learningRate = 0.3;
    for (var i = 0; i < 20000; i += 1) {
      // 0,0 => 0
      myNetwork.activate([0, 0]);
      myNetwork.propagate(learningRate, [0]);

      // 0,1 => 1
      myNetwork.activate([0, 1]);
      myNetwork.propagate(learningRate, [1]);

      // 1,0 => 1
      myNetwork.activate([1, 0]);
      myNetwork.propagate(learningRate, [1]);

      // 1,1 => 0
      myNetwork.activate([1, 1]);
      myNetwork.propagate(learningRate, [0]);
    }

    assert.ok(myNetwork.activate([0, 0]) < 0.2, '0,0 < 0.2');
    assert.ok(myNetwork.activate([0, 1]) > 0.8, '0,1 > 0.8');
    assert.ok(myNetwork.activate([1, 0]) > 0.8, '1,0 > 0.8');
    assert.ok(myNetwork.activate([1, 1]) < 0.2, '1,1 < 0.2');
  });
});
