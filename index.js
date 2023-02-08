// document.getElementById('counter').innerText = 5;

let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

// function incrementer() {
//     let beam = 0
//     beams = beam += 1; beam++;
//     document.getElementById('counter').innerText = beams;
//     console.log(beam);
// }
// incrementer()


function myArr() {
    let arr = 42; ray = 48;
    Arr = arr + ray
    console.log(Arr);
}
myArr();
 
let lap1 = 34
let lap3 = 33
let lap6 = 36

function myBid() {
    lap1 + lap3 + lap6
    console.log(lap1 + lap3 + lap6);
}
myBid()

let countEl = document.getElementById("count")
let saveEl = document.getElementById('save-el')

count = 0;
function increment() {
    count += 1;
    countEl.innerText = count;
    
}

function decrement() {
    count -= 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}




// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph



var username = "per"
var message = "You have three new notifications";
console.log(message + ", " + username + " " + "Hour" + "!");

var messageToUser = (message + ", " + username + " " + "Hour" + "!");
console.log(messageToUser);

var name = "Adeoye Sodeeq Ademola"
var greeting = "Hi, my name is "
var myGreeting = greeting + name + "!";
console.log(myGreeting);

console.log("100" + 100 + 100);
console.log(100 + '100' + 100);
console.log(100 + 100 + '100');

var welcomeEl = document.getElementById('welcome-el')

var names = "Awesome User"
var greetings = "Welcome back"
myGreetings = greetings + "," + " " + names

welcomeEl.innerText = myGreetings;
console.log(myGreetings);

welcomeEl.innerText += " " + "👋"