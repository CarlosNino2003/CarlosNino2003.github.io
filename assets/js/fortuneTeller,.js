// JavaScript Document
function tellFortune(numKids, partner, location, jobTitle) {
    let future = "You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids."
    return(future)
    
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  }
tellFortune(3, 'william', 'Dublin', "Engineer");
tellFortune(3000, 'Jasmine', 'Spain', "Plumber");
tellFortune(0, 'Julissa', 'El Salvador', "Musician");
document.getElementById("fortune1").innerHTML = tellFortune(getRandomIntInclusive(1, 10), 'william', 'Dublin', "Engineer");
document.getElementById("fortune2").innerHTML = tellFortune(getRandomIntInclusive(1, 10), 'Jasmine', 'Spain', "Plumber");
document.getElementById("fortune3").innerHTML = tellFortune(getRandomIntInclusive(1, 10), 'Julissa', 'El Salvador', "Musician");


setTimeout(function(){ alert("The page has loaded"); }, 1000);
function Function() {
    alert("Welcome!");
}