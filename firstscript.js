// DAY 1 PRACTICE - Interview Questions
// Solved by: ELEGBEDE OLUWASOGO
// Course topics: Variables, Constants, Console.log, Comments

// ==================== QUESTION 1 ====================
console.log("Hello, I am ready for Playwright!");

// 4 variables with different data types + 2 constants
let testTitle = "Login Test";           // string
let testSteps = 8;                      // number
let isAutomated = true;                 // boolean
let testResult = null;                  // null (different type)

const PI = 3.14;                        // constant - cannot change
const MAX_TEST_CASES = 100;             // constant

console.log(testTitle, testSteps, isAutomated, testResult);
console.log("PI value:", PI);
console.log("Max allowed tests:", MAX_TEST_CASES);

// ==================== QUESTION 2 ====================
// 3 variables with clear interviewer-friendly comments
let firstName = "Moshood";              // String variable holding tester's first name
let age = 26;                           // Number variable for age
var isLunchTime = true;                 // Boolean (using var - older way, we will use let/const later)

// ==================== QUESTION 3 ====================
// Show what happens if you try to re-assign a const
console.log("Trying to change PI...");

// PI = 30;        ← UNCOMMENT THIS LINE TO SEE THE ERROR

// If you run the line above, you will get:
// TypeError: Assignment to constant variable.
// This proves why we use const for values that should never change!
console.log("PI is still:", PI);