var data = [{
        name: "Butters",
        age: 3,
        type: "dog"
    },
    {
        name: "Lizzy",
        age: 6,
        type: "dog"
    },
    {
        name: "Red",
        age: 1,
        type: "cat"
    },
    {
        name: "Joey",
        age: 3,
        type: "dog"
    },
    {
        name: "Pochi",
        age: 3,
        type: "dog"
    }
];

// Write a function that will sum all of the dogs ages in dog years using for loop.
var sum = 0;
for (var i = 0; i < data.length; i++) {
    sum = sum + data[i].age * 7;
}
console.log(sum);
// 1 human year = 7 dog year



// your code goes here

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
var dogs = data.filter(function dog(d) {
    return d.type == "dog";
});
console.log(dogs);

// 2. map - to multiply human year to dog year
var sum = 0;
var dogs = data.filter(function(d) {
    return d.type == "dog";
}).map(function(d) {
    return d.age * 7;
})
dogs.forEach(function(ages) {
    sum = sum + ages;
    console.log(sum)
});

// 3. reduce - to accumulate total age.
let initialValue = 0
data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.ages, initialValue
)
console.log(sum);
// Solution 105