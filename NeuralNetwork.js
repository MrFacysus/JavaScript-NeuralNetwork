function sigmoid(z) {
  return 1 / (1 + Math.exp(-z));
}

class Neuron {
  constructor() {
    this.value = 0.0;
    this.connectedSynapses = [];
  }

  activate() {
    this.value = 0.0;

    for (let i = 0; i < this.connectedSynapses.length; i++) {
      this.value += this.connectedSynapses[i].start.value * this.connectedSynapses[i].weight;
    }

    this.value = sigmoid(this.value);
  }
}

class Synapse {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.weight = Math.random();
  }
}

class Brain {
  constructor() {
    this.neuronList = [];

    for (let i = 0; i < 3; i++) {
      let neuronLayer = [];
      for (let j = 0; j < 6; j++) {
        neuronLayer.push(new Neuron());
      }
      this.neuronList.push(neuronLayer);
    }

    for (let i = 1; i < 3; i++) {
      for (let j = 0; j < 6; j++) {
        for (let k = 0; k < 6; k++) {
          let newSynapse = new Synapse(this.neuronList[i - 1][j], this.neuronList[i][k]);
          this.neuronList[i][j].connectedSynapses.push(newSynapse);
        }
      }
    }
  }
}
