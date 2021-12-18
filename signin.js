document.querySelector("form").addEventListener("submit",goto)

var cred=JSON.parse(localStorage.getItem("usercred"));

function goto(event){
    event.preventDefault();

    var email = document.querySelector("#email").value;
    var password=document.querySelector("#password").value;

    for(i=0;i<cred.length;i++){
        if(cred[i].mail==email && cred[i].pass==password){
            window.location.href="index.html";
            
        }
        else{
            alert("please enter the correct details!!")
        }
    }
}
