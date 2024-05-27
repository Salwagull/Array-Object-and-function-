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

type People = {
    friends:Friends[]
};

type Friends={
    firstName: string,
    lastName: string,
    id?: number,
};

let friend1:Friends={
    firstName: "Neha",
    lastName: "Khan",
    id: 1
};

let friend2:Friends={
    firstName: "Maham",
    lastName: "Khan",
};

let friend3:Friends={
    firstName: "shanzaay",
    lastName: "Khan",
    id: 2
};

let people:People={
    friends:[]
};

people.friends.push(friend1, friend2, friend3);
console.log(people)


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


let scrambledArray= ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.shift();
scrambledArray.pop();
scrambledArray.unshift("I")
scrambledArray.splice(1,3)
scrambledArray.splice(2,3, "student", "of")
scrambledArray.splice(4,0,"GIAIC")
scrambledArray.splice(2,0, "a")
const join = scrambledArray.join(" ")
console.log(join)


//Assignment 3: Company Product Catalog
//Learning Objective: Implement data structures in TypeScript to represent and manage product
//information.
//Task: Create a program to represent a product catalog using an array and perform basic queries.
//1. Define an array named inventory to store product information.
//2. Create three separate objects, each representing a product, with properties like name,
//model, cost, and quantity.
//3. Add these product objects to the inventory array using an appropriate array method.
//4. Access and log the quantity property of a specific product (e.g., third product) in the
//inventory array.
//5. Explore adding and accessing more elements within the inventory array to understand
//how to manage product data.
interface ProductType{
    name: string,
    model: number,
    cost: number,
    quantity: number
};
let product1:ProductType = {
    name: "andriod phones",
    model: 2024,
    cost:45000,
    quantity:500
};
 let product2:ProductType= {
    name: "Iphone",
    model: 2024,
    cost: 350000,
    quantity: 1000
 };
 let product3:ProductType= {
    name: "laptop",
    model: 2023,
    cost : 200000,
    quantity: 1500
 };
 let inventory:ProductType[]=[product1,product2,product3];
 console.log(inventory);

 let thiredProperty=[inventory[2].quantity]
 console.log(thiredProperty);

 let moreProduct: ProductType={
    name: "smartwatch",
    model: 2022,
    cost:  2500,
    quantity: 1000
 };
 let updatedInventory:ProductType[] = [product1,product2,product3,moreProduct];
 console.log(updatedInventory);
 let fourthProperty=[updatedInventory[3].name];
 console.log(fourthProperty);


// Assignment 4: Student List Organizer
//Learning Objective: Get comfortable with data structures (objects and arrays) and basic
//functions in TypeScript.
//Tasks:
//1. Student Data: The provided code defines an interface named Student that describes
//student information like name, senior status (true/false), and whether they've completed
//their assignments (true/false).
//o Imagine this as a template for organizing student details.
//2. Student List:
//o An array named students stores information about several students using the
//Student template. Think of this array as your class list!
//3. Find Senior Students with Assignments (Optional):
//o The code (not shown here) has a function that might find students who are seniors
//and have completed their assignments.
//o Can you guess why this information might be helpful?
//4. Class List Update:
//o Imagine you need to update your class list! The code (not shown here) might have
//a function that removes students who haven't completed their assignments
//(assuming only seniors are responsible).
//o Can you think of any reasons why this might be useful (consider limitations)?

interface Student {
    studentInformation:{
        name: string,
        seniorStatus: boolean,
        completedAssign: boolean,
    },
};

let students:Student[]= [
    {studentInformation:{name:"Mahanoor", seniorStatus:true, completedAssign:true }},
    {studentInformation:{name:"Saba",seniorStatus:false, completedAssign:true }},
    {studentInformation:{name:"Saira",seniorStatus:true, completedAssign:false }},
    {studentInformation:{name:"Maryam",seniorStatus:false, completedAssign:false }},
];
function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
    return students.filter(student => 
        student.studentInformation.seniorStatus && student.studentInformation.completedAssign
    );
}

const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log('Senior students who have completed their assignments:', seniorStudentsWithAssignments);

function updatedClassList(students:Student[]):Student[]{
    return students.filter(student => student.studentInformation.seniorStatus ||
         student.studentInformation.completedAssign);
}
const updatedClassListResult = updatedClassList(students);
console.log(`student who have'nt complete there assignment`, updatedClassListResult);