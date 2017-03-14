var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;



var finished = false;

var inputLayer = new Layer(2);
var hiddenLayer1 = new Layer(3);
var outputLayer = new Layer(1);

inputLayer.project(hiddenLayer1, Layer.connectionType.ALL_TO_ALL);
hiddenLayer1.project(outputLayer, Layer.connectionType.ALL_TO_ALL);

var myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer1],
    output: outputLayer
});

train = function () {

//cleanYData(y_data)

function createValues() {
  var x = [];
  for (var i = 0; i < window.x_data.length; i += 1) {
    x.push({input: window.x_data[i], output: [window.y_data[i]]})
  }
  return x;
}



  var trainingSet = createValues();
  console.log(trainingSet);
  var trainer = new Trainer(myNetwork);
  trainer.train(trainingSet, {
      rate: .3,
      iterations: 2000,
      error: .1,
      shuffle: true,
      log: 1,
      cost: Trainer.cost.CROSS_ENTROPY
  });
}
