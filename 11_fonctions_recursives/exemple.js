//64. Correction
function somme(nombre) { // 3
    
    if(nombre == 1) {
        return 1;
    }

    return nombre + somme(nombre - 1); // 2

        // retourner 2 + somme(1)

            // retourner 1

    // 3 + 2 + 1
}

console.log(somme(3));









