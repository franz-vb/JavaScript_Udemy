//37. Les conditions (if / else)
let age = 40;

// heure == 11
// heure != 11
// heure < 11
// heure > 11
// heure <= 11
// heure >= 11

if (age < 18) {
    console.log("Vous n'êtes pas majeur.");
}
else if(age < 21) {
    console.log("Vous êtes majeur en France.");
}
else {
    console.log("Vous êtes majeur partout, à vous les casinos !");
}

// age
// -18 : Vous n'êtes pas majeur
// 18 et 20 : Vous êtes majeur en France
// 21+ : Vous êtes majeur partout, à vous les casinos !

//39. Les conditions (switch)
let consommable = "chocolat";

switch(consommable) {

    case "courgette":
    case "carotte":   
    case "pomme de terre":
        console.log('Ceci est un légume');
        break;
    
    case "banane":
        console.log('Ceci est un fruit');
        break;

    default:
        console.log('Ceci n\'est ni un fruit ni un légume');

}

//40. Vérifier plusieurs conditions d'un coup (OR / AND)
let gareDeDepart = "Valenciennes";
let gareDArrivee = "";
let chauffeur = "";

if((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
  console.log('Le train va démarrer');
}
else {
  console.log('Le train ne peut pas démarrer');
}

//41. Vérifier le contraire d'une condition (NOT)
let x = 7;

if(!x < 5) {
    console.log('x est inférieur à 5.');
}
else {
    console.log('x n\'est pas inférieur à 5.');
}
