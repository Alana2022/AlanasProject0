//accessing the DOM elements of HTML 
const startEl = document.getElementById("start");
const hungerEl = document.getElementById("btn-hunger");
const sleepinessEl = document.getElementById("btn-sleepiness");
const boredomEl = document.getElementById("btn-boredom");
const petSurvived = document.getElementById("survived")
const feed = document.getElementById("hungry");
const tired = document.getElementById("sleepy")
const weary = document.getElementById("bored");
const lifeTime = document.getElementById("age");

// adding a value to each variable 
let hungry = 1;
let sleepy = 1;
let bored = 1;
let age = 0;

// giving each object an absent value
let startCounter = null;
let hungerCounter = null;
let sleepinessCounter = null;
let boredomCounter = null;
let ageCounter = null;

//calling the funtion "start" to increment the age, hunger, sleepinees and bordeom elements 
function startCount(){
    startCounter = setInterval(function () {
        hungry++;
        sleepy++;
        bored++;
        age = age+1;

        feed.innerText = "Hunger: " + hungry;
        if (hungry == 10)
        clearInterval(startCounter);
        // petSurvived.innerText = "Your pet Starved to death";

        //when the value of sleepy reaches 10 this "" message will display
         tired.innerText = "Sleepiness: " + sleepy;
        if (sleepy == 10)
        petSurvived.innerText = "Pet Went to Pet Heaven";

        weary.innerText = "Boredom: " + bored;
        if (bored == 10)
        petSurvived.innerText = "Pet Went to Pet Heaven";

        lifeTime.innerText = "Age: " + age;
        
    //time interval for increase is ser at two seconds
    }, 2000);
};    

//this function will decrement the value of hunger when the feed button is clicked
function hungerCount(){
    // hungerCounter = setInterval(function () {
        hungry--;
        feed.innerText = "Hunger: " + hungry;
        // if (hungry == 10)
        // petSurvived.innerText = "Your pet Starved to death";
};      

//this function will decrement the value of sleepiness when the feed button is clicked
function sleepinessCount(){
    // sleepinessCounter = setInterval(function () {
        sleepy--;
        tired.innerText = "Sleepiness: " + sleepy;

};

//this function will decrement the value of boredom when the feed button is clicked
function boredomCount(){
    // boredomCounter = setInterval(function () {
        bored--;
        weary.innerText = "boredom: " + bored;

};

// function ageCount() {
//     ageCounter = setInterval(function(){
//         age = age+1;
//         lifeTime.innerText = "Age: " + age;
//         if (hungry == 10 || bored == 10 || sleepy ==10); 
//         // clearInterval(ageCounter);

//     },3000);
// }

//adding an event listener and on click method to each element to execute a callback funtion when 
//when the button is clicked
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





