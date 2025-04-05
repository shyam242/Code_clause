// Get the button and set up event listener
const toggleButton = document.getElementById('mode');
const h1Element = document.querySelector("h1");
const effect = document.querySelector(".neon-effect");
const one = document.querySelector(".one");
// Check and apply the user's theme preference from localStorage
if (localStorage.getItem('mode') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = '☀️';
}

// Toggle theme and save the preference
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');

  // Update button text
  toggleButton.textContent = isDarkMode
    ? '☀️'
    : '🌙';

  // Save the theme preference
  localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
});
//adding event listener to the Home text//
toggleButton.addEventListener("click", () => {
  // Check the current display value and toggle it
  if (h1Element.style.display === "none") {
    h1Element.style.display = "flex"; // Show the element
    effect.style.display = "none";
    // document.getElementById(".shyam").style.color="black";
    // document.querySelector(".like").style.filter="invert(0)";
  } else {
    h1Element.style.display = "none"; // Hide the element
    effect.style.display = "flex";
    // document.getElementById(".shyam").style.color="white";
    // document.querySelector(".like").style.filter="invert(1)";
  }
});
// let likecount=0;
// function incrementLikes(){
//   likecount++;
//   document.getElementsByClassName(".likecount").textContent=likecount;
// }
// adding event listener to the blog//
// one.addEventListener("click", () => {
//   fetch("http://127.0.0.1:3000/one.html")
// })
function redirect(){
  window.location.href = "http://127.0.0.1:3000/one.html";
}
const blogs = [
  "AI Classroom",
  "Web Development",
  "Eco-Friendly Travel",
  "EEESOC: Society or Family ?",
  "Riding High: Biking Adventures for Thrill Seekers",
  "Game On: Sports for Everyone"
];

function searchBlog() {
  let input = document.getElementById("search").value.trim().toLowerCase();
  let messageDiv = document.getElementById("message");

  if (input === "") {
      messageDiv.innerHTML = "";
      return;
  }

  let found = blogs.find(blog => blog.toLowerCase() === input);

  if (found) {
      messageDiv.innerHTML = `<div class="result">✅ Found: <b>${found}</b></div>`;
  } else {
      messageDiv.innerHTML = `<div class="error">❌ Oops! No blog found. Try another keyword! 🚀</div>`;
  }
}