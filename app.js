let btns = document.querySelectorAll('.btn');
let btnClear = document.querySelector('.btn-clear');
let btnEqual = document.querySelector('.btn-equal');
let screen = document.querySelector('.screen');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;

    })

}



btnEqual.addEventListener('click', () => {
    let value = eval(screen.value);
    screen.value = value;
})


btnClear.addEventListener('click', () => {
    screen.value = '';
})