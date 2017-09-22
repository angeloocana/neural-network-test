const {Neuron} = require('synaptic');

const A = new Neuron();
const B = new Neuron();

A.project(B);

console.log('A.activate(0.5): ', A.activate(0.2));
console.log('B.activate(): ', B.activate());
