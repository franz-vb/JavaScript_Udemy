do {
    
    var choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));

} while(choix != 1 && choix != 2 && choix != 3 && choix != 4)

do {

    var premierNombre   = Number(prompt("Entrez un premier nombre"));
    var deuxiemeNombre  = Number(prompt("Entrez un deuxième nombre"));

} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

nombreA = premierNombre;
nombreB = deuxiemeNombre;

function addition(nombreA, nombreB) {
    
    result = nombreA + nombreB;

    return result;

}





