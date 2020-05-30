import { createRenderLS } from './note.js';
import { aimCreateRenderLS } from './aim.js';
import calculate from './calc.js';
import init from './initialise.js';

const LIST = document.getElementById('list');
init();

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
  if (document.getElementById('aim').dataset.state === 'empty') {
    document.getElementById('form-aim').classList.toggle('hidden');
  } else {
    document.getElementById('form').classList.toggle('hidden');
  }
});

document.querySelectorAll('.close_button').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.target.closest('.form-bg').classList.toggle('hidden');
  });
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = document.getElementById('input-Am').value;
  const comment = document.getElementById('input-Com').value;
  const change = document.getElementById('input-Change').checked;
  createRenderLS(amount, comment, change);
  calculate(amount, change);
  e.target.closest('.form-bg').classList.toggle('hidden');
  e.target.closest('form').reset();
});

document.getElementById('form-aim').addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = document.getElementById('a-input-Am').value;
  const comment = document.getElementById('a-input-Com').value;
  aimCreateRenderLS(amount, comment);
  document.getElementById('aim').dataset.state = 'not empty';
  e.target.closest('.form-bg').classList.toggle('hidden');
  e.target.closest('form').reset();
  localStorage.setItem('aim', amount);
  localStorage.setItem('sum', 0);
  localStorage.setItem('spendings', JSON.stringify([]));
});
