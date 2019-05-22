'use strict';

let list = document.querySelector('.tree');

list.addEventListener('click', event => {
if (event.target.tagName === 'SPAN') {
  let hiddeEl = event.target.parentNode.querySelector('ul');
    if (hiddeEl) {
      hiddeEl.hidden = !hiddeEl.hidden;
    }
  }
});
