const formPost = document.querySelector(".create-post-feed");

export const open = () => {

    const btnPost = document.querySelector(".create-post button");

    btnPost.onclick = () => {
        formPost.classList.remove("none");
    };

};
