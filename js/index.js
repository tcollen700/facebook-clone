const postTextElements = document.querySelectorAll('.image-post-text');

postTextElements.forEach(postText => {
    postText.addEventListener('click', () => {
        if (postText.classList.contains("image-post-text")) {
            postText.classList.add("post-text");
            postText.classList.remove("image-post-text");
        } else {
            postText.classList.add("image-post-text");
            postText.classList.remove("post-text");
        }
    });
});

/**let postText = document.querySelectorAll('.image-post-text');

postText.addEventListener('click', () => {
    if (postText.classList.contains("image-post-text")) {
        postText.classList.add("post-text");
        postText.classList.remove("image-post-text");
    } else {
        postText.classList.add("image-post-text");
        postText.classList.remove("post-text");
    }
});**/