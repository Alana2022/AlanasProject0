
 //take the name of your tamagotchi and save it to the variable "dog"

// Make a form with a text box so the user can add a name

getName = (e) => {
    e.preventDefault()
    console.log(e.target.name.value);
console.log(e)
}

// //Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 
    

const countEl = document.getElementById("my-count");
const startEl = document.getElementById("btn-start");
const hungerEl = document.getElementById("btn-hunger");
const sleepinessEl = document.getElementById("btn-sleepiness");
const boredomEl = document.getElementById("btn-boredom");
const lightsEl = document.getElementById("btn-lights");

let count = 0;
let myCounter = null;

function handleStartClick(){
    myCounter = setInterval(function(){
        count++;
        countEl.innerText = "Count: " + count;

//     console.log(count);
    }, 1000);
};
startEl.addEventListener("click" , handleStartClick);


function handleHungerClick(){
    myCounter = setInterval(function(){
    count++;
    countEl.innerText = "Count: " + count;

    }, 1000);
};

hungerEl.addEventListener("click" , handleHungerClick);


function handleBoredomClick(){
    myCounter = setInterval(function(){
    count++;
    countEl.innerText = "Count: " + count;

    }, 1000);
};

boredomEl.addEventListener("click" , handleBoredomClick);





// function pHunger(){

// }




