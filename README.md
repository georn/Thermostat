# Thermostat

This is just the simple challenge to build a Thermostat with a few functionalities.

## User stories

```

As a user,
So that I can set the temperature hotter
I want to increase the thermostat's temperature.

As a user,
So that I can set the temperature cooler
I want to reduce the thermostat's temperature.

As a user,
So that I can save power,
I want to be able to switch power saving.

As a user,
So that I can restore factory settings,
I want to be able to reset the thermostat.

As a user,
So I know the energy usage of the thermostat,
I want to be able to ask the thermostat the current energy usage.

```

## Development

After leaving this code to gain some dust for a few months, I decided to
refactor it better because I believe it is a good code.

Rather than have the code live as a static page, I decided to go and put it on
top of a Node.js server, also giving me the opportunity to take away the
standalone Jasmine testing frameworks and bringing it as a package to organise
the application better.

## Tasks

- [x] Thermostat starts at 20 degrees
- [x] The minimum temperature is 10 degrees
- [x] If power saving mode is on, the maximum temperature is 25 degrees
- [x] If power saving mode is off, the maximum temperature is 32 degrees
- [x] Power saving mode is on by default
- [x] Less than 18 degrees is low usage of energy
- [x] Less than 25 degrees is medium usage of energy


## Collaboration

This amazing people collaborated to the code, but by that time I wasn't a good git collaborator, so I didn't document it. Thus, it is now when they have their credits.

* [Panteha Ahmadi](https://github.com/panteha)
* [Spencer Barton-Fisher](https://github.com/spencerbf)
