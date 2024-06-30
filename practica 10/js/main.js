import { handleFormSubmission } from "./formHandler.js";
import { validateAbstractLength, validateContentLength } from "./validation.js";

let postForm = document.getElementById("postForm");
let abstract = document.getElementById("abstract");
let content = document.getElementById("content");

postForm.addEventListener("submit", handleFormSubmission);

abstract.addEventListener("input", validateAbstractLength);

content.addEventListener("input", validateContentLength);
