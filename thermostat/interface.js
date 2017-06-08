$(document).ready(function(){

  var thermostat = new Thermostat();

  $('#up-button').click(function(){
    thermostat.up();
  });

});
