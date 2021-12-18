document.querySelector("body");

// display();

document.querySelector("#submit").addEventListener("click",ticketdetails);


function ticketdetails(){

    var paydetails={
        title: document.querySelector("#title").value,
        firstname: document.querySelector("#firstname").value,
        
        lastname: document.querySelector("#lastname").value,
        phone: document.querySelector("#phone").value,
        month: document.querySelector("#month").value,
        day: document.querySelector("#day").value,
        year:  document.querySelector("#year").value,
        nameoncard: document.querySelector("#nameoncard").value,
        carddetails: document.querySelector("#carddetails").value,
        expiremonth:  document.querySelector("#expiremonth").value,
        expireyear: document.querySelector("#expireyear").value,
        cvv: document.querySelector("#cvv").value,
    
    }
     
    localStorage.setItem("PassPay",JSON.stringify(paydetails));

        if(paydetails.carddetails==""|| paydetails.expiremonth==""|| paydetails.expireyear==""||paydetails.cvv==""){
            alert("Please fill the card details");
        }

        else{
            window.location.href="otpPage.html"
        }
    
    
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
var pn = document.createElement("h4");
pn.textContent = JSON.parse(localStorage.getItem("PassNum")) +" Passengers";
    var p=document.createElement("h1");
    p.textContent="₹"+details;
    roundtrip.append(pn,p);

    var finalFlight = JSON.parse(localStorage.getItem("finalFlight"));

    var roundtrip=document.querySelector(".roundtrip")
    document.querySelector(".roundtrip>span").textContent=finalFlight.cityFrom+" to "+finalFlight.cityTo;

    document.querySelector(".date").textContent =  finalFlight.date;
    document.querySelector(".time").textContent =  finalFlight.fTime;
    document.querySelector(".duration").textContent =  finalFlight.dur+" Hours";
    document.querySelector(".perTicket").textContent =  "₹"+finalFlight.fPrice;