// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    // return str.toLowerCase().split().join("-");
    return str.toLowerCase().split().join("-");
  }
  
  console.log(spinalCase('This Is Spinal Tap'));