let phrase = "Si creer no puedes, es por eso que fallas";

/*1. reemplazar un substring por sus coincidencias
2. invertir la frase
3. cantidad de palabras de la frase
4. conocer cantidad de palabras cortas y largas en la frase
corta es <5*/

let part = phrase.substr(4, 1);

let regexReplace = new RegExp(part, "g");

let replace = phrase.replace(regexReplace, "k");

console.log(replace);

let words = phrase.split(" ");

let invertedPhrase = words.slice().reverse().join(" ");

console.log(invertedPhrase);

let wordsQty = words.length;

console.log(wordsQty);

const shortWords = (phraseArray) => {
  let shortCount = 0;
  for (i = 0; i < wordsQty; i++) {
    let word = phraseArray[i];
    let chars = word.length;
    if (chars < 5) {
      shortCount++;
    }
  }
  return shortCount;
};

const longWords = (phraseArray) => {
  let longCount = 0;
  for (i = 0; i < wordsQty; i++) {
    let word = phraseArray[i];
    let chars = word.length;
    if (chars >= 5) {
      longCount++;
    }
  }
  return longCount;
};

let shortCounter = shortWords(words);
let longCounter = longWords(words);

console.log(
  `Hay ${shortCounter} palabras cortas y ${longCounter} palabras largas en la frase.`
);
