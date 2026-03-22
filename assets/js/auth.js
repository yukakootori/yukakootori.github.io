/* Simple password gate */
(function () {
  var gate  = document.getElementById('auth-gate');
  var form  = document.getElementById('auth-form');
  var input = document.getElementById('auth-input');
  var err   = document.getElementById('auth-error');
  if (!gate) return;

  if (sessionStorage.getItem('auth') === '1') {
    gate.hidden = true;
    return;
  }

  gate.hidden = false;
  document.body.style.overflow = 'hidden';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value === 'panda') {
      sessionStorage.setItem('auth', '1');
      gate.hidden = true;
      document.body.style.overflow = '';
    } else {
      err.textContent = 'Incorrect password.';
      input.value = '';
      input.focus();
    }
  });
})();
