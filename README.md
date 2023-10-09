## **Express Calculator**

Create three base routes, ***/mean***, ***/median***, ***/mode*** that all accept GET requests

Each route takes a query key of ***nums*** which is a comma-separated list of numbers. For example, if I want to get the mean of 1, 3, 5, and 7, that would look like be a GET request to ***/mean?nums=1,3,5,7***.

The response of each operation should be JSON which looks like this:

```json
response: {
  operation: "mean",
  value: 4
}
```

Handle the following errors:

- Passing in an invalid number (NaN errors). For instance, ***/mean?nums=foo,2,3*** should respond with a ***400 Bad Request*** status code and a response that saying something like: ***foo is not a number.***
- Empty input: ***/mean*** without passing any nums should respond with a ***400 Bad Request*** status code saying something like ***nums are required.***

Write unit tests for ***mean***, ***median*** and ***mode***.

## **Further Study**

- Make a route called ***/all*** that does all three operations at the same time, with the response from each of them as a key in the JSON response. It can look like this:


```json
response: {
  operation: "all",
  mean: 12
  median: 10,
  mode: 8
}
```