import { storePostData } from './cardStorage.js';
import { renderPostCard } from './cardRenderer.js';
import { validateFormData } from './validation.js';

export const handleFormSubmission=(event) =>{
  event.preventDefault();
  let postData = collectFormData();

  if (!validateFormData(postData)) return;

  storePostData(postData);
  renderPostCard(postData);
  resetForm();
}

const collectFormData = () => {
  let postData = {};
  let formFields = document.querySelectorAll("#postForm input, #postForm textarea");

  formFields.forEach((field) => {
    postData[field.id] = field.value.trim();
  });

  return postData;
}

function resetForm() {
  document.getElementById("postForm").reset();
}
