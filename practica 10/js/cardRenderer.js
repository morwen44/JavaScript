export const renderPostCard = ({ imgUrl, title, abstract, content }) => {
  let previewCardContainer = document.getElementById("previewCard");

  let card = document.createElement("div");
  card.classList.add("card", "mb-3");

  let cardRow = document.createElement("div");
  cardRow.classList.add("row", "g-0");

  let imgCol = document.createElement("div");
  imgCol.className = "col-md-4";

  let img = document.createElement("img");
  img.classList.add("img-fluid", "rounded-start", "w-100", "post-img");
  img.src = imgUrl;
  img.alt = "Image";

  let textCol = document.createElement("div");
  textCol.className = "col-md-8";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = title;

  let cardAbstract = document.createElement("p");
  cardAbstract.className = "card-text";
  cardAbstract.textContent = abstract;

  let cardContent = document.createElement("p");
  cardContent.className = "card-text";
  cardContent.textContent = content;

  cardBody.append(cardTitle);
  cardBody.append(cardAbstract);
  cardBody.append(cardContent);

  textCol.append(cardBody);
  imgCol.append(img);

  cardRow.append(imgCol);
  cardRow.append(textCol);

  card.append(cardRow);
  previewCardContainer.append(card);
  //use prepend if I want the newest one to appear on top
};
