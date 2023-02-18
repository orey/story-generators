/**********************************************
 * generate.js
 * Author: rey.olivier@gmail.com
 * Licence: GNU GPL v3
 * Date: Février 2023
 ***********************************************/
"use strict";

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generate(list1, list2){
    return capFirst(list1[getRandomInt(0, list1.length + 1)])
        + " "
        + capFirst(list2[getRandomInt(0, list2.length + 1)]);
}



console.log(generate());


