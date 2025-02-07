const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling missing, leading to an unhandled promise rejection
    console.error('Error:', error); 
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  //In real-world scenarios, this could be database interaction, file reading, etc.
  const success = Math.random() < 0.5; // 50% chance of failure
  if (!success) {
    throw new Error('Something went wrong!');
  }
}