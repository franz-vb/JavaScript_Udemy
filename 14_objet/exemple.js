//84. Créer un objet
let chien = {
  race: 'Shiba',
  poil: 'Court',
  // aboyer: function(){
  //     console.log('Ouaf ouaf');
  // }
  aboyer: () => console.log('Ouaf ouaf')
}

chien.aboyer();

// let magicien = {
//     attaquer: function(){
//         console.log('Le magicien lance un sort');
//     }
// }
// let guerrier = {
//     attaquer: function(){
//         console.log('Le guerrier prend son épée');
//     }
// }

// magicien.attaquer();
// guerrier.attaquer();