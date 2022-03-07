
 


// //Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 
    
// this variable will connect the DOM elements from HTML
const countEl = document.getElementById("my-count");
const startEl = document.getElementById("btn-start");
const stopEl = document.getElementById("btn-stop");
const hungerEl = document.getElementById("btn-hunger");
const sleepinessEl = document.getElementById("btn-sleepiness");
const boredomEl = document.getElementById("btn-boredom");
const lightsEl = document.getElementById("btn-lights");
const age = document.getElementById("age");


let ageCounter = null;
let agePet = 0;

//this function will increase the pets age as it grows

function ageCount() {
    ageCounter = setInterval(function(){
        agePet++;
        age.innerText = "Age: " + agePet;
        if (hunger == 10 || bore == 10 || sleep ==10) {

        }
    },3000);
}

let count = 0;
let myCounter = null;

function handleStartClick(){
    myCounter = setInterval(function(){
        count++;
        countEl.innerText = "Count: " + count;

//     console.log(count);
    }, 1000);
};

// adding on click listeners to each element will enable the user to be able to click the 
//button 
startEl.addEventListener("click" , handleStartClick);


function handleStopClick() {
    clearInterval(myCounter);
    count = 0;
    countEl.innerText = "Count: " + count;
};


function handleHungerClick(){
    myCounter = setInterval(function(){
    count++;
    countEl.innerText = "Count: " + count;

    }, 1000);
};

stopEl.addEventListener("click" , handleStopClick);


// adding on click listeners to each element will enable the user to be able to click the 
//button 

hungerEl.addEventListener("click" , handleHungerClick);


function handleBoredomClick(){
    myCounter = setInterval(function(){
    count++;
    countEl.innerText = "Count: " + count;

    }, 1000);
};

// adding on click listeners to each element will enable the useer to be able to click the 
//button 
boredomEl.addEventListener("click" , handleBoredomClick);


function handleHungerClick(){
    myCounter = setInterval(function(){
    count++;
    countEl.innerText = "Count: " + count;

    }, 1000);
};

// adding on click listeners to each element will enable the user to be able to click the 
//button 

hungerEl.addEventListener("click" , handleHungerClick);


function handleSleepinessClick(){
    myCounter = setInterval(function(){
    count++;
    countEl.innerText = "Count: " + count;

    }, 1000);
};

// adding on click listeners to each element will enable the useer to be able to click the 
//button 
sleepinessEl.addEventListener("click" , handleSleepinessClick);


const petName = document.getElementById("petName");
petName.addEventListener("submit" , (e) => {
        e.preventDefault();
});

console.log(petName)







