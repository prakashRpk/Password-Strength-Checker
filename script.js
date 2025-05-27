let pswrd = document.querySelector('#myPassword');
let show = document.querySelector('#togglePassword');

show.onclick = function () {
  if (pswrd.type === 'password') {
    pswrd.setAttribute('type', 'text');
    show.classList.add('hide');
  } else {
    pswrd.setAttribute('type', 'password');
    show.classList.remove('hide');
  }
};

function strength(password) {
  let i = 0;
  if (password.length > 6) i++;
  if (password.length >= 10) i++;
  if (/[A-Z]/.test(password)) i++;
  if (/[a-z]/.test(password)) i++;
  if (/[0-9]/.test(password)) i++;
  if (/[^A-Za-z0-9]/.test(password)) i++; // Special character check
  return i;
}

let container = document.querySelector('.container');

document.addEventListener("keyup", function () {
  let password = document.querySelector('#myPassword').value;
  let score = strength(password);

  container.classList.remove('weak', 'medium', 'strong');

  if (score <= 2) {
    container.classList.add('weak');
  } else if (score <= 4) {
    container.classList.add('medium');
  } else {
    container.classList.add('strong');
  }
});
