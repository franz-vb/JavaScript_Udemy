// Page index/accueil.

// - Avec fetch je récupère l'ensemble des produits (je rècupère la réponse émise).
// - Ensuite je la parcoure (avec une boucle), pour inserer chaque produit dans la page d'accueil (l'ID, l'image, la description image, le nom, la description),
//   à l'aide d'un querySelector.innerHTML. 

// Page produit.

// - Je dois récupérer l'ID du produit de la page index/d'accueil (qui as été cliqué), qui se trouve dans l'URL de la nouvelle page produit (à l'aide de méthode
//   URLSearchParams).
// - Je fetch pour récupérer les différentes information de ce produit, que j'insere dans la page produit. En utilisant des textContent et des innerHTML,
//   je dois utiliser une (boucle) pour retrouver la couleur sélectionné.
// - Maintenant je dois avoir la possibilité d'ajouter ce produit au panier. en mettant le produit avec ses différentes caratéristiques
//   dans le localStorage.
// - Quand je click sur le bouton "ajouter un produit", 
// - Lorsqu’on ajoute un produit au panier, (si) celui-ci n'était pas déjà présent dans le panier, on ajoute un nouvel élément.
// - Lorsqu’on ajoute un produit au panier, si celui-ci était déjà présent
//   dans le panier (même id + même couleur), on incrémente
//   simplement la quantité du produit.

// Page panier.

// - Depuis la page Panier, récupérer le panier  via localStorage.
// - bouclé le panier
// - Créer et insérer des éléments dans la page Panier.
// - On doit avoir la possibilité de modifier et supprimer un produit.
// - Je dois récupérer les données saisi par l'utilisateur, et etre sur que le formulaire est remplie correctement.
// - Constituer un objet contact (à partir des données du formulaire) et un tableau de produits.

// Afficher numéro de commande.

// - Effectuer une requête POST sur l’API (avec fetch) et récupérer l’identifiant de commande dans la réponse de celle-ci.
// - Rediriger l’utilisateur sur la page Confirmation, en passant l’id de commande dans l’URL, dans le but d’afficher le numéro de commande.




