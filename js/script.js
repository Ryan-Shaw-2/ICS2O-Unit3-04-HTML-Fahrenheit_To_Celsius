// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function convertClicked () {
  // this function calculates the volume of a sphere

  // input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)

  // process
  const celsius = (fahrenheit - 32) * (5 / 9)
  const celsiusRounded = celsius.toFixed(3)

  // output
  document.getElementById("user-temperature").innerHTML = fahrenheit + '°F is ' + celsiusRounded + '°C'
}
