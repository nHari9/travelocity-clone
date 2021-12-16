

document.querySelector("form").addEventListener("submit",goto)

function goto(event){
    event.preventDefault();
    window.location.href="index.html";
    // console.log("here");
}