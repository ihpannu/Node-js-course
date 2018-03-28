const _ = require('underscore');
// 1 Step - Core module
// 2 Step - File or folder
// 3 Step - node_modules
const results = _.contains([1, 2, 3, 4], 3);
console.log(results);
