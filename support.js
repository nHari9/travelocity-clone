
document.querySelector("#supportForm").addEventListener("submit",addInformation);
var supportArr=JSON.parse(localStorage.getItem(""))||[];
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
}