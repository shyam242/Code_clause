const toggleButton = document.getElementById('mode');
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
//   toggleButton.addEventListener("click", () => {
//     // Check the current display value and toggle it
//     if (h1Element.style.display === "none") {
//       h1Element.style.display = "flex"; // Show the element
//       effect.style.display = "none";
//       // document.getElementById(".shyam").style.color="black";
//       // document.querySelector(".like").style.filter="invert(0)";
//     } else {
//       h1Element.style.display = "none"; // Hide the element
//       effect.style.display = "flex";
//       // document.getElementById(".shyam").style.color="white";
//       // document.querySelector(".like").style.filter="invert(1)";
//     }
//   });