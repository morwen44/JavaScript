let numbers = [12, 45, 7, 33, 22, 14, 49, 27, 5, 38];
let sumTotal = numbers.reduce((sum, number) => sum + number, 0);

console.log(sumTotal);

let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Números pares:", evenNumbers);

let oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log("Números nones:", oddNumbers);

let people = [
  ["Juan", "Gómez", "Martínez"],
  ["Ana", "Pérez", "López"],
  ["Carlos", "Rodríguez", "García"],
  ["María", "Fernández", "Sánchez"],
  ["Luis", "Hernández", "Torres"],
];

let firstNames = people.map((nombreCompleto) => nombreCompleto[0]);
console.log(firstNames);

let wholeNames = people.map((nombreCompleto) => nombreCompleto.join(" "));
console.log(wholeNames);

let users = [
  {
    name: "Juan",
    lastname: "Pérez",
    age: 25,
    hobbies: ["leer", "correr"],
    country: "México",
  },
  {
    name: "Ana",
    lastname: "García",
    age: 30,
    hobbies: ["viajar", "pintar", "nadar"],
    country: "Argentina",
  },
  {
    name: "Carlos",
    lastname: "López",
    age: 45,
    hobbies: ["cantar"],
    country: "Chile",
  },
  {
    name: "María",
    lastname: "Fernández",
    age: 22,
    hobbies: ["leer", "correr", "bailar"],
    country: "Colombia",
  },
  {
    name: "Luis",
    lastname: "Gómez",
    age: 35,
    hobbies: ["jugar fútbol", "viajar"],
    country: "México",
  },
  {
    name: "Sofía",
    lastname: "Rodríguez",
    age: 28,
    hobbies: ["cocinar", "leer"],
    country: "Chile",
  },
  {
    name: "José",
    lastname: "Sánchez",
    age: 40,
    hobbies: ["nadar", "escribir"],
    country: "Argentina",
  },
  {
    name: "Laura",
    lastname: "Martínez",
    age: 26,
    hobbies: ["pintar", "cantar"],
    country: "México",
  },
  {
    name: "Miguel",
    lastname: "Hernández",
    age: 33,
    hobbies: ["correr", "jugar fútbol"],
    country: "Colombia",
  },
  {
    name: "Lucía",
    lastname: "Torres",
    age: 29,
    hobbies: ["viajar", "bailar"],
    country: "Chile",
  },
];

let usersNames = users.map((usuario) => usuario.name + " " + usuario.lastname);

console.log(usersNames);

const averageAge = (listaUsuarios) => {
  let usersAges = listaUsuarios.map((usuario) => usuario.age);
  let age = usersAges.reduce((sum, number) => sum + number, 0);
  let average = age / users.length;
  return average;
};

let promedioEdad = averageAge(users);
console.log(promedioEdad);

const countryFilter = (listaUsuarios, pais) => {
  let namesByCountry = listaUsuarios.filter(
    (usuario) => usuario.country.toLowerCase() === pais.toLowerCase()
  );
  let listResult = namesByCountry.map((usuario) => usuario.name);
  return listResult;
};

let country = "Chile";
let countryList = countryFilter(users, country);
console.log(countryList);

const hobbiesFilter = (listaUsuarios, hobby) => {
  let namesByHobby = listaUsuarios.filter((usuario) =>
    usuario.hobbies.includes(hobby)
  );
  let listResult = namesByHobby.map((usuario) => usuario.name);
  return listResult;
};

let hobby = "viajar";
let listByHobby = hobbiesFilter(users, hobby);
console.log(listByHobby);

let allHobbies = users.map((user) => user.hobbies).flat();

let uniqueHobbies = [...new Set(allHobbies)];

console.log("Hobbies únicos:", uniqueHobbies);

const listUsersByHobby = (listaUsuarios) => {
  let allHobbies = listaUsuarios.map((user) => user.hobbies).flat();
  let uniqueHobbies = [...new Set(allHobbies)];
  let hobbyObject = {};
  uniqueHobbies.forEach((hobby) => {
    hobbyObject[hobby] = listaUsuarios.filter((user) =>
      user.hobbies.includes(hobby)
    );
  });
  return hobbyObject;
};

console.log(listUsersByHobby(users));
