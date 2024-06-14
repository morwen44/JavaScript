let phrase =
  "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.";

let phraseLength = phrase.length;

console.log(`Cantidad de caracteres = ${phraseLength}`);

for (let i = 0; i < phrase.length; i++) {
  let phraseCharacter = phrase[i];
  console.log(phraseCharacter);
}
phrase = phrase.toLowerCase();

let vowelRegex = /[aeiouáéíóúü]/g;
let consonantRegex = /[bcdfghjklmnñpqrstvwxyz]/g;

let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < phrase.length; i++) {
  let char = phrase.charAt(i);

  if (vowelRegex.test(char)) {
    vowelCount++;
  }

  if (consonantRegex.test(char)) {
    consonantCount++;
  }
}

console.log("Number of vowels: " + vowelCount);
console.log("Number of consonants: " + consonantCount);

let vowels = phrase.match(vowelRegex);
let consonants = phrase.match(consonantRegex);

let vowelCount2 = vowels.length;
let consonantCount2 = consonants.length;

console.log(vowels);
console.log(consonants);
console.log("Number of vowels: " + vowelCount2);
console.log("Number of consonants: " + consonantCount2);
