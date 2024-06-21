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

const getNameAge = (usersArray) => {
  let usersList = document.createElement("ul");
  let nameAgeList = usersArray.map((user) => `${user.name} -- ${user.age}`);
  nameAgeList.forEach((element) => {
    let user = document.createElement("li");
    let userText = document.createTextNode(element);
    user.append(userText);
    usersList.append(user);
  });
  document.getElementById("userListContainer").appendChild(usersList);
};

getNameAge(users);

/*Lista de paises*/
const getCountries = (usersArray) => {
  let countriesList = document.createElement("ul");

  let allCountries = usersArray.map((user) => user.country).flat();
  let uniqueCountries = [...new Set(allCountries)];
  uniqueCountries.forEach((element) => {
    let country = document.createElement("li");
    let countryText = document.createTextNode(element);
    country.append(countryText);
    countriesList.append(country);
  });
  document.getElementById("countriesList").appendChild(countriesList);
};

getCountries(users);
