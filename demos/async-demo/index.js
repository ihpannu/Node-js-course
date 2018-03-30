console.log('Before');
getUser(1, (user) => {
  console.log('User: ', user);
});

console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from database...');
    callback({
      id: id,
      githubUsername: 'Harman'
    });
  }, 2000);

}

function getRepositories(username) {
  return ['repo1', 'repo2', 'repo3']
}