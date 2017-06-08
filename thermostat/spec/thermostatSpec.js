
describe ('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  describe('default temperature', function() {
    it('shows a default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('default minimum temperature', function() {
    it('shows a default minimum temperature of 10', function() {
      expect(thermostat.minimum).toEqual(10);
    });
  });

  describe('default maximum temperature', function() {
    it('shows a default maximum temperature of 25', function() {
      expect(thermostat.maximum).toEqual(25);
    });
  });

  describe('default power saving mode is on', function() {
    it('shows a default power saving mode is true', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });
  });

  describe('#up', function() {
    it('increases temperature by 1', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('will not increase temperature higher than the maximum when power saving mode is on ', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(function(){thermostat.up()}).toThrow(new Error('Maximum temperature reached.'));
    });

    it('will not increase temperature higher than the maximum when power saving mode is off ', function() {
      thermostat.switchPowerSavingMode();
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up() }).toThrow(new Error('Maximum temperature reached.'));
    });
  });

  describe('#down', function() {
    it('reduces temperature by 1', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it('will not reduce temperature lower than the minimum', function() {
      for (var i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(function() { thermostat.down() }).toThrow(new Error('Minimum temperature reached.'));
    });
  });

  describe('#switchPowerSavingMode', function() {
    it('it switches power saving mode off', function() {
      thermostat.switchPowerSavingMode();
      expect(thermostat.powerSavingMode).toEqual(false);
    });

    it('it changes maximum temperature to 32 when off', function() {
      thermostat.switchPowerSavingMode();
      expect(thermostat.maximum).toEqual(32);
    });

    it('it switches power saving mode on', function() {
      thermostat.switchPowerSavingMode();
      thermostat.switchPowerSavingMode();
      expect(thermostat.powerSavingMode).toEqual(true);
    });

    it('it changes maximum temperature to 25 when on', function() {
      thermostat.switchPowerSavingMode();
      thermostat.switchPowerSavingMode();
      expect(thermostat.maximum).toEqual(25);
    });
  });

  describe('#resetTemperature', function() {
    it('resets temperature to default temperature', function() {
      thermostat.up();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('#askEnergyUsage', function() {
    it('shows by default medium-usage', function() {
      expect(thermostat.energyUsage).toEqual('medium-usage');
    });

    it('shows high-usage', function() {
      for(var i=0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage).toEqual('high-usage');
    });

    it('shows low-usage', function() {
      for(var i=0; i <= 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage).toEqual('low-usage');
    });
  });
});
