// Put your code here

//  It is a "List" that can only contain "strings".
let names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

// Print some output to the terminal (aka. "Console");
console.log("All place names")

// Iterate over each "name" in the "names" list
for (name of names) {
    console.log(name)
}

// Filter the list to create a new list that only has 
//  place names that start with the word "The".
let filteredNames = names.filter(name => name.startsWith("The"))
console.log("'The' place names", filteredNames)






