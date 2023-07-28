function checkPalindrome() {
  // Prompt the user to enter a word
  let user_input = prompt("Enter a word: ");
  // Check if the word is a palindrome by comparing it to its reverse
  if (user_input === user_input.split("").reverse().join("")) {
    // If the word is a palindrome, print a message saying so
    console.log("The word is a palindrome");
  } else {
    // If the word is not a palindrome, print a message saying so, and also print the reversed word
    console.log("The word is not a palindrome");
    console.log("Reversed word:", user_input.split("").reverse().join(""));
  }
}
