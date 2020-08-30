// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics

var pizzas = [
    "Deep Dish",
    "Peperoni",
    "Hawaiian",
    "Meatzza",
    "Spicy Mama",
    "Margherita"
];
//forEach
pizzas.forEach(function(elem) {
    console.log(elem);
})

var cuts = [
    "Chuck",
    "Brisket",
    "Shank",
    "Rib",
    "Plate",
    "Flank",
    "Short Loin",
    "Tenderloin",
    "Sirloin",
    "Round"
];
//splice
cuts.splice(0, 5)


var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];
//filter
function less(value) {
    return value < 23;
}
numbers.filter(less);


//map
var newarray = numbers.map(myFunction)

function myFunction(num) {
    return num * 10;
}