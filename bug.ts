function printNumber(num: number): void {
  console.log(num);
}

printNumber("hello"); // This will compile without error because of type assertion
printNumber(123);