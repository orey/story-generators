/**********************************************
 * generate.js
 * Author: rey.olivier@gmail.com
 * Licence: GNU GPL v3
 * Date: Février 2023
 ***********************************************/
"use strict";

const Adj  = require("./adjectifs.js");
const Rand = require("./random.js");
const Nom  = require("./nom.js");

function capFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function generate(n){
    let tab = Rand.chooseInList(Adj.ADJECTIFS, n);
    let str = "";
    for (let i=0;i<n;i++)
        str += capFirst(tab[i]) + " ";
    return str;
}

console.log("---");
console.log(generate(1));
console.log("---");
console.log(generate(5));
console.log("---");
console.log(generate(10));
console.log("---");

console.log(Nom.generateNoms(3, "CVCV"));
console.log("---");
console.log(Nom.generateNoms(3, "VCCV CVV"));
console.log("---");
console.log(Nom.generateNoms(2, "CVC VVCV CVCVV"));
console.log("---");



