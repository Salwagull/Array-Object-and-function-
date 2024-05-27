//Assignment 1: Building Your Friend List
//Learning Objective: Practice working with objects and arrays in TypeScript to create a data
//structure.
//Task: Create a program that manages a simple friend list.
//1. Define an object named people containing an empty array called friends.
//2. Create three separate objects, each representing a friend, with properties like firstName,
//lastName, and optionally id.
//3. Add these friend objects to the friends array within the people object.
//4. Output the entire people object to the console, displaying your information and your
//friend list.
var friend1 = {
    firstName: "Neha",
    lastName: "Khan",
    id: 1
};
var friend2 = {
    firstName: "Maham",
    lastName: "Khan",
};
var friend3 = {
    firstName: "shanzaay",
    lastName: "Khan",
    id: 2
};
var people = {
    friends: []
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
//Assignment 2:Manipulating an Array: Rearranging Words
//Objective:
//Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
//Steps:
//1. Scrambled Array:
//o Start with an array of elements in a scrambled order, like:
//const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
//• Modify the Array:
//• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
//o Convert non-strings (booleans, numbers) to strings if needed.
//o Split elements into character arrays (optional).
//o Rearrange characters or elements in the desired order (modify original array or
//create temporary arrays).
//• Output the Result:
//• Use join() to combine elements back into a single string: "I am a student of GIAIC".
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.shift();
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 3);
scrambledArray.splice(2, 3, "student", "of");
scrambledArray.splice(4, 0, "GIAIC");
scrambledArray.splice(2, 0, "a");
var join = scrambledArray.join(" ");
console.log(join);
;
var product1 = {
    name: "andriod phones",
    model: 2024,
    cost: 45000,
    quantity: 500
};
var product2 = {
    name: "Iphone",
    model: 2024,
    cost: 350000,
    quantity: 1000
};
var product3 = {
    name: "laptop",
    model: 2023,
    cost: 200000,
    quantity: 1500
};
var inventory = [product1, product2, product3];
console.log(inventory);
var thiredProperty = [inventory[2].quantity];
console.log(thiredProperty);
var moreProduct = {
    name: "smartwatch",
    model: 2022,
    cost: 2500,
    quantity: 1000
};
var updatedInventory = [product1, product2, product3, moreProduct];
console.log(updatedInventory);
var fourthProperty = [updatedInventory[3].name];
console.log(fourthProperty);
;
var students = [
    { studentInformation: { name: "Mahanoor", seniorStatus: true, completedAssign: true } },
    { studentInformation: { name: "Saba", seniorStatus: false, completedAssign: true } },
    { studentInformation: { name: "Saira", seniorStatus: true, completedAssign: false } },
    { studentInformation: { name: "Maryam", seniorStatus: false, completedAssign: false } },
];
function findSeniorStudentsWithAssignments(students) {
    return students.filter(function (student) {
        return student.studentInformation.seniorStatus && student.studentInformation.completedAssign;
    });
}
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log('Senior students who have completed their assignments:', seniorStudentsWithAssignments);
function updatedClassList(students) {
    return students.filter(function (student) { return student.studentInformation.seniorStatus ||
        student.studentInformation.completedAssign; });
}
var updatedClassListResult = updatedClassList(students);
console.log("student who have'nt complete there assignment", updatedClassListResult);
