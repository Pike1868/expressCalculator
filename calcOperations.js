const ExpressError = require("./expressError");

function parseNumsFromQuery(query) {
  if (query["nums"] === "") {
    throw new ExpressError("No data provided", 400);
  }
  //takes query string and converts to an array of numbers
  let parsedNumsArr = query["nums"]
    .split(",")
    .filter((char) => char !== "")
    .map(Number);

  return parsedNumsArr;
}

function validateNumsInArr(numsArr) {
  for (let num of numsArr) {
    if (typeof num !== "number" || isNaN(num)) {
      throw new ExpressError("All elements of query must be a number", 400);
    }
  }

  console.log("All elements in arr have been validated");
  return true;
}

function mean(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

function median(arr) {
  const len = arr.length;
  arr.sort((a, b) => a - b);
  if (len % 2 === 1) {
    return arr[Math.floor(len / 2)];
  } else {
    const firstMedianElement = arr[len / 2 - 1];
    const secondMedianElement = arr[len / 2];

    return (firstMedianElement + secondMedianElement) / 2;
  }
}

function mode(arr) {
  let numCount = {};

  for (let num of arr) {
    if (numCount[num]) {
      numCount[num]++;
    } else {
      numCount[num] = 1;
    }
  }

  let maxCount = Math.max(...Object.values(numCount));
  let modes = [];
  for (let num in numCount) {
    if (numCount[num] === maxCount) {
      modes.push(Number(num));
    }
  }
  return modes.length === 1 ? modes[0] : modes;
}

function all(arr) {
  let meanResult = mean(arr);
  let medianResult = median(arr);
  let modeResult = mode(arr);

  return {
    operation: "all",
    mean: meanResult,
    median: medianResult,
    mode: modeResult,
  };
}

module.exports = {
  parseNumsFromQuery,
  validateNumsInArr,
  mean,
  median,
  mode,
  all,
};
