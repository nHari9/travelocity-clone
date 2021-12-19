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

document.querySelector("#supportForm").addEventListener("submit",addInformation);
var supportArr=JSON.parse(localStorage.getItem("queries"))||[];
function addInformation(event){
event.preventDefault();
var name=document.querySelector("#name").value;
var phone=document.querySelector("#phone").value;
var email=document.querySelector("#email").value;
var query=document.querySelector("#query").value;
console.log(name,phone,email,query);
var supportObj={
name:name,
phone:phone,
email:email,
query:query
}
console.log(supportObj);
supportArr.push(supportObj);
localStorage.setItem("queries",JSON.stringify(supportArr));
alert("Your query ticket has been generated, you will be contacted by our customer service provider soon.");
}