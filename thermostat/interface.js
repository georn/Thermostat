$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#up-button').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#down-button').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $("#power-saving-mode-button").click(function() {
    console.log(1);
    console.log(thermostat);
    thermostat.switchPowerSavingMode();
    console.log(thermostat);
    console.log(2);
  }); //Not working properly

  $("#reset-button").click(function() {
    console.log(9);
    console.log(thermostat);
    thermostat.resetTemperature();
    updateTemperature();
    console.log(thermostat);
    console.log(8);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };
});
