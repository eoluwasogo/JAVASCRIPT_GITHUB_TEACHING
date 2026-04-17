// DAY 6 PRACTICE - Interview Questions
// Solved by: ELEGBEDE OLUWASOGO
// Course topics: Class, methods, Inheritance, this, super, Constructor

// ==================== QUESTION 1 ====================
console.log("=== Question 1: Base TestCase Class ===");

// EXACT TASK:
// 1. Create a class called TestCase
// 2. Add a constructor that takes (id, title, steps)
// 3. Inside constructor use this.id, this.title, this.steps, this.status = "Pending"
// 4. Add a method getSummary() that returns "Test #ID: TITLE - Status: STATUS"
// 5. Create one object and call getSummary()

// Write your class here

// ==================== QUESTION 2 ====================
console.log("\n=== Question 2: Inheritance + super ===");

// EXACT TASK:
// 1. Create a child class UITestCase that extends TestCase
// 2. Constructor should take (id, title, steps, browser)
// 3. Use super(id, title, steps) then this.browser = browser
// 4. Override the run() method to print "🌐 Running in ${browser}" then call super.run()
// 5. Create one UITestCase and call run()

// Write your UITestCase class here

// ==================== QUESTION 3 ====================
console.log("\n=== Question 3: Multiple Test Types ===");

// EXACT TASK:
// 1. Create another child class APITestCase that extends TestCase
// 2. Constructor: (id, title, steps, endpoint)
// 3. Use super + this.endpoint
// 4. Override run() to print "🔌 API Test to ${endpoint}" then super.run()
// 5. Create one APITestCase and call run()

// Write your APITestCase class here