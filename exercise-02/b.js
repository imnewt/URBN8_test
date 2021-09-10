// Using promise
const api = res => new Promise(resolve => {
  console.log(res);
  resolve(res);
});

const api2 = res => new Promise(resolve => {
  console.log(res);
  resolve(res);
});

// const api2 = res => new Promise(resolve => setTimeout(() => {
//   console.log(res);
//   resolve(res);
// }, 2000));

const api3 = res => new Promise(resolve => {
  console.log(res);
  resolve(res);
});

Promise.resolve(1)
.then(result => api(result))
.then(result => api2(result + 1))
.then(result => api3(result + 1));

// Will print to browser/nodejs console:
// result: 1
// result2: 2
// result3: 3