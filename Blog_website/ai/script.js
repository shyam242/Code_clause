const likeBtn = document.getElementById('like-btn');
    const likeIcon = document.getElementById('like-icon');
    const likeCount = document.getElementById('like-count');
    let isLiked = false;
    let likes = 0;
    const USERID = {
      name: null,
      identity: null,
      image: null,
      message: null,
      date: null
  }
  
  const userComment = document.querySelector(".usercomment");
  const publishBtn = document.querySelector("#publish");
  const comments = document.querySelector(".comments");
  const userName = document.querySelector(".user");
  const notify = document.querySelector(".notifyinput");
  
      userComment.addEventListener("input", e => {
          if(!userComment.value) {
              publishBtn.setAttribute("disabled", "disabled");
              publishBtn.classList.remove("abled")
          }else {
              publishBtn.removeAttribute("disabled");
              publishBtn.classList.add("abled")
          }
      })
  
      function addPost() {
          if(!userComment.value) return;
          USERID.name = userName.value;
          if(USERID.name === "Anonymous") {
              USERID.identity = false;
              USERID.image = "user-circle-02-Stroke-Rounded.png"
          }else {
              USERID.identity = true;
              USERID.image = "user-circle-02-Stroke-Rounded.png"
          }
  
          USERID.message = userComment.value;
          USERID.date = new Date().toLocaleString();
          let published = 
          `<div class="parents">
              <img src="${USERID.image}">
              <div>
                  <h1>${USERID.name}</h1>
                  <p>${USERID.message}</p>
                  <div class="engagements"><img src="like.png" id="like"><img src="share.png" alt=""></div>
                  <span class="date">${USERID.date}</span>
              </div>    
          </div>`
  
          comments.innerHTML += published;
          userComment.value = "";
          publishBtn.classList.remove("abled")
  
          let commentsNum = document.querySelectorAll(".parents").length;
          document.getElementById("comment").textContent = commentsNum;
  
      }
  
      publishBtn.addEventListener("click", addPost);

    likeBtn.addEventListener('click', async () => {
      isLiked = !isLiked;
      likeIcon.classList.toggle('liked', isLiked);

      // Update the like count
      likes += isLiked ? 1 : -1;
      likeCount.textContent = likes;

      // Send data to the server
      await fetch('/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes })
      });
    });