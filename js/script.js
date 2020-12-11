var name = prompt('Ciao, inserisci il tuo nome');
var surname = prompt('Inserisci il tuo cognome');
var favoriteColor = prompt('Inserisci il tuo colore preferito');
var year = new Date().getFullYear();
output = name + surname + favoriteColor + year;
document.getElementById('result').innerText = output;
