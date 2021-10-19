//115. Les écouteurs : onclick, ...
// Méthode la plus ancienne
// Déconseillé car vieillissante
// On insère un attribut HTML lié à l'évènement qu'on veut capturer
// onClick, onMouseOver, onMouseOut

//116. Les écouteurs via les propriétés JavaScript
let a = document.querySelector('a');
let button = document.querySelector('button');

// a.onclick = function(){
//   if(confirm('Etes-vous sûr ?')) {
//     location.href="https://believemy.com"
//   }
// }

a.onclick = () => {
  if(confirm('Etes-vous sûr ?')) {
    location.href="https://believemy.com"
  }
}

button.onmouseover = () => {
  document.body.style.backgroundColor = 'orange';
}

button.onmouseout = () => {
  document.body.style.backgroundColor = 'white';
}

//117. Les écouteurs via le gestionnaire d'évènements
let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', (e) => {
  if(confirm('Etes-vous sûr ?')) {
    location.href = "https://believemy.com";
  }
});

button.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'orange';
});

function backgroundWhite() {
  document.body.style.backgroundColor = 'white';
}

button.addEventListener('mouseout', backgroundWhite);
button.addEventListener('mouseout', () => {
  document.body.style.fontFamily = 'arial';
});

button.removeEventListener('mouseout', backgroundWhite);

//118. Gérer la propagation des évènements et stopPropagation
let article = document.querySelector('article');
let h1      = document.querySelector('h1');

article.addEventListener('click', () => {
  alert('article cliqué');
});

h1.addEventListener('click', (e) => {
  alert('titre cliqué');
  e.stopPropagation(); // On stop la propagation
});

//119. Planifier l'exécution d'un script (setTimeout, setInterval)
// setTimeout
let timer = setTimeout("alert('Bonjour')", 3000);
clearTimeout(timer);

// setInterval
let interval = setInterval("alert('Bonjour')", 5000);
clearInterval(interval);
