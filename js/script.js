// PROBLEMA: Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21.



// 1- Dare la possibilità all'utente di inserire il nome 
// 2- Dare la possibilità all'utente di inserire il cognone
// 3- Dare la possibilità all'utente di inserire il suo colore preferito 
// 4- Concatenare i valori delle variabili concatenando anche il numero 21 alla fine della stringa
// 5- Visualizzare a schermo all'interno della pagina



// 1- Dare la possibilità all'utente di inserire il nome 
let your_name = prompt ("Inserisci il tuo nome")

// 2- Dare la possibilità all'utente di inserire il cognone
let your_surname = prompt ("Inserisci il tuo cognome")

// 3- Dare la possibilità all'utente di inserire il suo colore preferito 
let your_color = prompt ("Inserisci il tuo colore preferito")

// 4- Concatenare i valori delle variabili concatenando anche il numero 21 alla fine della stringa
document.getElementById("password").innerHTML= "La tua password é:" + your_name + your_surname + your_color + "21";

// 5- Visualizzare a schermo all'interno della pagina
console.log("La tua password é:" + your_name + your_surname + your_color + "21");