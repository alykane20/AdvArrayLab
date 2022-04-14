//Dataset
let dishes = [
  {
    id: 1,
    name: "Pizza",
    cuisine: "Italian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 2,
    name: "Spaghetti",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 3,
    name: "Ravioli",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 4,
    name: "Enchiladas",
    cuisine: "Mexican",
    servings: 6,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 5,
    name: "Tacos",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 6,
    name: "Burrito Supreme",
    cuisine: "Mexican",
    servings: 1,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 7,
    name: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
  },
  {
    id: 8,
    name: "Crepes",
    cuisine: "French",
    servings: 1,
    ingredients: ["flour", "sugar"],
  },
  {
    id: 9,
    name: "Corned Beef & Cabbage",
    cuisine: "Irish",
    servings: 10,
    ingredients: ["beef", "cabbage"],
  },
  {
    id: 10,
    name: "Beef Stew",
    cuisine: "Irish",
    servings: 8,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 11,
    name: "Lasagna",
    cuisine: "Vegetarian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 12,
    name: "Falafel",
    cuisine: "Vegetarian",
    servings: 1,
    ingredients: ["chickpea", "parsley"],
  },
  {
    id: 13,
    name: "Chili",
    cuisine: "Vegetarian",
    servings: 13,
    ingredients: ["tomato", "chickpea"],
  },
  {
    id: 14,
    name: "Goulash",
    cuisine: "Hungarian",
    servings: 15,
    ingredients: ["beef", "tomato"],
  },
];

// Example function
// function findMexicanFood(){
//     let results = dishes.filter(function(el){
//         if(el.cuisine === "Mexican"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }
// let mexicanFood = findMexicanFood();
// console.log('Mexican Foods: ', mexicanFood)

//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

// function problemOne(){
//     let results = dishes.filter(function(el) {
//         if(el.cuisine === "Vegetarian") {
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }
// let vegetarianFood = problemOne();
// console.log('Vegetarian', vegetarianFood)

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
// function italianServesSix(){
//     let results = dishes.filter(function(el) {
//         if(el.cuisine === "Italian" && el.servings >5) {
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }
// let italianFamilyMeal = italianServesSix();
// console.log('Big Italian Meal:', italianFamilyMeal)

//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter

// function idEqualsServingCount() {
//     let results = dishes.filter(function(el) {
//         if(el.id === el.servings) {
//             return true;
//         }
//         else{
//             return false;
//         }})
//     return results
// }

// let idMatchesServing = idEqualsServingCount();
// console.log('ID same as serving size:', idMatchesServing)

//4. Create a function that will return only dishes whose serving count is even.
//Filter
// function evenServings() {
//     let results = dishes.filter(function(el) {
//         if(el.servings %2 == 0) {
//             return true;
//         }
//         else{
//             return false;
//         }
//     })
//     return results
// }
// let servingSizeEven = evenServings();
// console.log("Servings for an even number of people:", servingSizeEven)

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter
// function findTomatoCheese() {
//   let results = dishes.filter(function (el) {
//     if (el.ingredients.includes("tomato") && el.ingredients.includes("cheese"))
//       return true;
//   });
//   return results;
// }

// let tomatoAndCheeseFood = findTomatoCheese();
// console.log("It's got tomato and cheese!", tomatoAndCheeseFood);

//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map
// function findCuisineType() {
//     let results = dishes.map(function(el){
//         return el.cuisine;
//     })
//     return results
// };
// let typeFood = findCuisineType();
// console.log(typeFood)

// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array

//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map

function describeDishCuisine (){
    let results = dishes.map(function(el) {
    return el.cuisine + " " + el.name
    })
    return results
}
let foodDescription = describeDishCuisine();
console.log(foodDescription)

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter
// function describeVegetarianFood (){
//     let results = dishes.filter(function(el){
//         return el.cuisine === "Vegetarian";
//     }).map(function(el){
//     return el.cuisine + " " + el.name;
//     })
//     return results
// }
// let vegDescription = describeVegetarianFood();
// console.log(vegDescription)
//BONUS
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

// function findChickpeas() {
//       let results = dishes.filter(function (el) {
//         if (el.ingredients.includes("chickpea"))
//           return true;
//       });
//       return results;
//     }
    
//     let chickpea = findChickpeas();
//     console.log("Try some chickpeas", chickpea)

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

function totalServings(){
    let sum = dishes.reduce(function(total, el){
        return total.servings + el.servings
    })
    return sum
}

let dishesServings = totalServings();
console.log(dishesServings)

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
