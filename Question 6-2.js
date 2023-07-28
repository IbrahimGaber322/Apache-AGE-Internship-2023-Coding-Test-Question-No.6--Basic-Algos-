function checkMissing(arr) {
  // Initialize a counter to the first element of the array
  var counter = arr[0];
  // Loop through the array
  for (let i = 0; i < arr.length + 1; i++) {
    // If the current element is not equal to the counter, then the missing number is between the previous element and the current element
    if (counter != arr[i]) return arr[i - 1] + 1;
    // Otherwise, increment the counter
    counter++;
  }
  // If no missing number is found, return null
  return null;
}
