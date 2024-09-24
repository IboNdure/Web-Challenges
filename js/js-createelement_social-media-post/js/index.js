console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);
const addPost = () => {
  // Create the post container
  const postContainer = document.createElement("div");
  postContainer.classList.add("post");

  // Create post content (text or image)
  const postContent = document.createElement("p");
  postContent.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  // Create the like button
  const likeButton = document.createElement("button");
  likeButton.textContent = "♥ Like";
  likeButton.classList.add("post__button");
  likeButton.setAttribute("data-js", "like-button");

  // Add event listener to the like button
  likeButton.addEventListener("click", handleLikeButtonClick);

  // Append the post content and like button to the post container
  postContainer.appendChild(postContent);
  postContainer.appendChild(likeButton);

  // Append the post container to the body (or a specific section)
  document.body.appendChild(postContainer);
};

// Call the function to add a new post
addPost();
// Exercise:
// Use document.createElement() and append another social media post to the body.
