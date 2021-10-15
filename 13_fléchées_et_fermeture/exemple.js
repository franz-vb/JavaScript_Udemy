//81. Les fonctions fléchées
let maFonction = function(){
    console.log('test');
  }
  
  let maFonction = () => {
    console.log('test');
  }
  
  let maFonction = () => console.log('test');
  
  // Dans la pratique, on l'utilise surtout pour les petites fonctions anonymes
  // Nous verrons plus tard que ces fonctions fléchées n'ont pas de this

  //82. Les fermetures (closures)
  // function bonjour(prenom) {
  
//   let resultat = "Bonjour " + prenom; // Variable locale
//   let maClosure = () => console.log(resultat);
//   return maClosure;
  
// }

// function bonjour_bis(prenom) {
  
//   let resultat = "Bonjour " + prenom; // Variable locale
//   console.log(resultat);
  
// }

// let maFonction = bonjour('Evan');
// maFonction();
// bonjour_bis('Nicolas');

function timer() {
    let secondes = 0;
    
    let maClosure = () => {
      return ++secondes;
    }
    return maClosure;
  }
  
  let monTimer = timer();
  console.log(monTimer());
  console.log(monTimer());
  console.log(monTimer());
  
  let monDeuxiemeTimer = timer();
  console.log(monDeuxiemeTimer());
  
  console.log(monTimer());