const calcOperations = require("./calcOperations");
const co = new calcOperations();
const sample = { nums: "1,2,3,3,4,5" };

describe("Test parseQueryValue", function () {
  it("Takes the user query string and returns an array with each element converted to a number", function () {
    expect(co.parseQueryValue(sample)).toEqual([1, 2, 3, 3, 4, 5]);
  });
});

describe("Test isValidArray", function () {
  it("Takes converted array, and checks that all elements are a number", function () {
    //Testing valid input
    expect(co.isValidArray([1, 2, 3, 3, 4, 5])).toEqual(true);
    //testing empty input
    expect(() => {
      co.isValidArray([]);
    }).toThrow("No data provided");
    //testing invalid input
    expect(() => {
      co.isValidArray(["foo", 2, 3]);
    }).toThrow("All elements must be a number");
  });
});

describe("Mean Function Test", function () {
  it("finds the mean of an array", function () {
    expect(co.mean(sample)).toEqual(3);
  });
});

describe("Median Function Test", function () {
  it("finds the median of an array", function () {
    expect(co.median(sample)).toEqual(3);
  });
});

describe("Mode Function Test", function () {
  it("finds the mode of an array", function () {
    expect(co.mode(sample)).toEqual(3);
  });
});
