const navLinks = document.querySelectorAll('.nav a');
const imageContainer = document.querySelector('.image-container');

// Select the first navigation link's image data
const firstLink = navLinks[0];
const firstImageData = firstLink.getAttribute('data-image');

// Create the default images
const img1 = document.createElement('img');
const img2 = document.createElement('img');
img1.src = `./images/${firstImageData}.jpg`;
img2.src = `./images/${firstImageData}_related.jpg`; // adjust the related image path as needed
imageContainer.innerHTML = '';
imageContainer.appendChild(img1);
imageContainer.appendChild(img2);

navLinks.forEach((link) => {
  link.addEventListener('mouseover', (e) => {
    const imageData = e.target.getAttribute('data-image');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    img1.src = `./images/${imageData}.jpg`;
    img2.src = `./images/${imageData}_related.jpg`; // adjust the related image path as needed
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img1);
    imageContainer.appendChild(img2);
  });
});

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
      USERID.image = "anonymous.png"
  }else {
      USERID.identity = true;
      USERID.image = "user.png"
  }

  USERID.message = userComment.value;
  USERID.date = new Date().toLocaleString();
  let published = 
  `<div class="parents">
      <img src="./images/${USERID.image}">
      <div>
          <h1>${USERID.name}</h1>
          <p>${USERID.message}</p>
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