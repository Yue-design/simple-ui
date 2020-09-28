/*
random insult generator

The app creates three different arrays of body parts,
adjectives and random words 
and the mini app will turn them into a string that creates a random insult.
*/

// 1. create an array with four different body parts
const randomBodyParts = ["head", "arms", "legs", "feet"];

// 2. create an array with four adjectives 
const randomAdjectives = ["long", "short", "large", "small"];

// 3. create an array with five random words
const randomWords = ["one", "two", "three", "four", "five"];

// 4. use the Math.floor() method and the Math.random() method to choose a random item from your randomBodyParts array and assign it to the variable randomBodyPart
const randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];

// 5. choose a random item from your randomAdjectives array and assign it to the variable randomAdjective
const randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

// 6. choose a random item from your randomWord array and assign it to the variable randomWords
const randomWord = randomWords[Math.floor(Math.random() * 4)];

// 7. write a console.log statement that displays your randomly generated insult
console.log(`Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}`);