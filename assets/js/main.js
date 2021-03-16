// // Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
$(document).ready(function(){

var studente = {
  nome: "",
  cognome: "",
  età: "",
}

console.log(studente);

for (var key in studente) {
  $("#studente").append(key + ': ' + studente[key] + ' ' + "<br>");
}

var studenti = [
studente1 = {
  nome: "Walter",
  cognome: "Rubicondo",
  età: "28 anni",
  },
studente2 = {
  nome: "Andrea",
  cognome: "Gori",
  età: "29 anni",
  },
studente3 = {
  nome: "Leonardo",
  cognome: "Bongianni",
  età: "30 anni",
  }
];

console.log(studenti);

for (var i = 0; i < studenti.length; i++) {
  $("#studenti").append(studenti[i].nome + " " + studenti[i].cognome + "<br>")
}



$("#add").click(function(){
var nome = $("#nome").val();
var cognome = $("#cognome").val();
var età = $("#età").val();

var studente = {
  nome: nome,
  cognome: cognome,
  età: età,
}
studenti.push(studente);
console.log(studenti);

for (var i = 0; i < studenti.length; i++) {
  $("#classe").append(studenti[i].nome + " " + studenti[i].cognome + "<br>")
}

})

})




// FUNZIONI
