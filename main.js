'use strict';

let list = document.querySelector('.tree');

list.addEventListener('click', event => {
  if (event.target.tagName === 'SPAN') {
    const hiddeEl = event.target.parentNode.querySelector('ul');
      if (hiddeEl) {
        hiddeEl.hidden = !hiddeEl.hidden;
      }
  }
});
