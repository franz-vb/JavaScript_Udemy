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

//42. Les conditions ternaires
let gareDeDepart = "Valenciennes";
let gareDArrivee = prompt("Où souhaitez-vous aller ?") || "Gare du Nord";
let chauffeur    = "Louis-Nicolas";

if ((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
    alert('Le train va démarrer à destination de ' + gareDArrivee + '.');
}
else {
    alert('Le train ne peut pas démarrer.');
}

// let x = 1;

// CONDITION TERNAIRE
// x > 3 ? console.log('X est supérieur à trois') : console.log('X est inférieur à trois');

// if(x > 3) {
//     console.log('X est supérieur à trois');
// }
// else {
//     console.log('X est inférieur à trois');
// }

//44. Les boucles (while)
let i = 1;

while (i < 5) {
    
    console.log('Ligne : ' + i);
    i++;

}

//45. Les boucles (do...while)
do {

    var prenom = prompt('Quel est votre prénom ?');

} while(prenom == "" || prenom == null)

alert('Bonjour ' + prenom);

//46. Les boucles (for)
// let i = 1;

// while (i < 5) {
    
//     console.log('Ligne : ' + i);
//     i++;

// }

// Ici, la boucle "for" fait la même chose que la boucle while au-dessus, mais en 3 lignes
for (let i = 1; i < 5; i++) {
    console.log('Ligne : ' + i);
}

//48. Casser la boucle : break et continue
let i = 0;

while (i < 5) {
  
  // Break
  if (i == 3) {
    break;
  }
  
  // Continue
  // if (i == 3) {
  //   i++;
  //   continue;
  // }
  
  console.log('Ligne : ' + i);
  i++;
  
}

//49. Gérer les exceptions
try {
    // Erreur ?
    let recompense = prompt("Choisissez une récompense : épée, arc, haches");
    let degats;
    
    switch(recompense) {
      case 'épée':
        degats = 40;
        break;
      case 'arc':
        degats = 30;
        break;
      case'haches':
        degats = 20;
        break;
      default:
        throw new Error('Vous ne pouvez pas tricher.');
    }
    
    alert('Vous avez choisi : ' + recompense + ' (' + degats + ' dégats).');
  }
  catch(error) {
    // Erreur !
    alert(error);
  }
  finally {
    alert('Fin du programme');
  }


