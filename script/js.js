let fs = require('fs');
let files = fs.readdirSync('../images/');

alert(files.length);