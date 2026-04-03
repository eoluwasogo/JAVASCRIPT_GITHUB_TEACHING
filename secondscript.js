// DAY 2 PRACTICE - Interview Questions
// Solved by: ELEGBEDE OLUWASOGO
// Course topics: Datatypes, String methods, Operators

// ==================== QUESTION 1 ====================
// Data Types + String Methods (very common in interviews)
console.log(" Question 1: Data Types & String Methods");

// Create variables of these 6 data types:
let testTitle = "Login Testcase";          // string

let stepCount = {
    Step1:"Navigate to login page with valid URL",
    Step2:"Enter valid username and password",
    Step3:"Click on login button",
    Step4:"Verify successful login by checking dashboard visibility"
};           // object

let count = 0;
 
for (let i= 0; i < Object.keys(stepCount).length; i++){
    count++;
}
console.log(`The number of steps is: ${count}`); 
     

let isAutomated = true;        // boolean
let testData = {Username: "Agbara", Password: "Secret1234_"};           // object
let tags = ["Sprint", "Sprint planning", "Sprint review", "Sprint retrospective"]; // array
tags.pop(); // removes last element "Sprint retrospective"
console.log(tags.includes("Sprint review")); // boolean
console.log(tags); // array
let result = null; // null

// Use at least 6 different string methods on testTitle

let Datatest = "ELEGBEDEhiueOLUWASOGO@GMAIL.COM"
console.log(Datatest.toUpperCase()); // Converts to uppercase
console.log(Datatest.toLowerCase()); // Converts to lowercase
console.log(Datatest.slice(7,11)); // Extracts "hiue"
console.log(Datatest.startsWith("Ele"));
console.log(Datatest.length); // Length of the string
console.log(Datatest.search("deolu")); // Search for substring and return index


// ==================== QUESTION 2 ====================
// All types of Operators
console.log("\n=== Question 2: Operators ===");

// Arithmetic, Comparison, Logical, Assignment, Ternary
// Create a small example using test scores or test case priority
a = 10; // assignment operator
b = 23; // assignment operator
c = 5;  // assignment operator


// Example scenario:
// If a test case has more than 10 steps and is automated → "High Priority"
let testTitle2 = "AddTocart";          // string

let stepCount2 = {
    Step1:"Navigate to login page with valid URL",
    Step2:"Enter valid username and password",
    Step3:"Click on login button",
    Step4:"Verify successful login by checking dashboard visibility",
    Step5:"Click on a product",
    Step6:"Add to cart",
    Step7:"Click on cart button to view cart",
    Step8:"Check if product is in cart",
};           // object

let count2 = 0;

for (let ii= 0; ii< Object.keys(stepCount2).length;ii++){
    count2++;
}
console.log(`The number of steps is: ${count2}`);

isAutomated= true; // boolean

// Use operators + ternary operator
let priority1 = (count2 > 6 && isAutomated === true) ? "High Priority" : "Low Priority";
console.log(priority1);
let priority = (count > 6 && isAutomated === true) ? "High Priority" : "Low Priority";
console.log(priority);    

// ==================== QUESTION 3 ====================
// Real Tester Scenario (combine everything)
console.log("\n=== Question 3: Tester Scenario ===");

// Create a test case object with:
const testCase = {
    title: "User Login with Invalid Password",
    steps: 5,
    isUI: true,
    tags: ["login", "regression"]
};

// Using string methods + operators:
// 1. Check if title contains "Login" (case insensitive)
if(testCase.title.includes("Login")){
    console.log("This testcase contain login")

}else {
    console.log("This testcase does not contain login")
};
// 2. Check if steps > 3 AND isUI is true
if (testCase.steps> 3 && testCase.isUI === true){
    console.log("This check is valid for UI automation")}
    else {
        console.log("This check is not valid for UI automation")
    }
// 3. If both true, print "This test is suitable for Playwright automation"

if (testCase.steps > 3 && testCase.isUI ){
    console.log("This test is suitable for Playwright automation")}
    else {
        console.log("Manual test recommendedn")
    }

