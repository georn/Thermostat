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

  $('#select-city').submit(function(event) {
    var city, previousCity;
    event.preventDefault();
    city = $('#current-city').val()
    previousCity = $('#current-city-selected').text();
    $('#current-city-selected').text( function() {
      return $(this).text().replace(previousCity, city);
    })
    displayWeather(city);
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
  };

  function displayWeather(city) {
    var url, token, units;
    url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-city-temperature').text(data.main.temp);
    }).fail( function() {
      var previousCity, previousTemperature
      previousCity = $('#current-city-selected').text();      
      previousTemperature = $('#current-city-temperature').text();
      $('#current-city-selected').text(function () {
        return $(this).text().replace(previousCity, 'N/A');
      })
      $('#current-city-temperature').text(function () {
        return $(this).text().replace(previousTemperature, 'N/A');
      });
    });
  }

});
