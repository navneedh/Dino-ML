var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

var finished = false;

    var inputLayer = new Layer(4);
    var hiddenLayer = new Layer(5);
    var outputLayer = new Layer(1);

    inputLayer.project(hiddenLayer);

    hiddenLayer.project(outputLayer);

    var myNetwork = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

begin = function() {

  y_data.forEach(function(part,index,arr) {
    if (arr[index] == true) {
      arr[index]= 1;
    }

    else {
      arr[index] = 0;
    }
  })

  // train the network
  var learningRate = .3;
  for (var i = 0; i < 20000; i++)
  {
    for (var x = 0; x < window.x_data.length; x++)
    {
      myNetwork.activate(window.x_data[x]);
      myNetwork.propagate(learningRate, [y_data[x]]);
}
  }
  finished = true;
}
