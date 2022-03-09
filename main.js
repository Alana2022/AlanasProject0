
 //below I am creating a Class for the tamagotchi and then I will instantiate passingin the name as "Abby" and console log to verify that my code my printed correctly.  
 //The metrics for hunger, sleepiness and boredom will start at 1.
class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger= 1;
        this.sleepiness= 1;
        this.boredom= 1;
    }
}
//I am adding the method query selctor to identify the elements in my HTML
const btnStart = document.querySelector("start");
const btnHunger = document.querySelector("hunger");
const btnSleepiness = document.querySelector("sleepiness");
const btnBoredom = document.querySelector("boredom");
const btnLights = document.querySelector("lights");


// this code will add the ability to name the pet.
const nameSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.petName.value) 

    document.getElementById("showName").innerHTML = event.target.petName.value
}




// //Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 
    
// this variable will connect the DOM elements from HTML
// const countEl = document.getElementById("my-count");
// const startEl = document.getElementById("btn-start");
// const stopEl = document.getElementById("btn-stop");
// const hungerEl = document.getElementById("btn-hunger");
// const sleepinessEl = document.getElementById("btn-sleepiness");
// const boredomEl = document.getElementById("btn-boredom");
// const lightsEl = document.getElementById("btn-lights");
// const age = document.getElementById("age");


// let ageCounter = null;
// let agePet =

// //this function will increase the pets age as it grows

// function ageCount() {
//     ageCounter = setInterval(function(){
//         agePet++;
//         age.innerText = "Age: " + agePet;
//         if (hunger == 10 || bore == 10 || sleep ==10) {

//         }
//     },3000);
// }

// let count = 0;
// let myCounter = null;

// function handleStartClick(){
//     myCounter = setInterval(function(){
//         count++;
//         countEl.innerText = "Count: " + count;

// //     console.log(count);
//     }, 1000);
// };

// // adding on click listeners to each element will enable the user to be able to click the 
// //button. The start button will start the count from 0
// startEl.addEventListener("click" , handleStartClick);

// // when the stop button is clicked your timer will stop and reset to 0
// function handleStopClick() {
//     clearInterval(myCounter);
//     count = 0;
//     countEl.innerText = "Count: " + count;
// };

// //when the hunger button is clicked, your count will start at 0
// function handleHungerClick(){
//     myCounter = setInterval(function(){
//     count++;
//     countEl.innerText = "Count: " + count;

//     }, 1000);
// };

// stopEl.addEventListener("click" , handleStopClick);


// // adding on click listeners to each element will enable the user to be able to click the 
// //button 

// hungerEl.addEventListener("click" , handleHungerClick);

// //when the boredom button is clicked, your count will start at 0
// function handleBoredomClick(){
//     myCounter = setInterval(function(){
//     count++;
//     countEl.innerText = "Count: " + count;

//     }, 1000);
// };

// // adding on click listeners to each element will enable the useer to be able to click the 
// //button 
// boredomEl.addEventListener("click" , handleBoredomClick);

// //when the sleepiness button is clicked, your count will start at 0
// function handleSleepinessClick(){
//     myCounter = setInterval(function(){
//     count++;
//     countEl.innerText = "Count: " + count;

//     }, 1000);
// };

// // adding on click listeners to each element will enable the useer to be able to click the 
// //button 
// sleepinessEl.addEventListener("click" , handleSleepinessClick);

// //this variable is named petName for the user to submit a name for the tamagotchi
// const petName = document.getElementById("petName");
// petName.addEventListener("submit" , (e) => {
//         e.preventDefault();
// });

// console.log(petName)







