var Thermostat = function() {

  var DEFAULT_TEMPERATURE = 20;
  var DEFAULT_MINIMUM_TEMPERATURE = 10;
  var DEFAULT_MAXIMUM_TEMPERATURE = 25;
  var POWER_SAVING_MODE_MAXIMUM_TEMPERATURE = 32;

  this.temperature = DEFAULT_TEMPERATURE;
  this.minimum = DEFAULT_MINIMUM_TEMPERATURE;
  this.maximum = DEFAULT_MAXIMUM_TEMPERATURE;
  this.powerSavingMode = true;
  this.energyUsage = 'medium-usage';

  Thermostat.prototype.up = function() {
    if(this.temperature < this.maximum) {
      this.temperature++;
    } else {
      throw new Error('Maximum temperature reached.');
    }
  };

  Thermostat.prototype.down = function() {
    if(this.temperature > this.minimum){
      this.temperature--;
    } else {
      throw new Error('Minimum temperature reached.');
    }
  };

  Thermostat.prototype.switchPowerSavingMode = function() {
    this.powerSavingMode = !this.powerSavingMode
    if(this.powerSavingMode) {
      this.maximum = DEFAULT_MAXIMUM_TEMPERATURE;
    } else {
      this.maximum = POWER_SAVING_MODE_MAXIMUM_TEMPERATURE;
    }
  };

  Thermostat.prototype.resetTemperature = function() {
    this.temperature = DEFAULT_TEMPERATURE;
  };

  Thermostat.prototype.askEnergyUsage = function() {
    if(this.temperature < 18) {
      this.energyUsage = 'low-usage';
    } else if(this.temperature >= 18 && this.temperature < 25) {
      this.energyUsage = 'medium-usage';
    } else {
      this.energyUsage = 'high-usage';
    }
  };
};
