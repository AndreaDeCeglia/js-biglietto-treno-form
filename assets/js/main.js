let valueName = document.getElementById('inputName').value;

let valueDistance = parseFloat( document.getElementById('inputDistance').value );

const kmPrice = 0.21;

let ticketPrice = parseFloat( valueDistance * kmPrice );

let kidDiscount = ( ( ticketPrice / 100 ) * 20 );

let seniorDiscount = ( ( ticketPrice / 100 ) * 40 );

let kidPrice = ticketPrice - kidDiscount;

let seniorPrice = ticketPrice - seniorDiscount;

let numberCoach = Math.floor( Math.random() * 10 ) + 1; //tra 0 e 9

let codCP = Math.floor( Math.random() * 99999 ) + 1; 

let finalPrice = function(){
    
    if ( valueAge < 18 ){
        ticketPrice = kidPrice.toFixed(2)
    } else if ( valueAge > 65 ){
        ticketPrice = seniorPrice.toFixed(2)
    } else {
        ticketPrice = ticketPrice.toFixed(2)
    }
    console.log()
}