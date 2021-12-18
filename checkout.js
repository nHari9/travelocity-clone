var count = 0;
  function dropMenu() {
    if (count == 0) {
      document.getElementById("dropMenu").style.visibility = "visible";
      count = 1;
    } else if (count == 1) {
      document.getElementById("dropMenu").style.visibility = "hidden";
      count = 0;
    }
  }
 var finalFlight = JSON.parse(localStorage.getItem("finalFlight"));

//  console.log(finalFlight);
  document.querySelector(".txtdiv>span:first-child").textContent =  finalFlight.cityFrom;
  document.querySelector(".txtdiv>span:nth-child(3)").textContent =  finalFlight.cityTo;
  document.querySelector(".sorceTodes>h1:first-child").textContent =  finalFlight.cityFrom+" to "+finalFlight.cityTo;
  document.querySelector(".fclass>p").textContent =  finalFlight.date;
  document.querySelector(".flitTime>h4>b").textContent =  finalFlight.fTime;
  document.querySelector(".flitTime>p").textContent =  finalFlight.dur+" Hours";
  
  document.querySelector(".button>p:first-child").textContent =  "₹"+finalFlight.fPrice+" x 1 Passenger";
  document.querySelector("#finalPrice").textContent =  "₹"+finalFlight.fPrice;
  localStorage.setItem('finalPrice',JSON.stringify(+finalFlight.fPrice));

  function numOfPass(){
   var selected = document.querySelector("#passengerNum").value;
   document.querySelector(".button>p:first-child").textContent =  "₹"+finalFlight.fPrice+" x "+selected+ " Passenger";
   var finalPrice = finalFlight.fPrice*selected;
   localStorage.setItem('PassNum',JSON.stringify(selected));
   localStorage.setItem('finalPrice',JSON.stringify(finalPrice));
   document.querySelector("#finalPrice").textContent =  "₹"+finalFlight.fPrice*selected; 
  }