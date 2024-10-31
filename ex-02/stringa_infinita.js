//Data una stringa con un pattern ripetuto (es. ABCDE), ipoteticamente infinita
//restituire le lettere racchiuse fra due indici (es. 13 e 16) inclusi.

const pattern = prompt("Inserisci un pattern da ripetere (es. ABCDE): ");
const index1 = 13, index2 = 16;

const patternArray = [...pattern];
let infinitePatternArray = [];

//console.log(patternArray.length);

for (let i = 0, j = 0; j <= index2; i++, j++) {
    if (i === patternArray.length) { i = 0 };
    infinitePatternArray[j] = patternArray[i];
}

//console.log(infinitePatternArray);

for (let i = index1; i <= index2; i++) {
    console.log(infinitePatternArray[i]);
}