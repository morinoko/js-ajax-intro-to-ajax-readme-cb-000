function getRepositories() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/users/morinoko/repos');
  req.send();
}

function showRepositories() {
  // this = the XMLHttpRequest object that fired the event
  console.log(this.responseText);
}
