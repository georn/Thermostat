
describe ('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });
  describe('default temperature', function() {
    it('shows a defualt temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });
});
