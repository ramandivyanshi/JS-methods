// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
var max = 0;
numbers.forEach(function(largest) {
    if (max < largest)
        max = largest;
})
console.log(max);
// Find longest string in strings
var long = "";
strings.forEach(function(longest) {
    if (long.length < longest.length)
        long = longest;
})
console.log(long);
// Find all the even numbers
numbers.forEach(function(num) {
        if (num % 2 == 0)
            console.log(num)
    })
    // Find all the odd numbers
numbers.forEach(function(num) {
        if (num % 2 !== 0)
            console.log(num)
    })
    // Find all the words that contain 'is' use string method 'includes'
strings.forEach(function(word) {
        if (word.includes("is"))
            console.log(word)
    })
    // Find all the words that contain 'is' use string method 'indexOf'
strings.forEach(function(word) {
        if (word.indexOf("is") != -1)
            console.log(word)
    })
    // Check if all the numbers in numbers array are divisible by three use array method (every)
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var div = numbers.filter(div => div % 3 == 0);
div;
//(5) [12, 18, 9, 3, 6]
//  Sort Array from smallest to largest
function ascending(a, b) {
    return a - b;
}
numbers.sort(ascending);
console.log(numbers);
//[1, 3, 4, 5, 6, 7, 9, 11, 12, 18, 101]
// Remove the last word in strings
var strings = ["this", "is", "a", "collection", "of", "words"];
strings.pop();
console.log(strings);
// Add a new word in the array
var strings = ["this", "is", "a", "collection", "of", "words"];
strings.push("and_letters");
console.log(strings);
// Remove the first word in the array
strings.splice(0, 1);
console.log(strings);
// Place a new word at the start of the array use (upshift)
var strings = ["this", "is", "a", "collection", "of", "words"];
strings.unshift("Well!");
console.log(strings);
// Make a subset of numbers array [18,9,7,11]
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
numbers.splice(3, 4);
// Make a subset of strings array ['a','collection']
var strings = ["this", "is", "a", "collection", "of", "words"];
strings.splice(2, 2);
// Replace 12 & 18 with 1221 and 1881
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
numbers.splice(1, 1, 1221);
numbers.splice(3, 1, 1881);
console.log(numbers);
// Replace words with string in strings array
var strings = ["this", "is", "a", "collection", "of", "words"];
strings.splice(5, 1, "string")
console.log(strings);
// Customers Array
var customers = [
    { firstname: "Joe", lastname: "Blogs" },
    { firstname: "John", lastname: "Smith" },
    { firstname: "Dave", lastname: "Jones" },
    { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
var findj = customers.filter(elem =>
    elem.firstname.startsWith('J')
)
console.log(findj);
// Create new array with firstname and lastname
var newArr = ["joe", "Blogs", "John", "Smith", "Dave", "Jones", "Jack", "White"];
// Sort the array created above alphabetically
var newArr = ["Joe", "Blogs", "John", "Smith", "Dave", "Jones", "Jack", "White"];
newArr.sort(function(a, b) {
    if (a < b) {
        return -1;
    }
    if (b < a) {
        return 1;
    }
    return 0;
});
console.log(newArr);