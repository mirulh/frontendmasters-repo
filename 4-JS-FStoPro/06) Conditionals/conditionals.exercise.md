## Exercise

    Write a conditional that logs a message saying whether your first name or last name is longer
    Write a function isEmpty(array) that returns whether a given array is empty or not
    Is an empty array truthy or falsy? Write a conditional to find out

//

## Solution

function compareName(firstName,lastName) {

    if (firstName.length > lastName.length) {
    console.log(firstName, "is longer than", lastName)

}
else{
console.log(lastName, "is longer than", firstName)

    }

}

compareName("Bond","JamesBond")

---

function isEmpty (arr) {
if (arr.length === 0) {
console.log("yeah it's empty alright");
}
else {
console.log("empty where?")
}
}

isEmpty([]) // object is truthy, empty string "" is falsy

---

if ([]) {
console.log("its truthy");
}
else {
console.log("its falsy")
}
