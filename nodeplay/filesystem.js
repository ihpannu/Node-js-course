const fs = require("fs");
// Sync function

const syncFs = fs.readdirSync('./')

// Async Function

const asyncFs = fs.readdir("./", (err, files) => {
  if (err) 
    console.log("Error", err);
  else 
    console.log("Result", files);
  }
);

// Console Statement

console.log(syncFs)
console.log(asyncFs)