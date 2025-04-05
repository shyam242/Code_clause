const commentInput = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const commentsDiv = document.querySelector(".comments");
const userNameInput = document.querySelector(".user");
const commentCount = document.querySelector("#comment");

window.addEventListener("load", () => {
  const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
  savedComments.forEach(comment => addCommentToDOM(comment.name, comment.text));
  commentCount.innerText = savedComments.length;
});

commentInput.addEventListener("input", () => {
  publishBtn.disabled = commentInput.value.trim() === "";
  publishBtn.classList.toggle("abled", commentInput.value.trim() !== "");
});

publishBtn.addEventListener("click", () => {
  const name = userNameInput.value.trim() || "Anonymous";
  const comment = commentInput.value.trim();

  if (!comment) return;

  addCommentToDOM(name, comment);
  saveComment(name, comment);

  commentInput.value = "";
  publishBtn.disabled = true;
  publishBtn.classList.remove("abled");
});

function addCommentToDOM(name, comment) {
  const commentBox = document.createElement("div");
  commentBox.classList.add("parents");
  commentBox.innerHTML = `<h1><strong>${name}</strong>: ${comment}</h1>`;
  commentsDiv.appendChild(commentBox);

  commentCount.innerText = commentsDiv.childElementCount;
}

function saveComment(name, comment) {
  const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
  savedComments.push({ name, text: comment });
  localStorage.setItem("comments", JSON.stringify(savedComments));
}

// Like Button
const likeIcon = document.querySelector("#like-icon");
const likeCount = document.querySelector("#like-count");

likeIcon.addEventListener("click", () => {
  likeIcon.classList.toggle("liked");
  let count = parseInt(likeCount.textContent);
  likeCount.textContent = likeIcon.classList.contains("liked") ? count + 1 : count - 1;
});
