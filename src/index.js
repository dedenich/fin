import {createRender} from './note.js';

const LIST = document.getElementById('list');

LIST.addEventListener('click', (e) => {
  if (e.target.classList.contains('spendings-list__summa')) {
    if (e.target.classList.contains('time')) {
      e.target.dataset.date = e.target.innerHTML;
      e.target.innerHTML = e.target.dataset.amount;
    } else {
      e.target.dataset.amount = e.target.innerHTML;
      e.target.innerHTML = e.target.dataset.time;
    }
    e.target.classList.toggle('time');
  }
});

document.getElementById('add_button').addEventListener('click', () => {
  document.getElementById('form').classList.toggle('hidden');
});

document.getElementById('close_button').addEventListener('click', () => {
  document.getElementById('form').classList.toggle('hidden');
});

document.getElementById('form_Submit').addEventListener('click', (e) => {
  e.preventDefault();
  const amount = document.getElementById('input-Am').value;
  const comment = document.getElementById('input-Com').value;
  const change = document.getElementById('input-Change').checked;
  createRender(amount, comment, change);
  document.getElementById('form').classList.toggle('hidden');
  document.getElementById('formTag').reset();
});
