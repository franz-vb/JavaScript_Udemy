//33. Correction de l’exercice 1
function abracadabra() {
    
    let prenom = prompt("Quel est votre prénom ?");
    let nom    = prompt("Quel est votre nom ?");
    let age    = prompt("Quel est votre age ?");

    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, "
            + prenom
            + " ! Euh... Je veux dire... Monsieur le grand magicien "
            + nom
            + " ! Cela fait déjà "
            + age
            + " ans que vous faites rayonner notre contrée !");

}

abracadabra();

//35. Correction de l’exercice 2
function calculerIMC(poids, taille) {
    
    // Converti la taille en centimètres => mètres
    let tailleEnMetres = taille / 100;
  
    // Calcule la taille à la puissance 2
    let tailleCalculee = Math.pow(tailleEnMetres, 2);
  
    // Calcule l'IMC
    let resultat       = poids / tailleCalculee;

    // Retourne notre résultat
    return resultat;
  
    // Version simplifiée de cette fonction : return poids / Math.pow((taille / 100), 2);

}

let poids   = prompt("Quel est votre poids ? (en kg)");
let taille  = prompt("Quelle est votre taille ? (en cm)");

alert(calculerIMC(poids, taille));