'use strict';

const page = {
    buttons: document.querySelector('.btns-wrap'),
    inputs: document.querySelector('.inputs-wrap'),
    answer: document.querySelector('.res'),
    selectedAction: null,
};

page.buttons.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') return;

    const btn = event.target;

    if (btn.classList.contains('btn-active')) {
        btn.classList.remove('btn-active');
        page.selectedAction = null;
        return;
    }

    resetActiveButtons();
    selectButton(btn);
});

function clearForm() {
    resetActiveButtons();
    resetInputs();
}

function resetInputs() {
    page.inputs.querySelectorAll('input').forEach(input => input.value = '');
}

function resetActiveButtons() {
    page.buttons.querySelectorAll('.btn').forEach(button => {
        button.classList.remove('btn-active');
    });
    page.selectedAction = null;
}

function selectButton(button) {
    button.classList.add('btn-active');
    page.selectedAction = button.dataset.btn;
}

function showError(message) {
    page.answer.innerText = message;
    page.answer.classList.add('error');
}

function renderResult(result) {
    page.answer.innerText = result;
    page.answer.classList.remove('error');
    clearForm();
}

function getCalculateFunction(char) {
    const actions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => b !== 0 ? a / b : 'Нельзя делить на ноль',
        '*': (a, b) => a * b,
    };
    return actions[char];
}

function submitForm() {
    const inputs = [...page.inputs.querySelectorAll('input')];
    const [input1, input2] = inputs.map(input => Number(input.value));

    if (isNaN(input1) || !input1) {
        return showError('Введите первое число');
    }
    if (isNaN(input2) || !input2) {
        return showError('Введите второе число');
    }
    if (!page.selectedAction) {
        return showError('Выберите операцию');
    }

    const action = getCalculateFunction(page.selectedAction);
    const result = action ? action(input1, input2) : 'Нет такой операции';

    renderResult(`${input1} ${page.selectedAction} ${input2} = ${parseFloat(result.toFixed(2))}`);
};
