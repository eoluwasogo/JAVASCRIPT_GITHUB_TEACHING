// TestCase.js
// Course topics: Class & methods, Constructor, this keyword

class TestCase {
    constructor(id, title, description, steps) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.steps = steps;              // array of strings
        this.status = 'Pending';
    }

    getSummary() {
        return `Test #${this.id}: ${this.title} (${this.status}) - ${this.steps.length} steps`;
    }

    run() {
        console.log(`🚀 Running Test #${this.id}: ${this.title}`);
        for (let i = 0; i < this.steps.length; i++) {
            console.log(`   Step ${i+1}: ${this.steps[i]}`);
        }
        this.status = Math.random() > 0.3 ? 'PASSED' : 'FAILED';
        console.log(`   Result → ${this.status}\n`);
        return this.status;
    }
}

module.exports = TestCase;