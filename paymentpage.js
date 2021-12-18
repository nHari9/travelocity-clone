document.querySelector("body");

// display();

document.querySelector("#submit").addEventListener("click",ticketdetails);
var paymentarr=[];


function ticketdetails(){

    
    var paydetails={
        title: title.value,
        firstname: firstname.value,
        
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
    
    }
    
    paymentarr.push(paydetails);
    


    paymentarr.map(function(elem){
        if(elem.carddetails==""|| elem.expiremonth==""|| elem.expireyear==""||elem.cvv==""){
            alert("Please fill the card details");
        }

        else{
            window.location.href="otpPage.html"
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

var details=JSON.parse(localStorage.getItem("finalPrice"))
var roundtrip=document.querySelector(".roundtrip")
    var p=document.createElement("h1");
    p.textContent="₹"+details;
    roundtrip.append(p);

    var finalFlight = JSON.parse(localStorage.getItem("finalFlight"));

    var roundtrip=document.querySelector(".roundtrip")
    document.querySelector(".roundtrip>span").textContent=finalFlight.cityFrom+" to "+finalFlight.cityTo;

    document.querySelector(".date").textContent =  finalFlight.date;
    document.querySelector(".time").textContent =  finalFlight.fTime;
    document.querySelector(".duration").textContent =  finalFlight.dur+" Hours";