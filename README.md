# Thermostat

The simple challenge was simple, to build a Thermostat with a few basic functionalities.

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

## Quickstart

First, you would need to install the dependencies running

```
npm install
```

## Development

The challenge is complete and here is a couple of demos of the application.
<p align="center">
  <img src="https://media.giphy.com/media/xUNda68Rmk9b4hdm12/giphy.gif" alt="Basic Functionality of the Thermostat" />
</p>
<p align="center">
*Basic Functionality of the Thermostat*
</p>
<p align="center">
  <img src="https://media.giphy.com/media/l4Epic42MqlVF6VHO/giphy.gif" alt="Weather API Functionality" />
</p>
<p align="center">
*It is also connected to a Weather API to get the temperature of different cities!*
</p>
But ***there's always room for improvement*** and also ***I also would have liked it to look cool!***

So, after leaving this code to gain some dust for a few months, I decided to start to refactor it for the sake of practice.

Rather than have the HTML document live by itself, I decided to go and put it on top of an **Express.js server** to also giving me the opportunity to take away the standalone Jasmine testing frameworks and bringing it as a package and ultimately step a notch on the application code.


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
