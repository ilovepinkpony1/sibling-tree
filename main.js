'use strict';

let list = document.querySelector('.tree');

list.addEventListener('click', event => {
if(event.target.parentNode.childNodes.length > 1) {
    if (event.target.parentNode.childNodes[1].style.display === 'none') {
      event.target.parentNode.childNodes[1].style.display = 'block';
    } else {
      event.target.parentNode.childNodes[1].style.display = 'none';
    }
} 
})