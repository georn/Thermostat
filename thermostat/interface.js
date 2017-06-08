$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();
  updatePowerSavingMode();
  updateEnergyUsage();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-city-temperature').text(data.main.temp);
  });

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

  $('#current-city-selector').change(function() {
    var city = $('#current-city-selector').val()
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-city-temperature').text(data.main.temp);
    });
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
