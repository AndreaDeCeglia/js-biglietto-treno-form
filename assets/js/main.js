//******* VARIABLES ************* */

let valueName = document.getElementById('inputName').value;

let valueDistance = parseFloat( document.getElementById('inputDistance').value );

let valueAge = document.getElementById('inputAge').value;

const kmPrice = 0.21;

let ticketPrice = parseFloat( valueDistance * kmPrice );

let kidDiscount = ( ( ticketPrice / 100 ) * 20 );

let seniorDiscount = ( ( ticketPrice / 100 ) * 40 );

let kidPrice = ticketPrice - kidDiscount;

let seniorPrice = ticketPrice - seniorDiscount;

let numberCoach = Math.floor( Math.random() * 10 ) + 1; //tra 0 e 9

let codCP = Math.floor( Math.random() * 99999 ) + 1; 

let generate = document.getElementById('generate');


// ************ EVENT'S FUNCTION *********** */

