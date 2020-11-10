//ex1 + ex2
let recipe = {
    "name": "Mashed Potatoes",
    "serves": 4,
    "ingredients": [
      {
        "name": "water"
      },
      {
        "name": "potatoes",
        "count": 2
      },
      {
        "name": "butter",
        "count": 2,
        "unit": "tablespoons"
      },
      {
        "name": "salt",
        "count": 0.5,
        "unit": "teaspoon"
      },
      {
        "name": "pepper",
        "count": 0.25,
        "unit": "teaspoons"
      },
      {
          "name": "garlic powder",
          "count": 2,
          "unit": "teaspoons"
      }
    ],
    "directions": [
        "Cut potatoes into half inch thick slices.",
      "Add potatoes to a pot and cover with an inch of water.",
      "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
      "Simmer for 20 minutes or until potatoes are fork tender.",
      "Drain water from potatoes, leaving the potatoes in the original pot.",
      "Add remaining ingredients to the pot with the potatoes.",
      "Mash potatoes until they reach the desired consistency.",
      "Serve immediately, or cover and refrigerate."
    ],
    "calories": 250,
    "healthy": true
  }

console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
console.log(recipe.healthy) //should print true
console.log(recipe.calories) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"


//ex3 + ex4 
let animal = {
    "name":"gray wolf" ,
    "weight":{"min":69,
              "max":79,
              "unit":"kg"},
    "habitat":["north America","sweden","northern India"],
    "endangered":false,
    "food":["meat"],
    "feed":[],
    "delicious":1 
}
  