var Thermostat = function() {
  var DEFAULT_TEMPERATURE = 20
  this.temperature = DEFAULT_TEMPERATURE;

  this.up = function() {
    this.temperature++;
  };
};
