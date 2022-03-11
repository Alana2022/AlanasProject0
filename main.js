
 //below I am creating a Class for the tamagotchi and then I will instantiate passingin the name as "Abby" and console log to verify that my code my printed correctly.  
 //The metrics for hunger, sleepiness and boredom will start at 1.
// class Tamagotchi {
//     constructor(name) {
//         this.name = name;
//         this.age = 0;
//         this.hunger= 1;
//         this.sleepiness= 1;
//         this.boredom= 1;
//     }
// }

const startEl = document.getElementById("start");
const hungerEl = document.getElementById("btn-hunger");
const sleepinessEl = document.getElementById("btn-sleepiness");
const boredomEl = document.getElementById("btn-boredom");
const petSurvived = document.getElementById("survived")
const feed = document.getElementById("hungry");
const tired = document.getElementById("sleepy")
const weary = document.getElementById("bored");
const lifeTime = document.getElementById("age");


// hungerCount();
// sleepCount();
// bordedomCount();
// ageCount();

let hungry = 1;
let sleepy = 1;
let bored = 1;
let age = 0;

let startCounter = null;
let hungerCounter = null;
let sleepinessCounter = null;
let boredomCounter = null;
let ageCounter = null;


function startCount(){
    startCounter = setInterval(function () {    
        lifeTime.innerText = "Age: " + age;
//         // if (age == 10)
//         petSurvived.innerText = "Your Pet Starved to death";
    }, 5000);

};

function startCount(){
    startCounter = setInterval(function () {
        hungry++;
        sleepy++;
        bored++;
        // age++;

        feed.innerText = "Hunger: " + hungry;
        if (hungry == 10)
        clearInterval(startCounter);
        // petSurvived.innerText = "Your pet Starved to death";

        tired.innerText = "Sleepiness: " + sleepy;
        if (sleepy == 10)
        petSurvived.innerText = "Pet Went to Pet Heaven";

        weary.innerText = "Boredom: " + bored;
        if (bored == 10)
        petSurvived.innerText = "Pet Went to Pet Heaven";

        // lifeTime.innerText = "Age: " + age;
        // if (age == 10)
        // petSurvived.innerText = "Pet Went to Pet Heaven";

      
        // clearInterval(hungerCounter);
//     console.log(count);
    }, 2000);
};    


function hungerCount(){
    // hungerCounter = setInterval(function () {
        hungry--;
        feed.innerText = "Hunger: " + hungry;
        // if (hungry == 10)
        // petSurvived.innerText = "Your pet Starved to death";
};      
        
function sleepinessCount(){
    // sleepinessCounter = setInterval(function () {
        sleepy--;
        tired.innerText = "Sleepiness: " + sleepy;

};

function boredomCount(){
    // boredomCounter = setInterval(function () {
        bored--;
        weary.innerText = "boredom: " + bored;

};

function ageCount() {
    ageCounter = setInterval(function(){
        age++;
        lifeTime.innerText = "Age: " + age;
        // if (hungry == 10 || bored == 10 || sleepy ==10) 
        // clearInterval(ageCounter);

    },3000);
}

//adding an event listener and passing click to the function
startEl.addEventListener('click', startCount);
hungerEl.addEventListener('click', hungerCount);
sleepinessEl.addEventListener('click', sleepinessCount);
boredomEl.addEventListener('click', boredomCount);


// lightsBtn.addEventListener("click", (event) => {
//     console.log("you clicked me")
// })
// hungerButton.addEventListener("click", (event) => {
// console.log("you clicked me")

// });

// this code will add the ability to name the pet.
const nameSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target.petName.value) 

    //this will access the DOM element id of the HTML
    document.getElementById("showName").innerHTML = event.target.petName.value
};

//adding in functionality for the each button to click

// //Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 
    




// //this function will increase the pets age as it grows





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


//defining methods for the tamagotchi

//     hungerTamagotchi() {
//         this.hunger--
//     }

//     sleepinessTamagotchi() {
//         this.sleepiness - 5
//     }

//     boredomTamagotchi() {
//         this.bordeom--
//     }
// }

