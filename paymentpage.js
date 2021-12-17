document.querySelector("body");



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

    paymentarr.map(function(elem){
        if(elem.carddetails==""|| elem.expiremonth==""|| elem.expireyear==""||elem.cvv==""){
            alert("Please fill the card details");
        }
    })
    
}




// else{
//     alert("Payment Successfull!!");
// }


var day=document.querySelector("#day");
day.addEventListener("click",dayno);

function dayno(){
    
    for(i=1;i<=31;i++){
        var opt=document.createElement("option")
    
    opt.textContent=i;
    day.append(opt)
    }
    
}

var year=document.querySelector("#year");
year.addEventListener("click",yearno);

function yearno(){
    for(i=1940;i<=2022;i++){
        var opt=document.createElement("option")
    
        opt.textContent=i;
        year.append(opt)
    }
}


var expiremon=document.querySelector("#expiremonth");
expiremon.addEventListener("click",expiremonth);

function expiremonth(){
    
    for(i=1;i<=12;i++){
        var opt=document.createElement("option")
    
    opt.textContent=i;
    expiremon.append(opt)
    }

    var expireyea=document.querySelector("#expireyear");
    expireyea.addEventListener("click",expireyear);
    
    function expireyear(){
        
        for(j=2000;j<=2050;j++){
            
            var opt=document.createElement("option")
        
        opt.textContent=j;
        expireyea.append(opt)
        }
}
}
