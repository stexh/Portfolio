/* eslint-env es6 */
/* eslint-disable */


const hamburger = document.querySelector('.hamburger');
const hamburger_btn = document.querySelector('.mobile-nav');


hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    hamburger_btn.classList.toggle('is-active')

})
