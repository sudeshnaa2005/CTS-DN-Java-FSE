console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Page Loaded Successfully");
};

// Data Types

const eventName = "Music Night";
const eventDate = "20-06-2026";
let seats = 20;

console.log(`Event: ${eventName} Date: ${eventDate}`);

seats++;
console.log(seats);

// Class

class Event {
    constructor(name, category, location, date, seats) {
        this.name = name;
        this.category = category;
        this.location = location;
        this.date = date;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

// Array

let events = [

    new Event(
        "Music Night",
        "Music",
        "Community Hall",
        "2026-06-20",
        20
    ),

    new Event(
        "Baking Workshop",
        "Workshop",
        "Town Center",
        "2026-06-25",
        15
    ),

    new Event(
        "Art Exhibition",
        "Art",
        "Gallery",
        "2026-06-30",
        10
    )
];

// push()

events.push(
    new Event(
        "Dance Show",
        "Music",
        "Open Ground",
        "2026-07-05",
        25
    )
);

// forEach()

events.forEach(function(event){

    if(event.checkAvailability()){
        console.log(event.name + " Available");
    }
    else{
        console.log(event.name + " Full");
    }

});

// Functions

function addEvent(name, category, location, date, seats){

    events.push(
        new Event(
            name,
            category,
            location,
            date,
            seats
        )
    );

}

function filterEventsByCategory(category){

    return events.filter(
        event => event.category === category
    );

}

// Closure

function registrationCounter(){

    let total = 0;

    return function(){

        total++;

        return total;
    };
}

const counter = registrationCounter();

console.log(counter());
console.log(counter());

// Object.entries()

events.forEach(function(event){

    Object.entries(event).forEach(
        ([key,value]) =>
        console.log(key,value)
    );

});

// map()

let displayNames = events.map(
    event => "Workshop on " + event.name
);

console.log(displayNames);

// spread operator

let copiedEvents = [...events];

// DOM

const eventContainer =
document.querySelector("#eventContainer");

function displayEvents(){

    eventContainer.innerHTML = "";

    events.forEach(function(event){

        let card =
        document.createElement("div");

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.category}</p>
            <p>${event.location}</p>
            <p>Seats : ${event.seats}</p>

            <button
            onclick="registerUser('${event.name}')">
            Register
            </button>
        `;

        eventContainer.appendChild(card);

    });

}

displayEvents();

// Registration

function registerUser(eventName){

    try{

        let event =
        events.find(
            e => e.name === eventName
        );

        if(!event){
            throw "Event Not Found";
        }

        if(event.seats <= 0){
            throw "No Seats Available";
        }

        event.seats--;

        displayEvents();

        alert("Registered Successfully");

    }

    catch(error){

        console.log(error);

    }

}

// onchange

document.querySelector(
"#categoryFilter"
).onchange = function(){

    let selected = this.value;

    if(selected === "All"){

        displayEvents();

        return;
    }

    let filtered =
    filterEventsByCategory(selected);

    eventContainer.innerHTML = "";

    filtered.forEach(function(event){

        let div =
        document.createElement("div");

        div.innerHTML =
        `<h3>${event.name}</h3>`;

        eventContainer.appendChild(div);

    });

};

// keydown

document.addEventListener(
"keydown",
function(e){

    console.log("Key Pressed:",e.key);

});

// Promise

fetch(
"https://jsonplaceholder.typicode.com/users"
)

.then(response => response.json())

.then(data => console.log(data))

.catch(error => console.log(error));

// Async Await

async function getEvents(){

    try{

        let response =
        await fetch(
        "https://jsonplaceholder.typicode.com/users"
        );

        let data =
        await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}

getEvents();

// Form

const form =
document.querySelector("#registerForm");

form.addEventListener(
"submit",
function(event){

    event.preventDefault();

    let name =
    form.elements["name"].value;

    let email =
    form.elements["email"].value;

    let selectedEvent =
    form.elements["event"].value;

    if(name === "" || email === ""){

        document.querySelector(
        "#error"
        ).innerHTML =
        "Please fill all fields";

        return;
    }

    document.querySelector(
    "#error"
    ).innerHTML = "";

    submitRegistration({
        name,
        email,
        selectedEvent
    });

});

// POST Request

function submitRegistration(data){

    setTimeout(function(){

        fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method:"POST",

            headers:{
                "Content-Type":
                "application/json"
            },

            body:
            JSON.stringify(data)
        })

        .then(response => response.json())

        .then(data => {

            alert(
            "Registration Successful"
            );

            console.log(data);

        })

        .catch(error => {

            alert(
            "Registration Failed"
            );

            console.log(error);

        });

    },2000);

}

// Default Parameter

function greetUser(name = "Guest"){

    console.log(
    `Welcome ${name}`
    );

}

greetUser();

// Destructuring

const {
    name,
    category,
    location
} = events[0];

console.log(name);
console.log(category);
console.log(location);

/*

JQUERY

$("#registerBtn").click(function(){

    $(".card").fadeOut();

});

Benefit of React/Vue:
Reusable Components
Faster Development
Better UI Management

*/