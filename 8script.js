const { loadTests, saveTests } = require('./storage');
const TestCase = require('./TestCase');

console.log("=== Day 8 Test ===");

const t1 = new TestCase(1, "Login Test", "Check login flow", ["Open page", "Enter email", "Click login"]);
const t2 = new TestCase(2, "Add to Cart", "Test cart functionality", ["Go to product", "Click add to cart"]);

saveTests([t1, t2]);
const loaded = loadTests();
console.log("Loaded", loaded.length, "tests from JSON");