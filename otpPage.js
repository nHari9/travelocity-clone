document.querySelector("#otpForm").addEventListener("submit",takeOtp);
function takeOtp(event){
event.preventDefault();
var otp=document.querySelector("#otp").value;
alert("Your ticket is booked!!")
}