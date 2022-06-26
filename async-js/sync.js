const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Starting</h1>`;
console.log("Starting");

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const syncCallbackFunction = (number, start) => {
  const numIsPrime = isPrime(number);
  console.log(
    "isPrime: ",
    number,
    " result: ",
    numIsPrime,
    " start: ",
    start,
    " end",
    new Date().getSeconds()
  );
};

const sleepWithCallback = (num, callback) => {
  const start = Date.now();
  const sleep = num * 1000;
  while (true) {
    if (Date.now() - start > sleep) break;
  }
  callback(num, new Date(start));
};

const syncWithCallback = () => {
  for (let index = 0; index < 10; index++) {
    console.log("sleeping:\t", index, "\t", new Date());
    sleepWithCallback(index, syncCallbackFunction);
  }
};

syncWithCallback();
console.log("All done");
