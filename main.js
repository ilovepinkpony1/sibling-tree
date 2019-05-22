'use strict';

let list = document.querySelector('.tree');

list.addEventListener('click', event => {
if (event.target.tagName === 'SPAN') {
    event.target.parentNode.childNodes.forEach(el => {
      if(el.tagName === 'UL') {
        el.hidden = !el.hidden;
      }
    });
  }
});
