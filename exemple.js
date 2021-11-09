// Page index.

// - Je commence par récupérer l'ensemble des produits à l'aide de l'API avec fetch.
// - Je récupere les informations/éléments qui me sont utile pour la page index (l'ID, l'image, la description image, le nom, la description).

// De la page index à la page produit.

// - Je dois récupérer l'ID du produit de la page index/d'acceuil (cliqué), qui se trouve dans l'URL de la nouvelle page produit.
// - Une fois récupéré, je fetch pour récupérer les différentes information de ce produit, que j'insere dans la page produit.
// - Maintenant je dois avoir la possibilité d'ajouter ce produit au panier. en mettant le produit avec ses différentes caratéristiques
//   dans le localStorage.
// - Quand on ajoute un produit au panier: si il n'était pas présent on ajoute une nouvelle ligne au panier. Si il était déja présent (avec
//   avec la même couleur et ID), on incrémente la quantité.

// De la page produit à la page panier.

// - Depuis la page panier je récupère les infos du localStorage.
// - On doit voir les différentes lignes de produit (même couleur + même id).
// - On doit avoir la possibilité de modifier et supprimer un produit.
// - Je dois récupérer les données saisi par l'utilisateur, et etre sur que le formulaire est remplie correctement.

// De la page panier à la commande.

// - Ensuite je dois afficher un numéro de commande. et rediriger l'utilisateur sur la page commande.