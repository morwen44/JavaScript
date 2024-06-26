let userForm = document.getElementById("user-form");
let formFields = userForm.querySelectorAll(".form-control");
let socialsContainer = document.getElementById("socials-container");
let addSocialBtn = document.getElementById("addSocialBtn");

let users = [];

const getUserData = () => {
  let userData = {};
  formFields.forEach((field) => {
    let userProperty = field.id;
    let userValue = field.value;
    userData[userProperty] = userValue;
  });

  let socialsInputs = socialsContainer.querySelectorAll(".social-input");
  userData.socials = [];

  socialsInputs.forEach((socialInput) => {
    let socialSelect = socialInput.querySelector(".social-select");
    let handleInput = socialInput.querySelector(".social-handle");

    let socials = socialSelect.value;
    let handle = handleInput.value;

    if (socials && handle) {
      userData.socials.push({
        platform: socials,
        handle: handle,
      });
    }
  });
  users.push(userData);
};

const handleSubmit = (event) => {
  event.preventDefault();
  getUserData();
  clearCardsContainer();
  createCard();
  userForm.reset();
  clearSocialInputs();
};

const clearCardsContainer = () => {
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
};

const clearSocialInputs = () => {
  while (socialsContainer.firstChild) {
    socialsContainer.removeChild(socialsContainer.firstChild);
  }
};

userForm.addEventListener("submit", handleSubmit);

addSocialBtn.addEventListener("click", () => {
  if (socialsContainer.children.length < 5) {
    let socialInputGroup = document.createElement("div");
    socialInputGroup.classList.add("social-input", "mb-2");

    let socialSelect = document.createElement("select");
    socialSelect.classList.add("form-control", "social-select", "mb-3");

    const options = [
      { value: "", text: "Select Social Media" },
      { value: "GitHub", text: "GitHub" },
      { value: "Frontend Mentor", text: "Frontend Mentor" },
      { value: "LinkedIn", text: "LinkedIn" },
      { value: "Twitter", text: "Twitter" },
      { value: "Instagram", text: "Instagram" },
    ];

    options.forEach((optionData) => {
      let option = document.createElement("option");
      option.value = optionData.value;
      option.textContent = optionData.text;
      socialSelect.append(option);
    });

    socialInputGroup.append(socialSelect);

    let handleInput = document.createElement("input");
    handleInput.type = "text";
    handleInput.classList.add("form-control", "social-handle", "mb-3");
    handleInput.placeholder = "Enter Handle";
    socialInputGroup.append(handleInput);

    let removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.classList.add("btn", "btn-danger", "ms-2");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      socialInputGroup.remove();
    });
    socialInputGroup.append(removeBtn);

    socialsContainer.append(socialInputGroup);
  } else {
    alert("You can add up to 5 social media handles.");
  }
});

let cardsContainer = document.getElementById("cards-container");

const createCard = () => {
  users.forEach((user) => {
    let newCard = document.createElement("div");
    newCard.classList.add("col-md-6", "col-sm-12", "m-4");
    let cardBody = document.createElement("div");
    cardBody.classList.add(
      "card",
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "text-center",
      "p-4"
    );

    let photo = document.createElement("img");
    photo.src = user.photo;
    photo.alt = "Profile Photo";
    photo.classList.add("photo", "rounded-circle", "mb-3");
    cardBody.append(photo);

    let nameElement = document.createElement("h4");
    nameElement.textContent = user.name;
    nameElement.classList.add("fw-bold", "mb-3", "text-white");
    cardBody.append(nameElement);

    let locationElement = document.createElement("p");
    locationElement.textContent = `${user.city}, ${user.country}`;
    locationElement.classList.add("mb-3", "fw-bold", "location");
    cardBody.append(locationElement);

    let bioElement = document.createElement("p");
    bioElement.textContent = `"${user.bio}"`;
    bioElement.classList.add("fst-italic", "mb-3");
    cardBody.append(bioElement);

    if (user.socials && user.socials.length > 0) {
      let socialsContainer = document.createElement("div");
      socialsContainer.classList.add(
        "mb-3",
        "d-grid",
        "gap-2",
        "col-11",
        "mx-auto"
      );

      user.socials.forEach((social) => {
        let socialElement = document.createElement("button");
        socialElement.classList.add(
          "btn",
          "text-white",
          "social-button",
          "fw-bold",
          "w-100"
        );
        socialElement.textContent = `${social.platform}`;
        socialsContainer.append(socialElement);
      });

      cardBody.append(socialsContainer);
    }

    newCard.append(cardBody);

    cardsContainer.append(newCard);
  });
};
