const main = document.querySelector(".posts");

export const getPost = (database) => {
    database.forEach(usuario => {
        const article = document.createElement("article");
        article.innerHTML = ` 
            <div class="perfil-usuario">
                <a href="#" class="usuario-post">
                    <img src="${usuario.usuario.avatar}" alt="">
                    <h4>${usuario.usuario.nome}</h4>
                </a>
            </div>    
            <div class="post">
                <p>${usuario.usuario.post}</p>
            </div>
        `;
        main.appendChild(article);
    });
};