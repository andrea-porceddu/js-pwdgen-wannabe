var name = prompt('Ciao, inserisci il tuo nome');
var surname = prompt('Inserisci il tuo cognome');
var favoriteColor = prompt('Inserisci il tuo colore preferito');
var dateOfBirth = prompt('Inserisci il tuo anno di nascita');
var currentYear = new Date().getFullYear();
var birthday = currentYear - dateOfBirth;
output = name + surname + favoriteColor + birthday;
document.getElementById('result').innerText = output;
