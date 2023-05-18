import { eventCreatePost } from "./event-create-post/event-create-post.js";

export const create_post = (database) => {

    const btn = document.querySelector(".create-post-feed button");

    return eventCreatePost(database, btn);
};