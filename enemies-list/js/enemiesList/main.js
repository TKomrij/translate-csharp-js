// Put your code here

console.log("My Enemies List!")
console.log("----------------")


let enemies = [
    {
        firstName: "Joshua",
        lastName: "Flowers",
        offenses: {
            one: "Being a jerk to me in elementary school",
            two: "Not being nice to me in elementary school"
        },
        isReallyHated: true
    },

    {
        firstName: "Darth",
        lastName: "Vader",
        offenses: {
            one: "Cut off Luke's hand",
            two: "Murdered all those kids",
            three: "Unkind management practices"
        },
        isReallyHated: false
    },

    {
        firstName: "Betty",
        lastName: "Rudelady",
        offenses: {
            one: "Phone calls in the theater",
            two: "Phone calls on the bus",
            three: "Phone calls in line at the grocery store",
            four: "Poor conversationalist"
        },
        isReallyHated: true
    },

    {
        firstName: "Leon",
        lastName: "Peck",
        offenses: {
            one: "Keeps giving me a hotplate"
        },
        isReallyHated: false
    }
]

for (enemy of enemies) {
    if (enemy.isReallyHated === true) {
        console.log(`${enemy.firstName} ${enemy.lastName} Really, really dislike!`)
    } else {
        console.log(`${enemy.firstName} ${enemy.lastName}`)
    }
}

