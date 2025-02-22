# TypeScript Type Assertion Bug

This example demonstrates a potential runtime error in TypeScript caused by the use of type assertions. Type assertions allow you to bypass TypeScript's type checking, which can lead to unexpected behavior if not used carefully. 

The `bug.ts` file contains a function that expects a number as input but uses a type assertion to accept a string. This will compile without error but will cause a runtime error when the function is called with a string.

The `bugSolution.ts` demonstrates how to address this issue by using appropriate type checking and handling potential errors.