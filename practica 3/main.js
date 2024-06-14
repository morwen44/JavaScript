const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

let randomNumber = getRandomInt(1, 6);
let randomNumber2 = getRandomInt(1, 6);

const rollingDice = (diceNumber) => {
  let points;
  switch (diceNumber) {
    case 1:
      points = 5;
      break;
    case 2:
      points = 10;
      break;
    case 5:
      points = 15;
      break;
    default:
      points = 0;
  }

  return points;
};

let rollingDiceResult = rollingDice(randomNumber);

console.log(
  `You rolled a ${randomNumber}. You get ${rollingDiceResult} points.`
);

const rollingTwice = (diced) => {
  let evenOrnot = diced % 2;
  if (evenOrnot === 0 && diced <= 4) {
    return "You won!";
  } else if (evenOrnot !== 0 && diced >= 2) {
    return "You lost!";
  } else {
    return "Roll again";
  }
};

let rollingTwiceResult = rollingTwice(randomNumber2);
console.log(`You rolled a ${randomNumber2}. ${rollingTwiceResult}`);

/*Para determinar si una frase es larga o corta debo saber
la definición de largo o corto, en este casao largo >=20
corto <20
Para evaluar si un texto se considera largo o corta debo saber la longitud 
de cada texto, al obtener este numero debo comparar si es >=20 o <20
si es >=20 es largo
si es <20 es corto*/

const phrases = (text) => {
  let textCharNum = text.length;
  if (textCharNum >= 20) {
    return "Long phrase";
  } else if (textCharNum < 20) {
    return "Short phrase";
  }
};

let phrasesResult = phrases("Daydreams perpetual planner");
console.log(phrasesResult);

/*
sabiendo que gris = equipo 1
negro = 2
gris = 3
otro color = no juega
Para sortear jugadores por color debo saber el color de su uniforme*/

const teams = (color) => {
  let team;
  switch (color) {
    case "gray":
      team = "Team 1";
      break;

    case "black":
      team = "Team 2";
      break;

    case "blue":
      team = "Team 3";
      break;
    default:
      team = "No team";
  }
  return `Your color is ${color}. Your team is ${team}`;
};

let teamsResult = teams("red");

console.log(teamsResult);

/*
tengo dos valores, porque son dos dados
para saber el resultado de la tirada debo sumar esos dos valores
si el resultado de la tirada es igual a 7, 11 o 3, se gana
debo comparar la suma de los dos dados con esos valores
si el valor del primer dado y el valor del segundo dado son iguales
o si se obtiene un numero divisible entre 3 que no sea 3, se obtiene una tirada extra
*/

const twoDices = (dado1, dado2) => {
  let sumaDados = dado1 + dado2;
  let entreTres = sumaDados % 3;
  if (sumaDados === 7 || sumaDados === 11 || sumaDados === 3) {
    return `You rolled a ${sumaDados}. You win!`;
  } else if (dado1 === dado2 || (entreTres === 0 && sumaDados !== 3)) {
    return `You rolled a ${dado1} and a ${dado2}. Extra roll`;
  } else {
    return `You rolled a ${sumaDados}. You lost!`;
  }
};

let twoDicesResult = twoDices(randomNumber, randomNumber2);
console.log(twoDicesResult);
