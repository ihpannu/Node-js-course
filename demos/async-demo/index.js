console.log('Before');

// getUser(1, user => {
//   getRepositories(user.githubUsername, repos => {
//     getCommits(repo[0], commits => {
//       console.log(commits);
//     });
//   });
// });
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.githubUsername);
    const commits = await getCommits(repo[0]);
    console.log(commits);
  } catch (err) {
    console.log('Error', err.message);
  }
}
displayCommits();
// getUser(1)
//   .then(user => getRepositories(user.githubUsername))
//   .then(repo => getCommits(repos[0]))
//   .then(commits => console.log('Commits', commits))
//   .catch(err => console.log('Error', err.message));

console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from database...');
      resolve({
        id: id,
        githubUsername: 'Harman'
      });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    getCommits(repos, displayCommits);
  });
}
