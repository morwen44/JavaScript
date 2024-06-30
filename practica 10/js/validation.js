export const validateAbstractLength = () => {
  let abstractInput = abstract.value.trim();
  let abstractWords = abstractInput.split(/\s+/);
  let abstractLength = abstractWords.length;
  let abstractHelp = document.getElementById("abstractHelp");

  if (abstractLength > 10) {
    abstractHelp.textContent = "Too long!";
    abstractHelp.classList.add("text-danger");
  } else {
    abstractHelp.textContent = `${abstractLength}/10 words`;
    abstractHelp.classList.remove("text-danger");
  }
};

export const validateContentLength = () => {
  let contentInput = content.value.trim(); 
  let contentWords = contentInput.split(/\s+/);
  let contentLength = contentWords.length;

  if (contentLength < 10) {
    content.setCustomValidity("Content should be at least 10 words.");
  } else {
    content.setCustomValidity("");
  }

  content.reportValidity();
};

export const validateFormData = ({ abstract, content }) => {
  let abstractWords = abstract.split(/\s+/);
  let contentWords = content.split(/\s+/);
  let abstractError = document.getElementById("abstractError");


  if (abstractWords.length > 10) {
    abstractError.classList.add("d-block");
    let abstractErrorMessage = document.createElement("p");
    let absErrorMsgText = "Abstract should be no longer than 10 words.";
    abstractErrorMessage.textContent = absErrorMsgText;
    abstractError.appendChild(abstractErrorMessage);
    return false;
  } else {
    abstractError.classList.remove("d-block");
  }

  if (contentWords.length < 10) {
    return false;
  }

  return true;
};
