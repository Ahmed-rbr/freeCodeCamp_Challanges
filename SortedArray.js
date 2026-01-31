// // Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

// // If the given array is:

// // In ascending order (lowest to highest), return "Ascending".
// // In descending order (highest to lowest), return "Descending".
// // Not sorted in ascending or descending order, return "Not sorted".

// Tests
// Waiting:1. isSorted([1, 2, 3, 4, 5]) should return "Ascending".
// Waiting:2. isSorted([10, 8, 6, 4, 2]) should return "Descending".
// Waiting:3. isSorted([1, 3, 2, 4, 5]) should return "Not sorted".
// Waiting:4. isSorted([3.14, 2.71, 1.61, 0.57]) should return "Descending".
// Waiting:5. isSorted([12.3, 23.4, 3
// 4.5, 45.6, 56.7, 67.8, 78.9]) should return "Ascending".
// Waiting:6. isSorted([0.4, 0.5, 0.3]) should return "Not sorted".

const isSorted = (arr) => {
  let asc = true;
  let desc = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) asc = false;
    if (arr[i] > arr[i - 1]) desc = false;
  }

  if (asc) return "Ascending";

  if (desc) return "Descending";

  return "Not sorted";
};

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([3.14, 2.71, 1.61, 0.57]));

console.log(isSorted([0.4, 0.5, 0.3]));
