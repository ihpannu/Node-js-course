console.log('Before');
getUser(1, user => {
  getRepositories(user.githubUsername, repo => {
    console.log('Repos: ', repo);
  });
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

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Calling GitHub API...');
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}
