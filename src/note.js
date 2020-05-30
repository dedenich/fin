const SVGo = '<svg class="spendings-list__ind" height="30" width="30"><circle cx="15" cy="15" r="8" fill="#f5625d"/></svg>';
const LIST = document.getElementById('list');

export class Note {
  constructor(amount, comment, change) {
    this.amount = amount;
    this.comment = comment;
    this.change = change;
  }

  render() {
    const list = document.createElement('li');
    const divSVG = document.createElement('div');
    divSVG.classList.add('spendings-list__ind');
    if (this.change === true) divSVG.classList.add('increase');
    divSVG.innerHTML = SVGo;
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('spendings-list__comment');
    commentDiv.textContent = this.comment;
    const amountDiv = document.createElement('div');
    amountDiv.classList.add('spendings-list__summa');
    amountDiv.textContent = Number(this.amount).toFixed(2);
    const d = new Date();
    amountDiv.dataset.time = `${d.getDate()}.${d.getMonth() + 1}<br>${d.getHours()}:${d.getMinutes()}`;
    list.append(divSVG, commentDiv, amountDiv);
    LIST.appendChild(list);
  }
}

export function createRender(amount, comment, change) {
  const a = new Note(amount, comment, change);
  a.render();
  if (document.getElementById('n-stifle') !== null) {
    document.getElementById('n-stifle').outerHTML = '';
  }
}

export function createRenderLS(amount, comment, change) {
  const a = new Note(amount, comment, change);
  const spArr = JSON.parse(localStorage.getItem('spendings'));
  spArr.push(a);
  localStorage.setItem('spendings', JSON.stringify(spArr));
  a.render();
  if (document.getElementById('n-stifle') !== null) {
    document.getElementById('n-stifle').outerHTML = '';
  }
}
