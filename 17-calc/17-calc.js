'use strict';

const inputs = document.querySelectorAll('.input');
const btns = document.querySelectorAll('.btn');
const res = document.querySelector('.res');

const buttonClickHandler = (event) => {
    event.preventDefault();
    let a = Number(inputs[0].value);
    let b = Number(inputs[1].value);

    switch (event.target.dataset.btn) {
        case 'sum':
            res.textContent = `${a} + ${b} = ${a + b}`;
            break;
        case 'subtraction':
            res.textContent = `${a} - ${b} = ${a - b}`;
            break;
        case 'multiplication':
            res.textContent = `${a} x ${b} = ${a * b}`;
            break;
        case 'division':
            if (b === 0) {
                res.textContent = `На ноль делить нельзя`;
            break;
            }
            res.textContent = `${a} / ${b} = ${a / b}`;
            break;
        default:
            console.log('Не знаю, что случилось))');
            break;
    };
    inputs.forEach(input => input.value = '');
};

// очищаем поле с результатом при вводе новых чисел в инпуты
const inputClickHandler = () => {
    if (res.textContent) {
        res.textContent = '';
    }
};

btns.forEach(btn => {
    btn.addEventListener('click', buttonClickHandler);
});

inputs.forEach(input => {
    input.addEventListener('click', inputClickHandler);
});
