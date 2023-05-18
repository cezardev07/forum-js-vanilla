import { App } from "../../app.js";

const api_avatar = "https://api.dicebear.com/6.x/fun-emoji/svg?seed=";

const formName = document.querySelector(".create-post-feed input");
const formPost = document.querySelector(".create-post-feed");

const txt = document.querySelector("textarea");

export const eventCreatePost = (database, btn) => {

    btn.addEventListener("click", () => {
        const value = txt.value;
        const nome = formName.value;

        if(value !== ""){
            const letras = [];

            for(let letra of value){
                if(letra === "\n"){
                    letra = "<br>";
                };
                letras.push(letra);
            }
            const string = letras.join("");
            console.log(string);
            
            const article = document.querySelectorAll("article");

            database.push({
                usuario:{
                    nome:nome,
                    senha:123,
                    avatar: api_avatar + nome,
                    post:string
                }
            });

            article.forEach(prevPost => {
                prevPost.remove();
            });

            txt.value = "";
            formName.value = "";
            formPost.classList.add("none");
            
            App();
        } 
    });
};