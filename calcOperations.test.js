const {
  parseNumsFromQuery,
  validateNumsInArr,
  mean,
  median,
  mode,
  all,
} = require("./calcOperations");
const sampleUserQuery = { nums: "1,2,3,3,4,5" };
const sampleArr = [1, 2, 3, 3, 4, 5];

describe("Test parseNumsFromQuery", function () {
  it("Takes the user query string and returns an array with each element converted to a number", function () {
    expect(parseNumsFromQuery(sampleUserQuery)).toEqual([1, 2, 3, 3, 4, 5]);
  });
  it("Throws an error if the parsed array is empty", function () {
    //testing empty query
    expect(() => {
      parseNumsFromQuery({ nums: "" });
    }).toThrow("No data provided");
  });
});

describe("Test validateNumsInArr", function () {
  it("Takes converted array, and checks that all elements are a number", function () {
    //Testing valid input
    expect(validateNumsInArr([1, 2, 3, 3, 4, 5])).toEqual(true);
    //testing invalid input
    expect(() => {
      validateNumsInArr(["foo", 2, 3]);
    }).toThrow("All elements of query must be a number");
  });
});

describe("Mean Function Test", function () {
  it("finds the mean of an array", function () {
    expect(mean(sampleArr)).toEqual(3);
  });
});

describe("Median Function Test", function () {
  it("finds the median of an array", function () {
    expect(median(sampleArr)).toEqual(3);
  });
});

describe("Mode Function Test", function () {
  it("finds the mode of an array", function () {
    expect(mode(sampleArr)).toEqual(3);
  });
});

describe("All Function Test", function () {
  it("Tests that the All function finds the mean, median, and mode of an array and returns an object with each result and the name of the operation", function () {
    expect(all([1, 2, 3, 3, 4, 5])).toEqual({
      operation: "all",
      mean: 3,
      median: 3,
      mode: 3,
    });
  });
});
