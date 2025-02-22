function printNumber(num: number): void {
  console.log(num);
}

function printNumberSafe(num: any): void {
  if (typeof num === 'number') {
    console.log(num);
  } else {
    console.error('Error: Invalid input type. Expected number.');
  }
}

printNumberSafe(123); // Correct usage
printNumberSafe("hello"); // Handles the error correctly