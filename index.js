console.log("103. neoG Camp levelOne [ES1_HW_1]");

const isBirthday = true;
// your code here
let age = 1;
if (isBirthday) {
  age++;
}

console.log("Program 1:");
console.log(`Current Age: ${age}`);
console.log("\n");

// your code here

const passengerAge = 20;
const discountedPrice = 15;
const ticketPrice = 100;
console.log("Program 2:");
if (passengerAge > 60) {
  console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
} else {
  console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log("\n");

console.log("Program 3");
const num1 = 10;
const num2 = 20;
const num3 = 15;

if (num3 > num1 && num3 > num2) {
  console.log(`The third number ${num3} is the largest`);
} else {
  console.log(`The third number ${num3} is not the largest`);
}

console.log("\nProgram 4: \n\n");
const item1 = "Saree";
const item2 = "Kurta";
const item3 = "Jeans";
const item4 = "Shoes";

const price1 = 500;
const price2 = 300;
const price3 = 900;
const price4 = 400;

const optionalDeliveryCharge = 99;

let totalPrice = price1 + price2 + price3 + price4;

let deliveryMessage;

if (totalPrice < 1999) {
  totalPrice = totalPrice + optionalDeliveryCharge;
  deliveryMessage = "Total Price: " + totalPrice;
} else if (totalPrice > 1999) {
  deliveryMessage = "No Delivery Charge";
}

function generateCard() {
  console.log("Shopping Cart");
  console.log("---- ---- ---- ---- ----");
  console.log(`Item: ${item1}, Price: ${price1}`);
  console.log(`Item: ${item2}, Price: ${price2}`);
  console.log(`Item: ${item3}, Price: ${price3}`);
  console.log(`Item: ${item4}, Price: ${price4}`);
  console.log("---- ---- ---- ---- ----");
  console.log(`Delivery Charge: ${deliveryMessage}`);
  console.log("---- ---- ---- ---- ----");
  console.log("Total Cart Price", totalPrice);
}

generateCard();

console.log("\nProgram 5");

let num = 1;

if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

console.log("\nProgram 6");

const marks1 = 85;
const marks2 = 90;
const marks3 = 78;

const student1 = "Rahul";
const student2 = "Priya";
const student3 = "Tina";

if (marks1 > marks2 && marks1 > marks3) {
  console.log(`${student1} has the highest marks of ${marks1}`);
} else if (marks2 > marks1 && marks2 > marks3) {
  console.log(`${student2} has the highest marks of ${marks2}`);
} else if (marks3 > marks1 && marks3 > marks2) {
  console.log(`${student3} has the highest marks of ${marks3}`);
} else {
  console.log(`its a draw`);
}
