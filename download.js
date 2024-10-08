const fs = require('fs');
const path = require('path');

const zipPath = path.join(__dirname, 'project.zip');
const zipContent = fs.readFileSync(zipPath);
const base64Zip = zipContent.toString('base64');

console.log(JSON.stringify({ filename: 'project.zip', content: base64Zip }));