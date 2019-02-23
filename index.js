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

  let repoList = "<ul>";

  for (let i = 0; i < this.responseText.length; i++) {
    repoList += "<li>" + this.responseText[i]['name'] + '</li>';
  }
  repoList += '</ul>';

  document.getElementById('repositories').innerHTML = repoList;
}
