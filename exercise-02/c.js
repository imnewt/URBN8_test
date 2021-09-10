// Using async await
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

(async (init) => {
  try {
    const result = await api(init);
    const result2 = await api2(result + 1);
    const result3 = await api3(result2 + 1);
  } catch(err) {
    console.log(err);
  }
})(1);

// Will print to browser/nodejs console:
// result: 1
// result2: 2
// result3: 3