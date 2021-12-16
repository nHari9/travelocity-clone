document.querySelector("#submit").addEventListener("click",thanks);
document.querySelector("body");

function thanks(){
    window.location.href="thanks.html";
}

document.querySelector("#submit").addEventListener("click",ticketdetails);
var paymentarr=[];


function ticketdetails(){

    
    var paydetails={
        title: title.value,
        firstname: firstname.value,
        middlename: middlename.value,
        lastname: lastname.value,
        phone: phone.value,
        month: month.value,
        day: day.value,
        year: year.value,
        nameoncard: nameoncard.value,
        carddetails: carddetails.value,
        expiremonth:  expiremonth.value,
        expireyear: expireyear.value,
        cvv: cvv.value,
        country: country.value,
        address1: address1.value,
        address2: address2.value,
        city: city.value,
        state: state.value,
        zipcode: zipcode.value,
    }
    
    paymentarr.push(paydetails);
    
    console.log(paymentarr);
}

