console.log('hello!');

function* CreateRandomFunction() {
  while (true) {
    yield Math.random().toString(36).slice(2);
  }
}

let genFun = CreateRandomFunction();

function CreateNewUserID() {
  const div = document.createElement('div');
  div.innerHTML = 'User ID: ' + genFun.next().value;
  document.getElementById('users').appendChild(div);
  //console.log(genFun.next());
}
