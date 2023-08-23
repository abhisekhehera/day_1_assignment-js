 
//  assignment 1
 //Create an empty array called "fruits".
let fruit;
//Add the following fruits to the "fruits" array: "apple", "banana", "orange".
 fruit = ["apple", "banana", "orange"]
// Remove the first fruit from the array.
fruit.splice(0 , 1 )
// Add "grape" to the end of the array.
fruit.push("grape")
// Update the second fruit in the array to "pear".
fruit[1]= "pear"
// Print the final "fruits" array after performing the above operations.
console.log(fruit);

// assignment 2

//Create an empty object called "person".
let person;
//Add the following properties to the "person" object.
  person = {
    name : "Jhon",
    age : 30,
    city : "New York"
}
//Add the following properties to the "person" object.
delete person.age
//Add a new property called "job" with the value "Engineer" to the "person" object.
person.job = "Enginer"
// Update the "city" property of the "person" object to "San Francisco".
person.city = "San Francisco"
// Print the final "person" object after performing the above operations.
console.log(person);

// assignment 3

// Create an empty array called "cars".
let cars;
// Add three car objects to the "cars" array. Each car object should have the following properties:
// - make: "Toyota"
// - model: "Camry"
// - year: 2018

cars =  [{make : "Toyata" , model:"Camry" , year :2018},
         {make : "Toyata" , model:"Camry" , year :2018},
         {make : "Toyata" , model:"Camry" , year :2018}
]
//Remove the first car object from the "cars" array.
cars.pop()
// Add a new car object to the "cars" array with the following properties:
//    - make: "Honda"
//    - model: "Civic"
//    - year: 2020
cars.push({make:"Honda", model:"Civic", year: 2020})

//Update the "model" property of the second car object in the array to "Accord".
cars[1].model= "Accord"
// Print the final "cars" array after performing the above operations.
console.log(cars);

















// array
// let list = ['milk', 'bread', 'butter']
// // index number => add, update, read, delete
// list[1] = 'brown bread';
// list[6] = 'apple'
// // push and pop
// list.push('apple');
// list.push('coffee');
// list.pop()
// list.pop()
// console.log(list);
// splice(index, delete count, )
// list.splice(0, 0, 'apple', 'coffee', 'rice')
// console.log(list)

