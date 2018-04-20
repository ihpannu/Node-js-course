// console.log("Before");

// getUser(1, user => {
//   console.log("User ", user);
// });

// console.log("After");

// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("Reading a user from database....");
//     callback({
//       id: id,
//       githubUserName: "Harman",
//       repos: {
//         id: 1,
//         name: "Vue js"
//       }
//     });
//   }, 2000);
// }

// function hotUpdate(ok) {
//   console.log(ok);
// }

const p = new Promise(function(resolve, reject) {
  // Kick off some async work
  setTimeout(() => {
    // resolve(1);
    reject(new Error("message"));
  }, 2000);
});
p
  .then(result => console.log("Result", result))
  .catch(error => console.error("Error", error.message));
