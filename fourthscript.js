console.log("=== Question 1: Test Menu using Switch Case ===");

// EXACT TASK (do these steps in order):
// 1. Create a variable called choice with value 2 (you can change it later to test)

let choice = 2
console.log(choice);

// 2. Use a switch statement for these options:
//      1 → "Add new test case"
//      2 → "Run all tests"
//      3 → "Generate report"
//      4 → "Exit"
//      default → "Invalid option"


let steps = ["Add new test case",
                    "Run all tests",
                    "Generate report",
                    "Exit",
                    "Invalid option"]

// 3. After the switch, print the result using console.log

// Write your switch code here
for (let count = 0; count < steps.length; count++) {
    if(steps[count].includes("wrong password")){
        console.log(`${steps[count]} : This is a wrong password!`);
        count++;
    }
    else{
        switch (steps[count]) {
            case "Add new test case":
                console.log(`${steps[count]} : Import new test case`);
                continue;
            case "Run all tests":
                console.log(`${steps[count]} : Run all tests`);
                break;
            case  "Generate report":
                console.log(`${steps[count]} : Generate report`);
                break;
            case "Exit":
                console.log(`${steps[count]} : Exit`);
                break;
            default:
                console.log("Invalid option")
        }
    }
}


// EXACT TASK (do these steps in order):
// 1. Create a normal function called validateTest that takes 2 parameters (title, steps)

let LoginTest = ["Add new test case",
    "Run all tests",
    "Generate report",
    "Exit",
    "Invalid option",
    "Additional option"
]

    // 2. Inside the function: if steps > 5 return "Complex test" else return "Simple test"
function validateTest(title, steps){
    let step = 0

    for (let count = 0; count < title.length; count++) {
        console.log(`${title[count]}`);
        step++;
    }
    console.log(`We have total of ${step} steps`);
        if (step > 5){
            console.log(`This is a complex step`)
        }
        else {
            console.log("This is a simple step")
        }}

validateTest(LoginTest);


// 3. Call the function with title = "Login Test" and steps = 8, then console.log the result
let LoginsTest = ["Add new test case",
    "Run all tests",
    "Invalid option",
    "Additional option",
    "Add new test case",
    "Run all tests",
    "Invalid option",
    "Additional option"
]


// Write your normal function here
validateTest(LoginsTest);






// EXACT TASK (do these steps in order):
// 1. Create an arrow function called isAutomatedTest that takes a test object
//    and returns true if the test has property "type" equal to "UI"



// 2. Create an anonymous function (using const) called runTest that takes a title
//    and prints "🚀 Running test: [title]"
const runTest = ((titled)=>{
    return titled
})




// 3. Create a test object: { title: "Checkout Flow", type: "UI", steps: 12 }

const titles = {
    title: "Checkout Flow",
    type: "UI",
    steps: 12
};

// 4. Call isAutomatedTest with the object and print the result


// 5. Call runTest with the title
console.log(runTest(5));

// Write your arrow + anonymous functions here






