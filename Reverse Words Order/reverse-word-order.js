const assert = require("assert");

function reverseString(string = "") {
    // Sanity check for input type
    if (typeof string !== "string") {
        return `${string}, is not of type "string". "reverseString" accepts only one argument of type "string".`;
    }

    const reversedSentence = string
        .split("")
        .reverse()
        .join("");

    // It should return truthy value, if reverseString was called without arguments => "reverseString()"
    return reversedSentence.length ? reversedSentence : " ";
}

/* Uncomment the below assertions to test reverseString function */

// assert(reverseString("Would you reverse me! *..* ?"));
// assert(reverseString());
// assert(reverseString([5, 3, 2, "Oops!"]));
// assert(
//     reverseString({
//         name: "Mostafa",
//         age: 24,
//         life_purpose: "Peace and Justice",
//     }),
// );
// assert(reverseString(new Boolean("truthy")));
// assert(reverseString("one", "two", "three"));
