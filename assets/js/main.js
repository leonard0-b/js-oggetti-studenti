// // Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
$(document).ready(function(){

var studente = [
  {
  nome: "",
  cognome: "",
  età: "",
  }
]

console.log(studente);

for (var i = 0; i < studente.length; i++) {
  for (var key in studente[i]) {
    $("p").text(studente[i]);
  }
}

var studenti = [
  {
  nome: "Walter",
  cognome: "Rubicondo",
  età: "28 anni",
  },
  {
  nome: "Andrea",
  cognome: "Gori",
  età: "29 anni",
  },
  {
  nome: "Leonardo",
  cognome: "Bongianni",
  età: "30 anni",
  }
];

console.log(studenti);




})



// FUNZIONI
