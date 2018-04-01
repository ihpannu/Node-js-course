console.log('Before');
getUser(1, getRepositories);
console.log('After');

const promise = new Promise((resolve, reject) => {});
function getRepositories(user) {
  getRepositories(user.githubUsername, getCommits);
}
function getCommits(repos) {
  getCommits(repo, displayCommits);
}
function displayCommits(commits) {
  console.log(commits);
}
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
