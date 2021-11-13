/**********************************************
 * One table DB
 * Author: rey.olivier@gmail.com
 * Licence: GNU GPL v3
 * Date: November 2021
 * This is a simple storage system aiming at 
 * storing one table and emulating simple graph
 * behavior
 * expected file extension is "otdb"
 ***********************************************/
"use strict";
const fs = require('fs')

const SEP = '|';
const COMMENT = '//';

let DB = [];



function readDatabase(filename, verbose=false) {
    try {
        // read contents of the file
        const data = fs.readFileSync(filename, 'UTF-8');

        // split the contents by new line
        const lines = data.split(/\r?\n/);
        
        let i = 0;
        // print all lines
        lines.forEach((line) => {
            if ((line.startsWith(COMMENT)) && verbose) 
                console.log("Excluding comment:\n%s",line);
            else if ((line.trim == '') && verbose)
                console.log("Found blank line. Skipping...");
            else {
                let tab = line.split(SEP);
                // line is supposed to be a triple
                if (tab.length != 3) 
                    console.log("Malformed line (not 3 separators).\n%s\nSkipping...", line);
                else {
                    //console.log(tab);
                    console.log("Line: %s - %s - %s", tab[0], tab[1], tab[2]);
                    DB[i] = tab;
                    i += 1;
                }
            }
            console.log(DB);
        });
    }
    catch (err) {
        console.error(err);
    }
}

function query(subject, predicate, object) {

}


/*****************************************/
function test() {
    readDatabase("data.otdb", true);
}

test()

/*****************************************/

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        test,
    }
}


