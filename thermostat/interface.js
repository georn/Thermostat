$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();
  updatePowerSavingMode();

  $('#up-button').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#down-button').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $("#power-saving-mode-button").click(function() {
    thermostat.switchPowerSavingMode();
    updatePowerSavingMode();
  });

  $("#reset-button").click(function() {
    thermostat.resetTemperature();
    updateTemperature();
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

});
