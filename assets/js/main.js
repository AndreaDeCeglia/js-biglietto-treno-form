


// // ************ EVENT'S FUNCTION *********** */

// generate.addEventListener('click', function(){

//     //******* VARIABLES ************* */

//     let valueName = document.getElementById('inputName').value;

//     let valueDistance = parseFloat( document.getElementById('inputDistance').value );

//     let valueAge = document.getElementById('inputAge').value;

//     const kmPrice = 0.21;

//     let ticketPrice = parseFloat( valueDistance * kmPrice );

//     let kidDiscount = ( ( ticketPrice / 100 ) * 20 );

//     let seniorDiscount = ( ( ticketPrice / 100 ) * 40 );

//     let kidPrice = ticketPrice - kidDiscount;

//     let seniorPrice = ticketPrice - seniorDiscount;

//     let numberCoach = Math.floor( Math.random() * 10 ) + 1; //tra 0 e 9

//     let codeCP = Math.floor( Math.random() * 99999 ) + 1; 

//     let generateBtn = document.getElementById('generateBtn');

//     //**** discount's count ***** */

//     if ( valueAge === "kid" ){
//         ticketPrice = kidPrice.toFixed(2);
//         document.getElementById('typeOffert').innerHTML = `KID -20%`;
//     } else if ( valueAge === "senior" ){
//         ticketPrice = seniorPrice.toFixed(2);
//         document.getElementById('typeOffert').innerHTML = `SENIOR -40%`;
//     } else {
//         ticketPrice = ticketPrice.toFixed(2);
//         document.getElementById('typeOffert').innerHTML = `FULL COST`;
//     }

//     //******** output generator ******** */

    
// })

//****************************************** */
//******** CORRECTION *************** */
//****************************************** */

//*********************************************** */
//takin HTML's elements, and transform them in VARIABLES
//*********************************************** */

let inputName = document.getElementById('inputName');

let inputDistance = document.getElementById('inputDistance');

let inputAge = document.getElementById('inputAge');

let generateBtn = document.getElementById('generateBtn');

const kmPrice = 0.21;

let numberCoach = Math.floor( Math.random() * 10 ) + 1;

let codeCP = Math.floor( Math.random() * 99999 ) + 1;

//***************************** */
// **** function ****** !!!!!
//***************************** */

generateBtn.addEventListener('click', function(){

    const valueName = inputName.value;

    const valueDistance = inputDistance.value;

    const valueAge = inputAge.value;

    //input fillin controll
    if( valueName == '' || valueDistance =='' || valueAge ==''){
        console.log('fill it out at all')
    } else {
        //console.log('great!!')
        let ticketPrice = parseFloat( valueDistance * kmPrice );

        let fullCost = ticketPrice;

        let kidPrice = ticketPrice * 0.80;

        let seniorPrice = ticketPrice * 0.60;

        if( valueAge === 'adult'){
            document.getElementById('typeOffert').innerHTML = `FULL COST`;
            document.getElementById('finalPrice').innerHTML = `<h3> € ${fullCost.toFixed(2)} </h3>`
        } else if ( valueAge === 'kid'){
            document.getElementById('typeOffert').innerHTML = `KID -20%`;
            document.getElementById('finalPrice').innerHTML = `<h3> € ${kidPrice.toFixed(2)} </h3>`
        } else if ( valueAge === 'senior'){
            document.getElementById('typeOffert').innerHTML = `SENIOR -40%`;
            document.getElementById('finalPrice').innerHTML = `<h3> € ${seniorPrice.toFixed(2)} </h3>`
        }

        document.getElementById('ticket').style.display = "block";
        document.getElementById('passenger').innerHTML = `${valueName}`;
        document.getElementById('couchNumber').innerHTML = `${numberCoach}`;
        document.getElementById('cpCode').innerHTML = `${codeCP}`;
        document.getElementById('finalPrice').innerHTML = `${ticketPrice} €`;
   
    }
})