/**
 * attach 'is-desktop' or 'is-mobile' class into <body>
 * based on the screen breakpoint 992px
 */

let mql = window.matchMedia("(min-width: 992px)");

let attach = (e) => {
    if (e.matches) {
        document.body.classList.remove('is-mobile');
        document.body.classList.add('is-desktop');
    }
    else {
        document.body.classList.remove('is-desktop');
        document.body.classList.add('is-mobile');
    }
}

window.addEventListener('DOMContentLoaded', attach(mql));
mql.addEventListener('change', attach);

window.addEventListener('load', () => {
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let leftH = left.getBoundingClientRect().height;
    let isdesktop = document.querySelector('body').classList.contains('is-desktop');

    if (isdesktop) {
        right.setAttribute('style', `height: ${leftH}px;`);
    }
});
