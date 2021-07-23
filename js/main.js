// stap 1: maak een button in je html pagina//
// stap 2: haal de button op doormiddel van een queryselector //
// stap 3: zet een event listener op de button 
// stap 4: haal de hele body uit je html op
// stap 5: voeg een class toe aan de body via js
// stap 6: maak de class aan in jouw css bestand (background-color\font-color)
/*
const switchButton = document.querySelector(".button")
switchButton.addEventListener("click", function (){
    const iets = document.querySelector(".htmlbody")
    console.warn(switchButton);
    const htmlbody = document.querySelector(".htmlbody")

})
*/
function changeButton() {
    var element = document.body;
    element.classList.toggle("htmlbody");
 }