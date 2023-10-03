const ExpressError = require("./expressError");

class calcOperations {
  parseQueryValue(query) {
    let numsArr = query["nums"]
      .split(",")
      .filter((n) => n !== "")
      .map(Number);
    return numsArr;
  }

  // Should I create a new express error here and return to be handled in routes?
  isValidArray(nums) {
    if (nums.length === 0) {
      throw new ExpressError("No data provided", 400);
    }

    for (let num of nums) {
      if (typeof num !== "number" || isNaN(num)) {
        throw new ExpressError("All elements must be a number", 400);
      }
    }
    return true;
  }

  mean(query) {
    let nums = this.parseQueryValue(query);
    this.isValidArray(nums);

    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    return sum / nums.length;
  }

  median(query) {
    let nums = this.parseQueryValue(query);
    this.isValidArray(nums);

    const len = nums.length;

    nums.sort((a, b) => a - b);

    if (len % 2 === 1) {
      return nums[Math.floor(len / 2)];
    } else {
      const firstMedianElement = nums[len / 2 - 1];
      const secondMedianElement = nums[len / 2];

      return (firstMedianElement + secondMedianElement) / 2;
    }
  }

  mode(query) {
    let nums = this.parseQueryValue(query);
    this.isValidArray(nums);

    let numCount = {};

    for (let num of nums) {
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
}

module.exports = calcOperations;
