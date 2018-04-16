console.log("Before");

getUser(1, user => {
  console.log("User ", user);
});

console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database....");
    callback({
      id: id,
      githubUserName: "Harman",
      repos: {
        id: 1,
        name: "Vue js"
      }
    });
  }, 2000);
}

function hotUpdate(ok) {
  console.log(ok);
}
