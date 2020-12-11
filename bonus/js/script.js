//Trying to decrease lines of code.

// document.getElementById('result').innerText =
// prompt('Inserisci Nome') + 
// prompt('Inserisci Cognome') + 
// prompt('Inserisci Colore Preferito');

//Trying number input validation

var name = prompt('Inserisci Nome');
if (name === '') {
    alert('Inserisci un nome valido');
} else {
    var name = name;
}
var age = prompt('Inserisci età');
if (age === '') {
    alert('Il campo è vuoto');
} else if (isNaN(age)) {
    alert('Inserisci età valida');  //isNaN(variable) 
} else
var age = age;
var output = name + ' ' + age;
document.getElementById('result2').innerText = output;