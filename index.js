// Activity 1 Understanding promises
// TASK 1 create a promise that resolves with a message after a 2_second timeout and log the message to the console

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolved succssfully");
//   }, 2000);
// });

// promise.then((message) => {
//   console.log(message);
// });

// TASK 2 create a promise that rejects with an error message after a 2_second timeout and handle the error using .catch()

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error occured");
//   }, 2000);
// });

// console.log(
//   promise2.catch((error) => {
//     console.log(error);
//   })
// );

// Activity 2 Chaining Promises
// TASK 3 Create a sequence of promises that simulate fetching data from a server . Chain the promises to log message in a specific order

// const fetchData = (data, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log(data, "data")
//       resolve(data);
//     }, delay);
//   });
// };

// fetchData("data", 1000)
//   .then(() => {
//     return fetchData("data 2", 2000);
//   })
//   .then((processedData) => {
//     console.log(processedData, "procc");
//   });

// Activity 3 Using Async/Await

// TASK 4 Write an async function that waits for a promise to resolve and then logs the resolved value

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved");
//   }, 1000);

//   reject("rejected");
// });

// async function sum() {
//   const result = await promise;
//   console.log(result);
//   return result;
// }

// sum();

// TASK 5 write an async function that handles a rejected promise using try catch and logs the error message

// async function promiseRejected() {
//   try {
//     return await promise;
//   } catch (error) {
//     console.log(error);
//   }
// }

// promiseRejected();

// Activity 4 Fetching data from an API

// TASK 6 use the fetch API to get data from a public API and log the response data to the console using promises

// fetch("https://dummyjson.com/products/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Fetch error:", error));

// fetch("https://dummyjson.com/pryoducts/41")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// TASK 7 use the fetch API to get data from a public API and log the response data to the console using async/await

async function fetchData() {
  const response = await fetch("https://dummyjson.com/products/1");
  console.log(response, "rspone");
  const data = await response.json();

  console.log(data);
}

fetchData();

//  Activity 5 Concurrent promises

// TASK 8 use promise.all to wait for multiple promises to resolve and then log their values

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 resolved");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 resolved");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 resolved");
  }, 9000);
});

// Promise.all([p1, p2, p3]).then((response) => {
//   console.log(response);
// });

// TASK 9 Use the promise.race to log the value of the first promise that resolves among multiple promises

Promise.race([p1, p2, p3]).then((response) => {
  console.log(response, "response");
});
