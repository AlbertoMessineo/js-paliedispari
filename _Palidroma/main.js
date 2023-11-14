'use strict';
// function to reverse the string
function paliDetector() {
	// variable holds reverse string 
    const userWord = prompt('Inserisci una parola, il computer ti dirà se è palindroma.');
	let revUserWord = "";
	for (let i = userWord.length - 1; i >= 0; i--) {
		revUserWord += userWord[i];
	}
	if (revUserWord === userWord) {
		alert("La parola inserita è palindroma");
	}
	else {
		alert("La parola inserita non è palindorma")
	}
// return reverse string 
	return revUserWord;
}
paliDetector();

