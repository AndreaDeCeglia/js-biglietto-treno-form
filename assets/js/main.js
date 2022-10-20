


// ************ EVENT'S FUNCTION *********** */

generate.addEventListener('click', function(){

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

    let codeCP = Math.floor( Math.random() * 99999 ) + 1; 

    let generate = document.getElementById('generate');

    //**** discount's count ***** */

    if ( valueAge === "kid" ){
        ticketPrice = kidPrice.toFixed(2);
        document.getElementById('typeOffert').innerHTML = `KID -20%`;
    } else if ( valueAge === "senior" ){
        ticketPrice = seniorPrice.toFixed(2);
        document.getElementById('typeOffert').innerHTML = `SENIOR -40%`;
    } else {
        ticketPrice = ticketPrice.toFixed(2);
        document.getElementById('typeOffert').innerHTML = `FULL COST`;
    }

    //******** output generator ******** */

    document.getElementById('ticket').style.display = "block";
    document.getElementById('passenger').innerHTML = `${valueName}`;
    document.getElementById('couchNumber').innerHTML = `${numberCoach}`;
    document.getElementById('cpCode').innerHTML = `${codeCP}`;
    document.getElementById('finalPrice').innerHTML = `${ticketPrice.value}`;

})