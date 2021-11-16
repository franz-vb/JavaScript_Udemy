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

//Ajouter au panier.
btnPanier.addEventListener("click", () => {//"addEventListener" méthode qui écoute l'évènement "click" qui est lié a "btnCart".

    //Stocker le localStorage dans le tableau cart
    let cart = JSON.parse(localStorage.getItem(`${idProduct}`));
    // idProduct est une variable qui contient (comme valeur) l'id du produit qu'on a clické sur la page index
    // localStorage est un emplacement mémoire local qui contient des "Items"(éléments) fonctionnant avec une paire "clé" / "valeur"


    //On vérifie si dans le localStorage se trouve la clé "idProduct"
    if (localStorage.getItem(`${idProduct}`)) {//Si une valeur est retournée par le localStorage avec la clé IdProduct, alors éxécute  
                                               //le code suivant.

        //Si oui(vrai) alors on va boucler afin de vérifier les éléments pairs qui sont censés être la couleur
        for (let i = 0; i < cart.length; i = i + 2) {

            //Si la couleur qu'on a sélectionné (productColorsOptions.value) est égale à celle présente dans l'Item du localStorage, alors : 
            if (cart[i] == productColorsOptions.value) {
                //On modifier la quantité de cette couleur
                //Et on balance la variable booléenne isColorPresent à true
                isColorPresent = true; 
                // J'additionne la précédente quantité déjà push dans le localStorage à la nouvelle quantité séléctionnée. 
                // parseInt permet de transformer le string en un number
                cart[i + 1] += parseInt(itemQty.value);
                //localStorage.setItem est la méthode pour push dans le local storage une paire clé / valeur
                //setItem prend deux arguments : le premier est la clé, et le deuxième est la valeur.  
                localStorage.setItem(`${idProduct}`, JSON.stringify(cart));
                break;
            }

            //Si la couleur sélectionnée n'est pas la même que la couleur de l'Item, alors on passe le booléen isColorPresent à false
            //On utilise ici un booléen car si dans le else on push des nouveaux éléments dans le tableau cart, on va créer une boucle infini 
            //car mon FOR est dépendant d'une longueur et cette longueur est modifiée à chaque fois.
            else {
                isColorPresent = false;
            }
        }

        //Si le booléen isColorPresent est à False, cela veut dire qu'on a séléctionnée un produit déjà présent dans le local mais qui a 
        //une couleur différente.

        if (!isColorPresent) {

            //Donc on ajoute deux nouveaux éléments au tableau cart avec la nouvelle couleur et la nouvelle quantité
            //On push dans le tableau la nouvelle couleur
            cart.push(productColorsOptions.value);
            //On push dans le tableau la nouvelle quantité
            cart.push(parseInt(itemQty.value));
            //On met à jour le localStorage en pushant le nouveau tableau qui contient les nouveaux éléments
            localStorage.setItem(`${idProduct}`, JSON.stringify(cart));

        }  
    }

    else {//Quand j'appuie sur panier, si idProduct n'existe pas dans le localStorage alors éxécute le code suivant
        //Ajoute au localStorage un nouvel item qui contient une clé (idProduct) et une valeur (ici un tableau qui contient la couleur 
        //sélectionnée ainsi que la quantité)

        localStorage.setItem(`${idProduct}`, JSON.stringify([productColorsOptions.value, parseInt(itemQty.value)]));
        alert("Produit ajouté au panier");
    }

})

getProductFromId();
:::::::::::::::::::::::::::::::::::
const urlParams = new URLSearchParams(window.location.search); 
const idProduct = urlParams.get("id");
const btnCart = document.querySelector("#addToCart");
const itemQty = document.querySelector('#quantity');
                
let productTitle = document.querySelector("#title");
let productDescription = document.querySelector("#description");
let productPrice = document.querySelector("#price");
let productImg = document.querySelector(".item__img");
let productColorsOptions = document.querySelector('#colors');
let quantity = document.querySelector("#quantity");
let cart ;

function getProductFromId() {
  fetch("http://localhost:3000/api/products/" + idProduct )
  .then(response => response.json())
  .then(product => { 

      productTitle.textContent = `${product.name}`;
      productDescription.textContent = `${product.description}`
      productPrice.textContent = `${product.price}`;
      productImg.innerHTML += `<img id=productImg src=${product.imageUrl} alt=Photographie d'un canapé />`;

      product.colors.forEach((color) => {
          productColorsOptions.innerHTML += `<option value="${color}">${color}</option>`;
      })
  });
};

getProductFromId();
               
btnCart.addEventListener("click", (e) => {
  
  if(localStorage.getItem("panier")) {
    cart = JSON.parse(localStorage.getItem("panier"));
    console.log(cart);
  } else{
    cart = [];
  }
  
  cart.push({id: idProduct, quantity: parseInt(quantity.value), color: productColorsOptions.value, name: productTitle.textContent, price: productPrice.textContent, img: document.querySelector("#productImg").src});
  localStorage.setItem("panier", JSON.stringify(cart));
  
});
.......................
let cart = JSON.parse(localStorage.getItem("panier"));
//console.log(cart);

function getProductFromCart() {
    
            cart.forEach((product) => {
                console.log(product)
                document.querySelector("#cart__items").innerHTML += `
                    <article class="cart__item" data-id="{product-ID}">
                        <div class="cart__item__img">
                        <img src="${product.img}" alt="Photographie d'un canapé">
                        </div>
                        <div class="cart__item__content">
                        <div class="cart__item__content__titlePrice">
                            <h2>${product.name}</h2>
                            <p>42,00 €</p>
                        </div>
                        <div class="cart__item__content__settings">
                            <div class="cart__item__content__settings__quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                            </div>
                            <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                            </div>
                        </div>
                        </div>
                    </article>`;
            })
            
        };

getProductFromCart();
//console.log(cart);