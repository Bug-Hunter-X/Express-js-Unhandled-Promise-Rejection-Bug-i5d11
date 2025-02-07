# Express.js Unhandled Promise Rejection Bug

This repository demonstrates a common bug in Express.js applications: unhandled promise rejections.  The bug occurs when an asynchronous operation within a route handler throws an error, but the error is not properly caught and handled.

## Bug Description
The `someAsyncOperation` function simulates an asynchronous operation that can fail. If it fails, an error is thrown. However, the route handler lacks a proper `catch` block to handle this error, resulting in an unhandled promise rejection.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `node bug.js` to start the server.
4. Refresh the browser at `http://localhost:3000` multiple times. You will eventually encounter an unhandled promise rejection error in your console due to the asynchronous operation failing.

## Solution
The solution involves adding a `.catch()` block to handle potential errors from the asynchronous operation within the route handler. This prevents unhandled promise rejections, making the application more robust and preventing unexpected crashes.

See the `bugSolution.js` file for the corrected code.