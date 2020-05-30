export class Aim {
  constructor(amount, comment) {
    this.amount = amount;
    this.comment = comment;
  }

  render() {
    const card = document.createElement('div');
    const container = document.createElement('div');
    container.classList.add('aim-container__curr-cont');
    const h2 = document.createElement('h2');
    h2.textContent = Number(this.amount).toFixed(2);
    const controlsDiv = document.createElement('div');
    controlsDiv.classList.add('aim-container__cur-controls');
    const controlsCurDiv = document.createElement('div');
    controlsCurDiv.classList.add('aim-container__controls_cur');
    controlsCurDiv.textContent = 'BYN';
    const desxrDiv = document.createElement('div');
    desxrDiv.classList.add('aim-container__aim-descr');
    desxrDiv.textContent = this.comment;
    controlsDiv.append(controlsCurDiv);
    container.append(h2, controlsDiv);
    card.append(container, desxrDiv);
    document.getElementById('aim').append(card);
  }
}

export function aimCreateRender(amount, comment) {
  const a = new Aim(amount, comment);
  a.render();
  document.getElementById('stifle').outerHTML = '';
  document.getElementById('aim').dataset.state = 'not empty';
}

export function aimCreateRenderLS(amount, comment) {
  const a = new Aim(amount, comment);
  localStorage.setItem('aimObj', JSON.stringify(a));
  a.render();
  document.getElementById('stifle').outerHTML = '';
  document.getElementById('aim').dataset.state = 'not empty';
}
