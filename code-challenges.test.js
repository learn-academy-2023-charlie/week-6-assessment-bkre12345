// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Pseudo code
  // Input: Array of objects
  // Output: Array of sentences about each person with their name capitalized
// The function capitalizeNames will take in an array of sentences as its parameter
// Map function will be needed to iterate over each person in the array
// Each person is assigned a name and job and will need a destructuring assignment to extract these values into individual variables of name and job.
// The names are split into an array of individual words
// Map iterates over each word in the array and capitalizes the first letter using charAt and toUpperCase
// The first code would iterate over each word in the array and capitalizes the names and the jobs ["Arthur Dent is a Radio Employee."]
// I added another slice method so that it will extract a substring from the name starting from index:1 until the end of the string and added toLowerCase so that the remaining letters in the string stay lowercased
// The capitalized words are then combined again using the join method 
// And returned using string extrapolation inside a sentence

const capitalizeNames = (array) => {
  return array.map(({ name, job }) => {
    const capitalizedWords = name.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    const capitalizedSentence = capitalizedWords.join(' ')
    return `${capitalizedSentence} is ${job}.`
  })
}

describe('capitalizeNames', () => {
  it('should return an array of sentences with only their names capitalized and their jobs', () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", job: "a hitchhiker" },
      { name: "zaphod beeblebrox", job: "president of the galaxy" },
      { name: "arthur dent", job: "a radio employee" }
    ]

    const capitalizedHitchhikers = capitalizeNames(hitchhikersCharacters)
    expect(capitalizedHitchhikers).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee."
    ])
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Pseudo Code
// Input: Array of mixed data
// Output: An array of only the remainders of the numbers when divided by 3
// The remainedersOnly function will take an array of mixed data as its parameters
// Numbers will create another array that will only have numbers
// By checking the typeOf of the data, it is easier to filter out the numbers
// Remainders will create another array from the numbers mapped from the Numbers array
// The map method will use each number and calculates the remainder of each number divided by 3 using the modulo operator
// The returned array will only have the remainders from the numbers divided by 3

const remaindersOnly = (array) => {
  const numbers = array.filter(element => typeof element === 'number')
  const remainders = numbers.map(number => number % 3)
  return remainders
}

describe('remaindersOnly', () => {
  it('should return an array of remainders of the numbers when divided by 3', () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(remaindersOnly(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remaindersOnly(hodgepodge2)).toEqual([ 2, 1, -1 ])
})
})

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// Pseudo Code:
// Input: array of numbers
// Output: the sum of all the numbers cubed
// The function cubedAdded will take in an array of numbers as its parameters
// Sum will make an array from the numbers mapped from the given parameters and stores this info
// Math.pow method will take all the numbers from the array and calculates its cube
// After the map is done iterating over the array and all the numbers are cubed, the reduce method will then calculate the sum of all the numbers by applying a callback function to each number
// Acc will represent the accumulator is the value that gets returned after each iteration and will change as the reduction progresses
// Curr represents the current number it's processing in the array
// The intial value will be set to 0
// The sum variable will then return all the numbers cubed and the accumulated total

const cubedAdded = (array) => {
  const sum = array.map(number => Math.pow(number, 3)).reduce((acc, curr) => acc + curr, 0)
  return sum
}

describe('cubedAdded', () => {
  it('should return the sum of all the numbers cubed', () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(cubedAdded(cubeAndSum1)).toEqual(99)
    expect(cubedAdded(cubeAndSum2)).toEqual(1125)
      })
      })
