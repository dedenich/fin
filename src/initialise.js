import { createRender } from './note.js';
import { aimCreateRender } from './aim.js';
import calculate from './calc.js';

export default async function init() {
  const aimObj = await JSON.parse(localStorage.getItem('aimObj'));
  const spArr = await JSON.parse(localStorage.getItem('spendings'));
  if (aimObj) {
    aimCreateRender(aimObj.amount, aimObj.comment);
    calculate(0, true);
    if (Array.isArray(spArr)) {
      document.getElementById('n-stifle').outerHTML = '';
      spArr.forEach((element) => {
        createRender(element.amount, element.comment, element.change);
      });
    }
  }
}
