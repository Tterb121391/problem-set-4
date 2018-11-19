/*
 * Hello. 2 points.
 */

function hello() {

var div=document.getElementById("output1");
div.innerHTML="Hello, AP Computer Science Principles!";

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {
  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  var div=document.getElementById("output2");
  name=prompt("What is your name?");
  div.innerHTML="Hello, " + name + "!";

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let answer1= cels * 1.8 + 32;
  var div=document.getElementById("output3");
  div.innerHTML=cels + " degrees Celsius equals " + answer1.toFixed(2) + " degrees Fahrenheit.";

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let answer2= (fahr - 32) / 1.8;
  var div=document.getElementById("output4");
  div.innerHTML=fahr + " degrees Fahrenheit equals " + answer2.toFixed(2) + " degrees Celsius.";

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let answer3 = input / 63360;
  let whole3 = Math.floor(answer3);
  let answer4 = ((answer3 - whole3) * 63360) / 36;
  let whole4 = Math.floor(answer4);
  let answer5 = ((answer4 - whole4) * 36) / 12;
  let whole5 = Math.floor(answer5);
  let answer6 = ((answer5 - whole5) * 12);
  var div=document.getElementById("output5");
  div.innerHTML="Miles: " + whole3 + "<br>" + "Yards: " + whole4 + "<br>" + "Feet: " + whole5 + "<br>" + "Inches: " + answer6.toFixed(0);

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let answer7 = input / 100000;
  let whole7 = Math.floor(answer7);
  let answer8 = ((answer7 - whole7) * 1000);
  let whole8 = Math.floor(answer8);
  let answer9 = ((answer8 - whole8) * 100);
  var div=document.getElementById("output6");
  div.innerHTML="Kilometers: " + whole7 + "<br>" + "Meters: " + whole8 + "<br>" + "Centimeters: " + answer9.toFixed(0);

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let gallons = input / 128;
  let gallonsWhole = Math.floor(gallons);
  let quarts = ((gallons - gallonsWhole) * 4);
  let quartsWhole = Math.floor(quarts);
  let pints = ((quarts - quartsWhole) * 2);
  let pintsWhole = Math.floor(pints);
  let cups = ((pints - pintsWhole) * 2);
  let cupsWhole = Math.floor(cups);
  let ounces = ((cups - cupsWhole) * 8);
  var div=document.getElementById("output7");
  div.innerHTML="Gallons: " + gallonsWhole + "<br>" + "Quarts: " + quartsWhole + "<br>" + "Pints: " + pintsWhole + "<br>" + "Cups: " + cupsWhole + "<br>" + "Fluid Ounces: " + ounces.toFixed(0);

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let tons = input / 32000;
  let tonsWhole = Math.floor(tons);
  let pounds = ((tons - tonsWhole) * 2000);
  let poundsWhole = Math.floor(pounds);
  let ounces2 = ((pounds - poundsWhole) * 16);
  var div=document.getElementById("output8");
  div.innerHTML="Tons: " + tonsWhole + "<br>" + "Pounds: " + poundsWhole + "<br>" + "Ounces: " + ounces2.toFixed(0);

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let dollars = pennies / 100;
  let dollarsWhole = Math.floor(dollars);
  let quarters = ((dollars - dollarsWhole) * 4);
  let quartersWhole = Math.floor(quarters);
  let dimes = ((quarters - quartersWhole) * 2.5);
  let dimesWhole = Math.floor(dimes);
  let nickels = ((dimes - dimesWhole) * 2);
  let nickelsWhole = Math.floor(nickels);
  let penniesWhole = ((nickels - nickelsWhole) * 5);
  var div = document.getElementById("output9");
  div.innerHTML = "Dollars: " + dollarsWhole + "<br>" + "Quarters: " + quartersWhole + "<br>" + "Dimes: " + dimesWhole + "<br>" + "Nickels: " + nickelsWhole + "<br>" + "Pennies: " + penniesWhole.toFixed(0);

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let quarters = amount / 0.25;
  let quartersWhole = Math.floor(quarters);
  let dimes = ((quarters - quartersWhole) * 0.25) / 0.1;
  let dimesWhole = Math.floor(dimes);
  let nickels = ((dimes - dimesWhole) * 0.1) / 0.05;
  let nickelsWhole = Math.floor(nickels);
  let penniesWhole = ((nickels - nickelsWhole) * 5);
  let coins = quartersWhole + dimesWhole + nickelsWhole + penniesWhole;
  var div = document.getElementById("output10");
  div.innerHTML = coins.toFixed(0) + " coins.";
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
