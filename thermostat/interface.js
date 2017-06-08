$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();
  updatePowerSavingMode();
  updateEnergyUsage();

  $('#up-button').click(function(){
    thermostat.up();
    updateTemperature();
    updateEnergyUsage();
  });

  $('#down-button').click(function() {
    thermostat.down();
    updateTemperature();
    updateEnergyUsage();
  });

  $("#power-saving-mode-button").click(function() {
    thermostat.switchPowerSavingMode();
    updatePowerSavingMode();
  });

  $("#reset-button").click(function() {
    thermostat.resetTemperature();
    updateTemperature();
    updatePowerSavingMode();
    updateEnergyUsage();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };

  function updatePowerSavingMode() {
    if(thermostat.powerSavingMode){
      $('#power-saving-mode-info').text("On");
    } else {
      $('#power-saving-mode-info').text("Off");
    }
  };

  function updateEnergyUsage() {
    $('#energy-usage').text(thermostat.energyUsage);
  }

});
