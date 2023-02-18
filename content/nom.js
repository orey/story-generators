/*---------------------------
   O. Rey - 8 septembre 2022
   ---------------------------*/
'using strict;'

// Fréquence des lettres en français
// e, s,   a,  r, t, i, n, u, l, o, d, c, reste
// 13 12  11  10  9  8  7  6  5  4  3  2   1
const CONSONNES=['b','c','d','f','g','h','j','k','l','m','n','n','n','n','n','n','n','p','q','r','s','t','v','w','x','z','ll','st','rr','ss','nn','mm','ph','kh','ch','sh','pp','qu','tt','ff','gu'];
const CONSONNES2=['b','c','c','d','d','d','f','g','h','j','k','l','l','l','l','l','m','n','p','q','r','r','r','r','r','r','r','r','r','r','s','s','s','s','s','s','s','s','s','s','s','s','t','t','t','t','t','t','t','t','t','v','w','x','z'];
const VOYELLES=['a','a','a','a','a','a','a','a','a','a','a','e','e','e','e','e','e','e','e','e','e','e','e','e','i','i','i','i','i','i','i','i','o','o','o','o','u','u','u','u','u','u','y'];


//======= UTIL FUNCTIONS
function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(nb) {
    return Math.floor(Math.random() * nb);
}

function getRandomCeiling(nb) {
    return Math.ceil(Math.random() * nb);
}

function dice(nb) {
    return Math.floor(Math.random() * nb) + 1;
}


//======= UTIL FUNCTIONS
function testGetRandom(nb, f=getRandom, startswith=0) {
    let tab = new Array(nb).fill(0);
    const THRESHOLD = 100000;
    for (let i=0;i<THRESHOLD;i++)
        tab[f(nb)-startswith]++;
    for (let j=0;j<tab.length;j++)
        process.stdout.write(String(j + startswith).padStart(2, '0') + "|");
    process.stdout.write('\n');
    for (let e of tab)
        process.stdout.write(String(Math.round(e/THRESHOLD*100)).padStart(2, '0') + "|");
    process.stdout.write('\n');
}

function getConsonne(index=2) {
    if (index==2) {
        let nb = CONSONNES2.length;
        return CONSONNES2[getRandom(nb)];
    }
    let nb = CONSONNES.length;
    return CONSONNES[getRandom(nb)];
}

function getVoyelle()  {
    let nb = VOYELLES.length;
    return  VOYELLES[getRandom(nb)];
}

function generate(s, index=2) {
    let temp = "";
    for (let c of s) {
        switch(c){
        case 'C':
            temp += getConsonne(index);
            break;
        case 'V':
            temp += getVoyelle();
            break;
        case ' ':
            temp += " ";
            break;
        default:
            temp += c;
            break;
        }
    }
    return temp;
}

function generateNom(pattern, index=2){
    return capFirst(generate(pattern, index));
}

function generateNoms(nb, pattern, index=2){
    let tab = [];
    for (let i=0;i<nb;i++)
        tab[i] = capFirst(generate(pattern,index));
    return tab;
}


function usage(){
    console.log("Usage: node nom.js [CVCVCVVVVCCC]");
}

function testAllRandom() {
    console.log("Test avec 30");
    testGetRandom(30);
    console.log("Test avec 22");
    testGetRandom(22);
    console.log("Test avec 30 ceiling");
    testGetRandom(30, getRandomCeiling);
    console.log("Test avec 22 ceiling");
    testGetRandom(22, getRandomCeiling);
    console.log("Test dice 4");
    testGetRandom(4, dice, 1);
    console.log("Test dice 6");
    testGetRandom(6, dice, 1);
    console.log("Test dice 8");
    testGetRandom(8, dice, 1);
    console.log("Test dice 10");
    testGetRandom(10, dice, 1);
    console.log("Test dice 12");
    testGetRandom(12, dice, 1);
    console.log("Test dice 20");
    testGetRandom(20, dice, 1);
}


function main(){
    var arguments = process.argv ;  
    console.log(arguments) ;
    if (arguments.length == 2) {
        usage();
        testAllRandom();
    }
    else {
        generateNoms(100,arguments[2]);
        console.log("---");
        generateNoms(100,arguments[2], 1);
    }
}

//main();


/*--------------------------------------
 * Exports
 *--------------------------------------*/
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        generateNom,
        generateNoms,
    }
}
