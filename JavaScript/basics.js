// String Functions
var str_num = 123;
var str = "123";
alert(str);
var userName = prompt("Enter your name:");
userName =
  userName.slice(0, 1).toUpperCase() +
  userName.slice(1, userName.length).toLowerCase();

// Number Functions
var x = 10;
var y = 3;
var z = x / y;
z = Math.floor(z);
var r = Math.random() * 6 + 1; // random number between 1 and 6
x == y; // comparison without type checking
x === y; // comparison with type checking

// Array Functions
var guestList = ["Alice", "Bob", "Charlie"];
guestList.includes("Alice");
guestList.pop(); // removes the last guest
guestList.push("David"); // adds a new guest
guestList.length;

function fizzbuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
