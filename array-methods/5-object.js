// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
var girl = {
    name: "Feriha",
    class: 12,
    subject: "pcm",
    school: "cms"
};
console.log(Object.getOwnPropertyNames(girl));
//OR
let valuesArray = Object.keys(girl);

for (let value of valuesArray) {
    console.log(value);
}
//for keys
let valuesArray = Object.values(girl);

for (let value of valuesArray) {
    console.log(value);
} // for values

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student)
    //VM2801:6 {name: "David Rayy", sclass: "VI", rollno: 12}
delete student.rollno; //true
console.log(student)
    //VM2791:1 {name: "David Rayy", sclass: "VI"}




// 3. Write a function to get the length of an object.
function lengthobj() {
    console.log(Object.keys(student));
}
lengthobj();