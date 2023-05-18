import { database } from "./database/database.js";
import { getPost } from "./get_post/get_post.js";
import { create_post } from "./create_post/create_post.js";

const db = database();

export const App = () => {
    getPost(db);
    const posts = document.querySelectorAll(".post");
    
    posts.forEach(post => {
        const getHt = window.getComputedStyle(post).height;

        if(getHt.split("px")[0] < 295){
            post.classList.add("center")
        };
    });

    create_post(db);
};