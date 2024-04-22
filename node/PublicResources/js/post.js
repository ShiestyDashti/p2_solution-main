const postButton = document.getElementById("post-btn");
const inputElement = document.getElementById("input-post");
const displayElement = document.getElementById("displayText");
const likeCount = document.querySelector('.post-rating:nth-child(1) .post-rating-count');
const dislikeCount = document.querySelector('.post-rating:nth-child(2) .post-rating-count');

postButton.addEventListener("click", function() {
    let userInput = inputElement.value;
    console.log("slay");
    displayElement.textContent = userInput;
});

const likeButton = document.querySelector('.post-rating:nth-child(1)');
const dislikeButton = document.querySelector('.post-rating:nth-child(2)');


let likes = 0;
let dislikes = 0;
let hasLiked = false;
let hasDisliked = false;

likeButton.addEventListener('click', () => {
    if (!hasLiked) {
        likes++; 
        likeCount.textContent = likes; 
        hasLiked = true; 
        if (hasDisliked) {
            dislikes--; 
            dislikeCount.textContent = dislikes; 
            hasDisliked = false; 
        }
    }
});

dislikeButton.addEventListener('click', () => {
    if (!hasDisliked) {
        dislikes++; 
        dislikeCount.textContent = dislikes; 
        hasDisliked = true; 
        if (hasLiked) {
            likes--;
            likeCount.textContent = likes; 
            hasLiked = false; 
        }
    }
});
