//Data una stringa, restituire la versione in alfabeto farfallino
//(le vocali devono essere trasformate in questo modo: a -> afa, e -> efe, i -> ifi, o -> ofo, u- > ufu)

const word = prompt("Inserisci una parola: ");
const vowels = "aeiou";
let newWord = "";

for (letter of word) {
    //console.log(letter);
    for (vowel of vowels) {
        //console.log(vowel);
        if (letter === vowel) {
            letter += `f${letter}`;
        }
    }
    newWord += letter;
}

console.log(newWord);