// // Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
$(document).ready(function(){

  // creo un oggetto vuoto🐱‍👤
  var studente = {
    nome: "",
    cognome: "",
    eta: "",
  }

  console.log(studente);

  // lo stampo a schermo🐱‍👤
  for (var key in studente) {
    console.log(studente[key]);
    $("#studente").append(key + ': ' + studente[key] + ' ' + "<br>");
  }

  // creo un array con dentro 3 oggetti🐱‍👤
  var studenti = [
  studente1 = {
    nome: "Walter",
    cognome: "Rubicondo",
    eta: "28 anni",
    },
  studente2 = {
    nome: "Andrea",
    cognome: "Gori",
    eta: "29 anni",
    },
  studente3 = {
    nome: "Leonardo",
    cognome: "Bongianni",
    eta: "30 anni",
    }
  ];


  // lo stampo a schermo🐱‍👤
  for (var i = 0; i < studenti.length; i++) {
    $("#studenti").append("<li>" + studenti[i].nome + " " + studenti[i].cognome + "</li>")
  }

  // creo una funzione che al click del bottone salvi le variabili dall'input🐱‍👤
  $("#add").click(function(){
  var studente = {};

  studente.nome = $("#nome").val();
  studente.cognome = $("#cognome").val();
  studente.eta = $("#età").val();

  // sovrascrivo gli oggetti con quelli che ho preso dall'input🐱‍👤
  // pusho i dati dentro l'array della classe🐱‍👤
  studenti.push(studente);
  console.log(studenti);

  // azzero l'html (altrimenti mi ripete sempre gli altri nomi)🐱‍👤
  $("#classe").html("");

  // stampo a schermo il nome inserito dall'utente tramite input🐱‍👤
  for (var i = 0; i < studenti.length; i++) {
    $("#classe").append("<li>" + studenti[i].nome + " " + studenti[i].cognome + "</li>")
  }

  })
})
