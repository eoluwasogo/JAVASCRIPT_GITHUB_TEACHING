// DAY 7 PRACTICE - Interview Questions
// Solved by: ELEGBEDE OLUWASOGO
// Course topics: Constructor Function, ES6, Modules

// ==================== QUESTION 1 ====================
console.log("=== Question 1: Constructor Function (Old Style) ===");

// EXACT TASK:
// 1. Create a Constructor Function called TestCase (using function keyword)
// 2. It should take parameters: id, title, steps
// 3. Inside, use this.id, this.title, this.steps, this.status = "Pending"
// 4. Add a method getSummary() that returns a string with template literals
// 5. Create one object using "new TestCase()" and call getSummary()

// Write your Constructor Function here

function TestCase (id, title, steps){
    this.id = id;
    this.title = title;
    this.steps = steps;
    this.status = "Pending";
    this.getSummary= function (){
        return `This is Testcase with id ${this.id} and the title is ${this.title}`;

    }
}

const cases = new TestCase(1, "Login functionality", 5)
console.log(cases.getSummary());

// ==================== QUESTION 2 ====================
console.log("\n=== Question 2: ES6 Features ===");

// EXACT TASK:
// 1. Use const and let correctly
// 2. Use arrow function
// 3. Use template literals
// 4. Create a simple test object and destructure it
// 5. Print everything using modern ES6 style

// Write your ES6 code here
const steps = {
    step1: "Load the landing page",
    step2: "Use valid username",
    step3: "Use valid password",
    step4: "Click on login button"
}
console.log(steps.step3)

let step2 = [1,3,5,6,7,8,9,10];

let  addition =  ((a,b)=>{
    return a+b
})
console.log (addition (2,7))
// ==================== QUESTION 3 ====================
console.log("\n=== Question 3: Modules (Preparation for Project) ===");

// EXACT TASK:
// 1. This file will later be split into modules, but for now:
// 2. Create a simple object called storage with two functions:
//    - saveTests(tests) → console.log("✅ Tests saved to JSON")
//    - loadTests() → return a sample array of 3 test objects





const storage = {
    test1: [2,4,6,12,4,6],
    test2: [1,46,1,4,6,2,2],
    saveTests: function (test){
        return `✅ Tests saved to JSON`
    } ,
    loadTests: function (test2){
        return `${test2}`
    },
    sub: ((d,c)=>{
        return d-c;
    })

}


console.log(storage.saveTests())
console.log(storage.loadTests())
// 3. Use arrow functions inside the object
// 4. Call both functions and print the result

// Write your module-style code here

// correction
// // Solved by: ELEGBEDE OLUWASOGO
// // Course topics: Constructor Function, ES6, Modules
//
// // ==================== QUESTION 1 ====================
// console.log("=== Question 1: Constructor Function (Old Style) ===");
//
// function TestCase(id, title, steps) {
//     this.id = id;
//     this.title = title;
//     this.steps = steps;
//     this.status = "Pending";
//
//     this.getSummary = function() {
//         return `Test #${this.id}: ${this.title} - Status: ${this.status}`;
//     };
// }
//
// const test1 = new TestCase(101, "User Login", 5);
// console.log(test1.getSummary());
//
// // ==================== QUESTION 2 ====================
// console.log("\n=== Question 2: ES6 Features ===");
//
// const testData = {
//     title: "Checkout Flow",
//     steps: 12,
//     isAutomated: true
// };
//
// // Destructuring
// const { title, steps, isAutomated } = testData;
//
// const getPriority = (stepCount) => stepCount > 8 ? "High Priority" : "Normal Priority";
//
// console.log(`Test: ${title}`);
// console.log(`Steps: ${steps} → ${getPriority(steps)}`);
// console.log(`Automated: ${isAutomated}`);
//
// // ==================== QUESTION 3 ====================
// console.log("\n=== Question 3: Modules (Preparation for Project) ===");
//
// const storage = {
//     saveTests: (tests) => {
//         console.log(`✅ ${tests.length} Tests saved to JSON`);
//     },
//
//     loadTests: () => {
//         return [
//             { id: 1, title: "Login Test", status: "Pending" },
//             { id: 2, title: "Cart Test", status: "PASSED" },
//             { id: 3, title: "Payment Test", status: "FAILED" }
//         ];
//     }
// };
//
// // Call the functions
// const loadedTests = storage.loadTests();
// console.log("Loaded tests:", loadedTests);
// storage.saveTests(loadedTests);