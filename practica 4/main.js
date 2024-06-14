let phrase =
  "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.";

const countChars = (text) => {
  let phraseLength = phrase.length;
  return phraseLength;
};

let charTotal = countChars(phrase);
console.log(`Characters = ${charTotal}`);

const PhraseChar = (phraseToChar) => {
  for (let i = 0; i < phraseToChar.length; i++) {
    let phraseCharacter = phrase[i];
    console.log(phraseCharacter);
  }
};

PhraseChar(phrase);

let vowelRegex = /[aeiouáéíóúü]/g;
let consonantRegex = /[bcdfghjklmnñpqrstvwxyz]/g;

const countVowels = (phraseToCount) => {
  let vowelCount = 0;
  let phraseLower = phraseToCount.toLowerCase();
  for (let i = 0; i < phraseLower.length; i++) {
    let char = phraseLower[i];
    if (vowelRegex.test(char)) {
      vowelCount++;
    }
  }
  let vowelResult = `Vowels = ${vowelCount}`;
  return vowelResult;
};

const countConsonants = (phraseToCount) => {
  let consonantCount = 0;
  let phraseLower = phraseToCount.toLowerCase();
  for (let i = 0; i < phraseLower.length; i++) {
    let char = phraseLower[i];
    if (consonantRegex.test(char)) {
      consonantCount++;
    }
  }
  let consonantResult = `Consonants = ${consonantCount}`;
  return consonantResult;
};

let vowels = countVowels(phrase);
let consonants = countConsonants(phrase);

console.log(vowels);
console.log(consonants);
