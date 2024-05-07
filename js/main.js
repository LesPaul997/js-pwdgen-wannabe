//CONTROLLO
'use strict';
//CONTROLLO


/* const variable ='pippo';
let variableNew = 'pluto';
variableNew = variable + ' ' + variableNew;

console.log(variableNew); */


//alert ('Ciao prima di entrare ho bisogno di sapere il tuo nome!')

//const inputUtente = prompt('Ciao prima di entrare ho bisogno di sapere il tuo nome!');



/* let password = 'insicurissimo';

document.getElementById("InputPassword") = password; */


/* const firstName = prompt ('Inserisci il tuo nome');
const lastName = prompt ('Inserisci il tuo sognome');
const age = prompt ('Inserisci la età');
const color = prompt ('Inserisci il tuo colore preferito');

const output = `

nome: $(firstName)
cognome: $(lastName)
età: $(age)
colore: $(color)
`;



document.getElementById('nome-utente').innerHTML = firstName;
document.getElementById('cognome-utente').innerHTML = lastName;
document.getElementById('eta').innerHTML = age;
document.getElementById('colore').innerHTML = color;


console.log(output); */

/*------------------------------------------------------------------------------------------------*/
       /*    ^^^SOPRA SONO TUTTI ESEMPI PER INSERIRE ALL'INTERNO DI UN LAYOUT^^^       */



const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const color = prompt('Inserisci il tuo colore preferito');
/* const age = prompt('Inserisci la tua età'); */


const password = firstName + lastName + color + "21";


// document.getElementById('nome-utente').innerHTML = firstName;
// document.getElementById('cognome-utente').innerHTML = lastName;
/* document.getElementById('colore-preferito').innerHTML = color;
document.getElementById('eta-utente').innerHTML = age; */

console.log(password);
 document.getElementById('password-segreta').value = password; 
