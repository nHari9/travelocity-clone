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

var selectedFlights = JSON.parse(localStorage.getItem("selectedRoute"));
displayFlights(selectedFlights);

function displayFlights(selectedFlights) {
  
  document.querySelector("#flightsData").innerHTML = "";
  selectedFlights.map(function (el, index) {
    document.querySelector('.leavingfrom>h3').textContent = el.cityFrom;
    document.querySelector('.leavingto>h3').textContent = el.cityTo;
    document.querySelector('#depart>h3').textContent = el.date;
    var flightDiv = document.createElement("div");
    flightDiv.setAttribute("class", "flight");
    document.querySelector("#flightsData").append(flightDiv);

    flightDiv.addEventListener("click", function () {
      var finalFlight = selectedFlights[index];
      localStorage.setItem("finalFlight", JSON.stringify(finalFlight));
      window.location.href = "checkout.html";
    });

    var leftDiv = document.createElement("div");
    flightDiv.append(leftDiv);

    var rightDiv = document.createElement("div");
    flightDiv.append(rightDiv);

    var depTime = document.createElement("h3");
    depTime.setAttribute("class", "depTime");
    depTime.textContent = el.fTime;

    var dur = document.createElement("p");
    dur.textContent = el.dur + " Hours";
    var cities = document.createElement("p");
    cities.setAttribute("class", "cities");
    cities.textContent = el.cityFrom + " to " + el.cityTo;

    leftDiv.append(depTime, dur, cities);

    var price = document.createElement("p");
    price.setAttribute("class", "fPrice");
    price.textContent = "₹" + el.fPrice;
    rightDiv.append(price);
    document.querySelector("title").innerHTML = el.cityFrom + " to " + el.cityTo+" | Flights";
  });
}

function priceSort() {
  var selected = document.querySelector("#pricesort").value;
  if (selected == "hl") {
    selectedFlights.sort(function (a, b) {
      return Number(b.fPrice) - Number(a.fPrice);
    });
  }
  if (selected == "lh") {
    selectedFlights.sort(function (a, b) {
      return Number(a.fPrice) - Number(b.fPrice);
    });
  }
  displayFlights(selectedFlights);
  console.log(selected);
}
