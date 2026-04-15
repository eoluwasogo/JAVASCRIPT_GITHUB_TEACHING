// DAY 5 PRACTICE - Interview Questions
// Solved by: ELEGBEDE OLUWASOGO
// Course topics: Objects, Arrays, forEach

// ==================== QUESTION 1 ====================
console.log("=== Question 1: Test Case Object ===");

// EXACT TASK (do these steps in order):
// Write your object code here
// 1. Create an object called testCase with these properties:
let testCase = {
    id: 101,
    title: "User Login",
    steps:["Open page", "Enter email", "Enter password", "Click login"],
    status: "Pending",
    isAutomated: true,
}
// 2. Print the entire object
console.log(testCase)

// 3. Print only the title and number of steps using dot notation
console.log(testCase.title)

console.log(testCase.steps.length)


// ==================== QUESTION 2 ====================
console.log("\n=== Question 2: Array of Test Cases ===");

// Write your array code here
// EXACT TASK (do these steps in order):

// 1. Create an array called testSuite containing 4 test case objects
//    Each object should have: id, title, status

let testSuite = [
    {id: 232, title:"Login functionality", status: "Pending"},
    {id: 143, title: "Cart functionality", status:"PASSED"},
    {id: 112, title:"Payment functionality", status:"TO DO"},
    {id: 178, title:"Log out functionality", status:"PASSED"}
        ]
// 2. Print the total number of tests in the array
console.log(testSuite.length)
// 3. Print the title of the 3rd test (index 2)
console.log(testSuite[2])

// ==================== QUESTION 3 ====================
console.log("\n=== Question 3: Using forEach on Tests ===");

// EXACT TASK (do these steps in order):
// 1. Using the testSuite array from Question 2
// 2. Use forEach to loop through every test
// 3. For each test, print: "Test #ID: TITLE - Status: STATUS"
// 4. Bonus: Inside forEach, if status is "PASSED", also print "✅ Ready for regression"

// Write your forEach code here
testSuite.forEach((test)=>{
    console.log(`#${test.id} ${test.title} ${test.status}`);
    if(test.status === "PASSED"){
        console.log("✅ Ready for regression");
    }
    else if (test.status === "Pending" || test.status === "TO DO"){
        console.log("Not ready for regression");

    }

})