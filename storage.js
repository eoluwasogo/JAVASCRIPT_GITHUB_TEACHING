// storage.js
// Course topic: Overview on Modules + ES6

const fs = require ('fs');
const path = './tests.json';

function loadTests() {
    if (!fs.existsSync(path)) {
        return [];
    }
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
}

function saveTests(tests) {
    fs.writeFileSync(path, JSON.stringify(tests, null, 2));
    console.log('✅ Tests saved to tests.json');
}

module.exports = { loadTests, saveTests };