function getRepositories() {
  const req = new XMLHttpRequest();

  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/morinoko/repos');
  req.send();
}

function showRepositories() {
  // this = the XMLHttpRequest object that fired the event
  let repos = JSON.parse(this.responseText);
  console.log(repos);

  const repoList = `<ul>${repos
    .map(repo =>
      '<li>' +
      repo.name +
      ' - <a href="#" data-repo="' +
      repo.name +
      '" onclick="getCommits(this)">Get Commits</a></li>'
    ).join('')}</ul>`;

  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showCommits);
  req.open('GET', 'https://api.github.com/repos/morinoko/' + name + '/commits');
  req.send();
}

function showCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.author.login +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('commits').innerHTML = commitsList;
}
