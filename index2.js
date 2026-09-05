// let b=2;
// console.log(b);
//
//
// let c=1;
// let s=10;
// console.log(`${c} шт по ${s} грн = ${c*s}грн`);
//
// const day = 'понеділок';
// const temp = 21;
// // const weather = 'У ' + day + ' буде ' + temp + ' градуси, а вночі ' + (temp - 8) + '.';
// console.log(`weather у ${day} буде ${temp} градуси, а вночі ${temp - 8}.`);
//
// for (let i = 0; i <= 10; i++) {
//     console.log("Hello!");
// }
//
//
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
//
//
//
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 × ${i} = ${5 * i}`);
// }
//
// let number = 10;
// while (number > 0) {
//     console.log(number);
//     number--;
// }
//
// function average(a, b) {
//     return (a + b) / 2;
// }
// console.log(average(20, 20));
//
// function getRectangleArea(width = 7, height = 8) {
//     return width * height;
// }
// console.log(getRectangleArea(5,5));
//
//
// function isAdult(age) {
//     return age >= 18 && age <= 65;
// }
// console.log(isAdult(20));
// console.log(isAdult(62));
// console.log(isAdult(12));
//
// function getDayPart(hour) {
//     if (hour >= 0 && hour < 6) {
//         return "Ніч";
//     } else if (hour >= 6 && hour < 12) {
//         return "Ранок";
//     } else if (hour >= 12 && hour < 18) {
//         return "День";
//     } else if (hour >= 18 && hour <= 23) {
//         return "Вечір";
//     }
// }
// console.log(getDayPart(2));
// console.log(getDayPart(8));
// console.log(getDayPart(15));
// console.log(getDayPart(20));
//
// const sum = (a, b) => {
//     return a + b;
// };
//
// // const applyOperation = (a, b, operation) => operation(a, b);
// // const checkout = (a, b) => a + b;
// // console.log(applyOperation(2, 3, checkout));
// //
// // const meet = (name) => `Hi, ${name}!`;
// // console.log(meet("Kate"));
// //
// // const customer = {
// //     name: "Катя",
// //     age: 27,
// //     greet() {
// //         console.log("Привіт, я " + this.name);
// //     }
// // };
// // customer.greet();
// //
// // const calculator = {
// //     add(a, b) {
// //         this.result = a + b;
// //         console.log(this.result);
// //     },
// //     subtract(a, b) {
// //         this.result = a - b;
// //         console.log(this.result);
// //     },
// //     multiply(a, b) {
// //         this.result = a * b;
// //         console.log(this.result);
// //     },
// //     divide(a, b) {
// //         this.result = a / b;
// //         console.log(this.result);
// //     }
// // };
// //
// // calculator.add(6, 8);
// // calculator.subtract(13, 4);
// // calculator.multiply(4, 4);
// // calculator.divide(9, 2);
// //
// //
// // const account = {
// //     balance: 2000,
// //     deposit(sum) {
// //         this.balance = this.balance + sum;
// //     },
// //     withdraw(sum) {
// //         this.balance = this.balance - sum;
// //     }
// // };
// // const depositAmount = 700;
// // const withdrawAmount = 400;
// // account.deposit(depositAmount);
// // account.withdraw(withdrawAmount);
// // console.log(account.balance);
// // Повертає рядок - Студентка Анна Коваль (роль: девелопер)
// const student = {firstName: "Анна", lastName: "Коваль", role: "developer" };
// function meetstudent(studparam) {
//     return `Студентка ${studparam.firstName} ${studparam.lastName} (роль: ${studparam.role})`;
// }
// meetstudent(student)
// console.log(meetstudent(student));
//
// const laptop={ brand:"Apple MacBook Air", price: "40000 UAH", inStock: "true"};
// function displayCard(laptop){
//     return `Item: ${laptop.brand},
//      Price: ${laptop.price},
//       Stock: ${laptop.inStock}`;
// }
// console.log(displayCard(laptop));
//
// console.log(laptop.brand);
//
//
// function showPassword(userPassword) {
//     if (userPassword.length < 8) {
//         console.log(true);
//     } else {
//         console.log(false)
//     }
// }
// console.log(showPassword("qwerty1"));
//
//     const user= {name:"Олена", age:19};
// function meetUser(user){
//     user.age = user.age +1;
// return `З днем народження, ${user.name}! Тобі тепер ${user.age} років.`
// }
// console.log(meetUser(user));
//
// // Написати функцію getCheaperBook(book1, book2), яка приймає два об'єкти книг (у кожної є title та price) і
// // повертає назву тієї книги, яка дешевша.
//
// const bookPotter={title:"Harry Potter", price:200};
// const bookGatsby={title:"Great Gatsby", price:400};
// function getCheaperBook(book1, book2){
//     if (book1.price < book2.price){
//         console.log(book1.title);
//     } else {
//         console.log(book2.title);
//     }
// }
// console.log(getCheaperBook(bookPotter, bookGatsby));
//
// // Написати функцію getFinalPrice(product), яка перевіряє, чи є в об'єкті товару знижка discount.
// // Якщо є — віднімає її, якщо немає — повертає звичайну price
//
// const productPhone={title:"Iphone", price:500, discount:10};
// const productTablet={title:"IpadAir", price:600, discount:null};
// function getFinalPrice(product){
//     if (product.discount !=null) {
//         return product.price - product.discount;
//     } else  {
//         console.log(product.price)
//     }
// }
// console.log(getFinalPrice(productPhone));
// console.log (getFinalPrice(productTablet));
//
// const users = [
//     {
//         id: 1,
//         name: "Олена",
//         age: 19,
//         role: "student",
//         city: "Київ",
//         isVIP: true
//     },
//     {
//         id: 2,
//         name: "Діана",
//         age: 21,
//         role: "developer",
//         city: "Львів",
//         isVIP: false
//     },
//     {
//         id: 3,
//         name: "Софія",
//         age: 18,
//         role: "designer",
//         city: "Одеса",
//         isVIP: true
//     }
// ];
// // for (let i=0; i<users.length; i++) {
// //     console.log(users[i].name);
// // }
// // const names = users.map((user) => user.name);
// //     console.log(names)
// //
// // const studentUser = users.find((user) => user.role === "student");
// //
// // const roles = ["developer", "designer", "student"];
// //
// // const hasStudent = roles.includes("student");
//
// const studentUser = users.find((user) => user.role.includes("student"));
// console.log(studentUser);

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num ** 2);
// console.log(squares);
//
// const users = [
//     { name: 'Іван', age: 25 },
//     { name: 'Марія', age: 16 },
//     { name: 'Олег', age: 18 },
//     { name: 'Настя', age: 14 },
// ];
// const adults = users.filter(user => user.age >= 18);
// console.log(adults);
//
//
// const products = [
//     { name: 'Телефон', price: 12000 },
//     { name: 'Кабель', price: 150 },
//     { name: 'Ноутбук', price: 35000 },
// ];
// const ascByPrice = [...products].sort((a, b) => a.price - b.price);
// console.log(ascByPrice);
//
// const cart = [
//     { name: 'Яблука', price: 30, qty: 2 },
//     { name: 'Хліб', price: 25, qty: 1 },
//     { name: 'Молоко', price: 40, qty: 3 },
// ];
// const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
// console.log(total);
//
// const goods = [
//     { name: 'Телефон', inStock: true },
//     { name: 'Планшет', inStock: false },
//     { name: 'Навушники', inStock: true },
// ];
// const outOfStock = goods.find(item => item.inStock === false);
// console.log(outOfStock);

//     const breakfasts = [ 'Авокадо тост', 'Вівсянка'];
//     breakfasts.push('Омлет');
// breakfasts.unshift('Сирники');
// console.log(breakfasts);
//
// const cities = [
//     { name: 'київ'},
//     { name: 'львів'},
//     { name: 'одеса'},
// ];
// const CapitalLetter = cities.map (function(city){
//     return city.name.toUpperCase()
// })
// console.log(CapitalLetter);
//
// const numbers = [85, 92, 60, 100, 74];
// const upperScore = numbers.filter (function(number) {
//     return number >=80
// })
// console.log(upperScore);
//
//
// const brands = ['Zara', 'Mango', 'COS', 'H&M'];
// const longName = brands.filter (function(brand){
//     return brand.length > 3
// })
// console.log(longName);
//
// const products = [
//     { id: 1, title: 'Телефон' },
//     { id: 2, title: 'Ноутбук' }
// ];
// const currentItem = products.find (function(product){
//     return product.title = 'Ноутбук'
// })
// console.log(currentItem);
//
// // Перевір, чи всі покупки у списку ціною до 1000 грн: [150, 300, 800, 450].
//
// const prices = [150, 300, 800, 450];
// const lowPrice = prices.every (function(price){
//     return price < 100
// })
// console.log(lowPrice);
//
// // Масив дівчат-учениць. Знайди ученицю за імʼям Софія, перевір чи є хоч одна повнолітня, і чи всі здали проєкт.
//
//     const students = [
//     { name: "Аня", age: 17, projectDone: false },
//     { name: "Марія", age: 15, projectDone: false },
//     { name: "Софія", age: 19, projectDone: false }
// ];
//     const findStudent = students.find (student => student.name = 'Софія')
// console.log(findStudent);
//     const adultStudent = students.some (student => student.age > 18)
// console.log(adultStudent);
//     const projectStudent = students.every (student=> student.projectDone)
// console.log(projectStudent);

const user = { name:"Оля", age: 20};
const{name, age} = user;
console.log(name);
console.log(age);

const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first);
console.log(second);

const student = { name:"Оля", age: 20, city:"unknown"};
const{city} = student;
console.log(city);

function displayCard ({ name, stock})
{
console.log(`${name}, ${10} pcs`);
}
displayCard({name:"Ipad", stock:10});

const quantity1 = [1, 2];
const quantity2 = [3, 4];

const combined = [...quantity1, ...quantity2];
console.log(combined);

const original = [8,9,10];
const copy = [...original];
copy.push(11);
conosole.log(copy);