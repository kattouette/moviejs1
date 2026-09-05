console.log('Happy developing ✨')
console.log(5 === "5"); // false — === звіряє і значення, і тип
console.log(5 == "5");  // true  — == перетворило "5" у число, а потім порівняло

let score = 0;
score += 10; // взяли старе значення, додали 10, поклали назад
console.log(score);  // 10

const age = 20;
const status = age >= 18 ? "Дорослий" : "Дитина";
console.log(status); // "Дорослий"


// let number = 4
// console.log(number %2 === 0);

let a = 1
let b = 2
if ( a>b ){
    console.log(a);
} else {
    console.log(b);
}

let email = "kate@mail.com";
let password = "";
if (email && password) {
    console.log("Entered");
} else {
    console.log("Fill up a valid info");
}

let hour = 21
if (hour <= 7) {
    console.log("Good morning");
} else if (hour < 12) {
    console.log("Good day");
} else if (hour < 18) {
    console.log("Good evening");
} else if (hour < 22)
    console.log("Good night");

let number = 20;
if (number % 3 === 0 && number % 5 === 0) {
    console.log("fizzbuzz");
} else if (number % 3 === 0) {
    console.log("fizz");
} else if (number % 5 === 0) {
    console.log("buzz");
} else {
    console.log(number);
}

const address = `Місто: Київ
Вулиця: Хрещатик, 1
Індекс: 01001`;

console.log(address);

let c = 9;
let d = 7;
console.log(`Sum: ${c + b}`);
console.log("Difference:", c - d);
console.log("Product:", c * d);
console.log("Remainder:", c % d);

let name = "Katya";
console.log(`Hello, ${name}!`);

let firstName = "Katya";
let lastName = "Karpova";
console.log(`Full name: ${firstName} ${lastName}`);

let price = 10;
let qty = 5;
console.log(`Total: ${price * qty} CAD`);

let home = `209 Consulate road
Mississauga, ON
Canada`;
console.log(home);

let plan = "beginner";
switch (plan) {
    case "free":
        console.log(0);
        break;
    case "pro":
        console.log(199);
        break;
    case "premium":
        console.log(399);
        break;
    default:
        console.log("Unknown plan");
}

let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong day");
}

let color = "red";
switch (color) {
    case "red":
        console.log("Stop");
    case "yellow":
        console.log("Attention");
    case "green":
        console.log("Go");
}

let month = 9;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;

    default:
        console.log("Unknown month");
}