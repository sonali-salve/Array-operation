// Assignment 1: Array Operations
// Objective: Practice adding, removing, and updating values in arrays. 

// 1. Create an empty array called "fruits". 

// 2. Add the following fruits to the "fruits" array: "apple", "banana", "orange". 

// 3. Remove the first fruit from the array. 

// 4. Add "grape" to the end of the array. 

// 5. Update the second fruit in the array to "pear". 

// 6. Print the final "fruits" array after performing the above operations. 

let fruits=["apple","banana","orange"];
console.log("before any changes :->",fruits);
console.log("after making some changes on array :->");
let dltItem=fruits.shift(); //here I used shift method of array -> shift method remove item from start
console.log("Removed item :",dltItem);
console.log(fruits);
let addItem=fruits.push("grape"); //here I used push method of array -> push method add item to end
console.log("Added item :",addItem);
console.log(fruits);
let updateItem=fruits.splice(1,1,"pear"); //here I used splice method of array -> splice method used to add, remove, update items in array
console.log("updated item with pear :",updateItem);
console.log("the final array is :->",fruits);


// Assignment 2: Object Operations
// Objective: Practice adding, removing, and updating values in objects. 

// 1. Create an empty object called "person". 

// 2. Add the following properties to the "person" object: 
//    - name: "John" 
//    - age: 30 
//    - city: "New York" 

// 3. Remove the "age" property from the "person" object. 

// 4. Add a new property called "job" with the value "Engineer" to the "person" object. 

// 5. Update the "city" property of the "person" object to "San Francisco". 

// 6. Print the final "person" object after performing the above operations. 

// object -> object is collectio of name and value.name value in object are called properties.
// object are variable containig other variable. object can contain many variable

//creating object with three properties
const person = {
    name : "John",
    age : 30,
    city :"New York"
}
console.log("before make any changes");
console.log(person);
console.log("after make some changes");
delete person.age; //delete is a default keyword use to remove property from object
console.log(person);
person.job = "Engineer";
console.log(person);
person.city = "San Francisco";
console.log(person);
console.log("final result : ->");
console.log(person);

// Assignment 3: Array of Objects Operations
// Objective: Practice adding, removing, and updating values in an array of objects. 
// 1. Create an empty array called "cars". 
// 2. Add three car objects to the "cars" array. Each car object should have the following properties: 
//    - make: "Toyota" 
//    - model: "Camry" 
//    - year: 2018 
// 3. Remove the first car object from the "cars" array. 
// 4. Add a new car object to the "cars" array with the following properties: 
//    - make: "Honda" 
//    - model: "Civic" 
//    - year: 2020 
// 5. Update the "model" property of the second car object in the array to "Accord". 
// 6. Print the final "cars" array after performing the above operations. 

let cars = [
    { make : "Mahindra",model : "Scorpio", year : 2002},
    { make : "Toyota",model : "Carmy",year : 2018},
    { make : "Ford" ,model : "Bronco" ,year : 2020}
];
console.log("Befor make any changes : ->")
console.log(cars);
console.log("After make any changes : ->");
let dltObj = cars.shift(); //shift method is used to delete items from array
console.log("Deleted object ->",dltObj);
console.log(cars);
let car = {              // here I added new object in array
    make : "Honda",
    model : "Civic",
    year : 2020
}
let addCar = cars.push(car);
console.log(cars);
cars[1].model="Accord";
console.log(cars);





































