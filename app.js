function firstRepeatingValue(array) {
  // New set
  let arraySet = new Set()
  // Starting with -1 for not found
  let firstRepeating = -1
  // Looping through array backwards
  for (let i = array.length - 1; i >= 0 ; i--) {
    // Found in set, updating variable with found value
    if(arraySet.has(array[i])) {
      firstRepeating = array[i]
      // Not found in array, adding to set
    }else {
      arraySet.add(array[i])
    }  
  }
  // Returning first repeating number if found else -1
  return firstRepeating
}
// Array of test values
let numbers = [2,3,1,3,1,2]

console.log(firstRepeatingValue(numbers)) // 2
