const numbers = [1, 2, 3, 4, 5];
const friends = ["Alice", "Bob", "Charlie"];
const passed = [true, false, true, false];
const mixedArray = [1, "Alice", true, null];

// !! for of loop to print each number
for (const number of numbers) {
  console.log(number);
}

// !! for of loop to print each friend's name
for (const friend of friends) {
  console.log(friend);
}

// !! for of loop to print each boolean value
for (const pass of passed) {
  console.log(pass);
}

// !! for of loop to print each element in the mixed array
for (const element of mixedArray) {
  console.log(element);
}
