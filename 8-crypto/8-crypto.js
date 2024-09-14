// 2 и 3 знаки в конец
const encodeStepOne = (arr) => {
    const interimArr = arr.splice(1, 2);

    return [...arr, ...interimArr];
}

// 1 и 2, 3 и 4 меняем местами, оставшиеся знаки разворачиваем
const encodeStepTwo = (arr) => {
    const [one, two, three, foor, ...rest] = arr;

    return [two, one, foor, three, ...(rest.reverse())];
}

// последний символ ставим вторым
const encodeStepThree = (arr) => {
    const el = arr.splice(-1);
    arr.splice(1, 0, el[0]);

    return arr.join('');
}

const decryptionStepOne = (arr) => {
    const el = arr.splice(1, 1);
    arr.push(el[0]);

    return arr;
}

const decryptionStepTwo = (arr) => {
    const [two, one, foor, three, ...rest] = arr;

    return [one, two, three, foor, ...(rest.reverse())];
}

const decryptionStepThree = (arr) => {
    const el = arr.splice(-2, 2);
    arr.splice(1, 0, el.join(''));

    return arr.join('');
}


// Принимаем требование по длине пароля не менее 6 символов
function encryptPassword(password) {
    if (password.length < 6) {
        return console.log('Длина пароля не менее 6 знаков');
    }

    password = encodeStepTwo(encodeStepOne(password.split('')));

    return encodeStepThree(password);
}


function checkPassword(password) {
    if (!password) {
        return;
    }
    password = decryptionStepTwo(decryptionStepOne(password.split('')));
    const resPassword = decryptionStepThree(password);

    return (ENTERED_PASSWORD === resPassword
        ? 'Результат TRUE - пароли совпадают'
        : 'Результат FALSE - пароли не совпадают');
}
// =============================================================

const ORIGINAL_PASSWORD = '$пароль28сложный@';
const ENTERED_PASSWORD = '$пароль28сложный@';

const encryptedPassword = encryptPassword(ORIGINAL_PASSWORD);

const checkResult = checkPassword(encryptedPassword);
console.log(checkResult);
