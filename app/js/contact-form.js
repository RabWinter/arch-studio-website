'use strict';

function runForm() {
  const btnSubmit = document.querySelector('.btn-submit');
  const userName = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const inputArr = [userName, email, message];

  function showError(input, msg) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = msg;
  }

  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    const small = formControl.querySelector('small');
    small.innerText = '';
  }

  function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (input.value.trim() === '') {
      checkRequired(inputArr);
    } else if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Please enter a valid email');
    }
  }

  function checkRequired(inputArr) {
    inputArr.forEach((input) => {
      if (input.value.trim() === '') {
        showError(input, `Can't be empty`);
      } else {
        showSuccess(input);
      }
    });
  }

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    checkRequired(inputArr);
    checkEmail(email);
  });
}
runForm();
