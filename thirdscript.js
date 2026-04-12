// DAY 3 PRACTICE - Interview Questions
// Solved by: ELEGBEDE OLUWASOGO
// Course topics: Conditional Statements, for loop, while & do-while, Break & Continue

// ==================== QUESTION 1 ====================
console.log("=== Question 1: Test Step Validator ===");



const steps = [
    "Open login page",
    "Enter username",
    "Enter wrong password",
    "Click login button",
    "Check error message"
];
let count1 = 0;
let num = 1;
// 1. Use a for loop to go through the entire "steps" array

for (let i= 0; i <steps.length; ++i){
    console.log(steps[i])
}

// 2. For each step, print: "Step X: [step text]"   (where X is 1, 2, 3...)
// // 3. If the step contains "wrong password":
// //      - print "❌ This step causes failure"
// //      - use "continue" to skip the rest of this loop

let count2 = 0;
let num1 = 0;
let round = 1



while (num1 < steps.length){
    if (steps[count2] === "Enter wrong password"){
        console.log("Step:3 Skipped wrong password Entered ❌ This step causes failure");
        num1++
        count2++;
        round++;
        continue;}
        // // 4. If the step contains "error message":
// //      - print "✅ Test should fail here"
// //      - use "break" to stop the loop completely\


    else if (steps[count2].includes("Check error message"))
    {
        console.log(`Step:${round} The test failed here Wrong password detected `);
        round++;
        break;
    }

    console.log(`Step:${round} where ${steps[count2]} is performed`)
    num1++;
    count2++;
    round++;

}
// // 5. After the loop ends, print "Test simulation ended"
console.log("\"Test simulation ended\"")

// // ==================== QUESTION 2 ====================
// console.log("\n=== Question 2: Retry Logic Simulator ===");
//
// let attempts = 0;
// const maxAttempts = 5;
//
// // Use do-while loop + random pass/fail + break/continue
//
// // ==================== QUESTION 3 ====================
// console.log("\n=== Question 3: Playwright Test Runner Logic ===");
//
// let testStatus = "Pending";
// const testStepsCount = 7;
//
// // Combine conditionals + while loop + random fail simulation