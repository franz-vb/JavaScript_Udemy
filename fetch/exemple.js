/* Récupération de l'info dans l'url via le mot clé id */

const urlParams = new URLSearchParams(window.location.search); //new URLSearchParam est un objet de base de JS qui permet d'utiliser plusieurs
                                                            // méthodes pour traiter les données dans les URL
const idProduct = urlParams.get("id"); //On utilise la méthode "get" de l'objet "URLSearchParams" afin de récupérer la valeur (dans l'url) qui 
                                        //se trouve dans la clé "id"

/* Déclarations des variables */

let myProduct; 
let productTitle = document.querySelector("#title"); //Cette variable contient un élément HTML (qui est un objet)
let productDescription = document.querySelector("#description");
let productPrice = document.querySelector("#price");
let productImg = document.querySelector(".item__img");
let productColorsOptions = document.querySelector('#colors');

/* Déclaration de la fonction qui va fetcher l'info via l'URL de l'API */

function getProductFromId() {
    fetch("http://localhost:3000/api/products") //Fetch GET sur l'API donnée
    .then(response => response.json()) // On transforme l'info en format json()
    .then(data => { //On récupère ensuite la réponse (data) sous forme objet et on l'utilise directement

        /* Insertion de la data récupérée via l'API dans mon HTML */

        myProduct = data.filter(product => idProduct == product._id); // Cette fonction va filter mon tableau qui contient tous les 
        //produits, afin de récupérer que mon produit ciblé
        //product représente l'élément (l'objet) à chaque tour de boucle du tableau. La condition vérifie si l'ID (idProduct) qu'on a 
        //récupéré dans l'url est égale à l'id de l'élément donc égale à product._id. Si la condition est vraie, filter va mettre dans 
        //la varialbe myProduct l'objet (donc product)

        /* Insertion des données provenant de mon objet filtré (myProduct) via id vers mes éléments HTML (productTitle, etc...) */
        productTitle.textContent = `${myProduct[0].name}`;
        productDescription.textContent = `${myProduct[0].description}`
        productPrice.textContent = `${myProduct[0].price}`;
        productImg.innerHTML += `<img src=${myProduct[0].imageUrl} alt=Photographie d'un canapé />`;

        /* Boucle qui itère au sein du tableau "colors" qui est une clé (paire clé/valeur) de mon objet myProduct */ 

        for (let i = 0; i < myProduct[0].colors.length; i++) {

            productColorsOptions.innerHTML += `<option value=${myProduct[0].colors[i]}>${myProduct[0].colors[i]}</option>`; // on ajoute des enfants à l'élément HTML parent (color) pour chaque tour de boucle 
                                                                                                                            // afin d'afficher les colors dans le select (via les élements HTML options)
        }

    });
};

getProductFromId();
