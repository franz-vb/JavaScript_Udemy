//61. La portée des variables
let variableLet = "globale";
var variableVar = "globale";

if(true) {
  
  let variableLet = "locale";
  var variableVar = "locale";
  
  console.log("let : " + variableLet);
  console.log("var : " + variableVar);
  
}

console.log("let : " + variableLet);
console.log("var : " + variableVar);

//62. Parlons de la récursivité
function timer(secondes) { // 10
    
    if(secondes > 0) {
        console.log(secondes);
        timer(secondes - 1); // 9

            // afficher 9
            // timer(8)

                // afficher 8
                // timer(7)

                    // ...
    }
    else {
        console.log(0);
    }

}

timer(10);