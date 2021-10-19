//105. Accéder aux éléments du DOM
let header    = document.getElementsByTagName('header');
let logo      = document.getElementById('logo');
let container = document.getElementsByClassName('container');
let h1        = document.querySelector('h1');
let p         = document.querySelectorAll('p');

console.log(header);
console.log(logo);
console.log(container);
console.log(h1);
console.log(p);

//106. Modifier des éléments du DOM (textContent, innerHTML)
let h1 = document.getElementsByTagName('h1')[0];
h1.textContent = "Hello World !";
h1.innerHTML = "<div style='font-weight: normal'>Hello World !</div>";

console.log(h1);

//107. Ajouter des éléments au DOM (append, prepend, insertBefore)
// 1ère méthode : Ecrit juste un texte
document.write('test');

// 2ème méthode : Ajouter un élément brut
let h1 = document.querySelector('h1');
h1.append('test');

// 3ème méthode (celle pour les objets)
// Créer un élément
let helloWorld = document.createElement('div');

// Le personnaliser
helloWorld.textContent = "Hello World !";

// L'ajouter à notre page
// document.body.append(helloWorld); (après)
// document.body.appendChild(helloWorld); (après)

// document.body.insertBefore(helloWorld, document.querySelector('.container'));

document.querySelector('.container').prepend(helloWorld);

//108. Supprimer des éléments du DOM
// let h1 = document.querySelector('h1');
// h1.remove();

document.querySelector('h1').remove();


