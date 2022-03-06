
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

function handleHungerClick() {
    clearInterval(myCounter);
    count = 0;
    countEl.innerText = "Count: " + count;
};

startEl.addEventListener("click" , handleStartClick);


function pHunger () {
//     console.log(pHunger);

myCounter = setInterval(function(){
    count++
    stopMyCount ()
    myCountO.innerText= num;
},1000);
}

function stopMyCount() {
    if (num >=4){
        clearInterval(myCount)
        count = 0;
    }
}

hungerEl.addEventListener("click" , handleHungerClick);


// function pSleepiness () {
//     //     console.log(pSleepiness);
    
//     myCounter = setInterval(function(){
//         count++
//         stopMyCount ()
//         myCountO.innerText= num;
//     },1000);
//     }
    
//     function stopMyCount() {
//         if (num >=4){
//             clearInterval(myCount)
//             count = 0;
//         }
//     }
    
//     sleepinessEl.addEventListener("click" , handleSleepinessClick);


    function pBoredom () {
        //     console.log(pBoredom);
        
        myCounter = setInterval(function(){
            count++
            stopMyCount ()
            myCountO.innerText= num;
        },1000);
        }
        
        function stopMyCount() {
            if (num >=4){
                clearInterval(myCount)
                count = 0;
            }
        }
        
        sleepinessEl.addEventListener("click" , handleBoredomClick)
    


//     intervalID = setInterval(function () {

//             count += 1;
//             count.textContent = count;
//     }, 1000);
// });

// btnPause.addEventListener("click" , function () {
//     clearInterval(intervalID);
// });



// document.getElementById("abby").addEventListener("submit" , getName);

// event listener
// class Tamagotchi {
//     constructor(hunger, sleepiness, boredom, lights) {
//         this.hunger = hunger;
//         this.sleepiness = sleepiness;
//         this.boredom= boredom;
//         this.lights= lights;
//     }

// }