export default function calculate(amount, change) {
  const aim = Number(JSON.parse(localStorage.getItem('aim')));
  let sum = Number(JSON.parse(localStorage.getItem('sum')));
  if (change) {
    sum += Number(amount);
  } else {
    sum -= Number(amount);
  }
  document.getElementById('r-perc').textContent = ((sum / aim) * 100).toFixed(2);
  document.getElementById('r-cur').textContent = (aim - sum).toFixed(2);
  localStorage.removeItem('sum');
  localStorage.setItem('sum', String(sum));
}
