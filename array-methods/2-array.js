var words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
var long = "";
words.forEach(function findLongestWord(longest) {
    if (long.length < longest.length)
        long = longest;
})
console.log(long);



var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
var sum = 0;

function sumArray(numbers1) {
    for (var i = 0; i < numbers1.length; i++) {
        sum = sum + numbers1[i];
    }
    return sum;
}
sumArray(numbers1);
// Use reduce method of array
var sum1 = function getSum(sum, num) /*accumultr,currnt val*/ {
    return sum + num;
}
numbers1.reduce(getSum);
// Use the above sum and calculate the average.
function getSum(sum, num) {
    return sum + num;
}
var sum1 = numbers1.reduce(getSum);
var avg = sum1 / numbers1.length;
console.log(avg);





var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function averageNumbers(sum, num) /*accumultr,currnt val*/ {
    return sum + num;
}
var sum2 = numbers2.reduce(averageNumbers);
var avg = sum2 / numbers2.length;
console.log(avg);




var words2 = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
const totalLength = words2.reduce(function(sum, word) {
    return sum + word.length;
}, 0);
const avgLength = (
    totalLength / words2.length
);
console.log(Math.round(avgLength));