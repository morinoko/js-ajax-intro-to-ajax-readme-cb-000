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
