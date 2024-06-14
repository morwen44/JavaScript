

let phrase =
  "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.";

let phraseLength = phrase.length;

console.log(`Cantidad de caracteres = ${phraseLength}`);

for (let i = 0; i < phrase.length; i++) {
  console.log(phrase[i]);
}

let vowelsQty = 0;
for (let i = 0; i < phrase.length; i++) {
  phrase.toLowerCase;
  switch (phrase[i]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      vowelsQty++;
      break;
  }
}
console.log(vowelsQty);

let cnsnntsQty = 0;
for (let i = 0; i < phrase.length; i++) {
  phrase.toLowerCase;
  switch (phrase[i]) {
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
    case "h":
    case "i":
    case "j":
    case "k":
    case "l":
    case "m":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
      cnsnntsQty++;
      break;
  }
}
console.log(cnsnntsQty);
