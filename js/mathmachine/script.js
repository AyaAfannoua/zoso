// button ophalen
const myBtn  = document.querySelector(".plus-btn");
// klikfunctie aan kan hangen
myBtn.addEventListener("click", +);
function +(){
    let a = document.querySelector(".getal1").value;
    let b = document.querySelector(".getalt2").value;
    document.querySelector(".result").textContent = "" + parseInt(a+b); //p veranderen
}