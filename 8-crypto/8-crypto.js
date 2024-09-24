const crypto = (password, lengthPassw) => {
    if (!password || !password.length) {
        return NaN;
    }
    const splitedArray = password.split('');
    if (splitedArray.length <  lengthPassw) {
        return false;
    }

    const middleIndex = Math.floor(splitedArray.length / 2);
    const firstHalf = splitedArray.slice(0, middleIndex).reverse();
    const secondHalf = splitedArray.slice(middleIndex).reverse();
    const length = secondHalf.length;
    [secondHalf[1], secondHalf[length - 2]] = [secondHalf[length - 2], secondHalf[1]];

    const encryptedPassword = firstHalf.concat(secondHalf);
     return encryptedPassword.join('');


    // ещё вариант

    // const [one, two, three, four, ...rest] = splitedArray;
    // let res = [two, one, four, three, ...(rest.reverse())];
    // return res.join('');
}

const check = (original, encrypt) => {
    if (!encrypt || !original) {
        return false;
    }
    return original === crypto(encrypt);
}

const getRandomNumber = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
}

const getRandomPassword = (length) => {
    let min = 0;
    let max = 86;

    const simbolsArray = Array.from({length: 87}, (_, i) => String.fromCharCode(i + 33));
    console.log(simbolsArray);

    const password = Array.from({length}, () => simbolsArray[getRandomNumber(min, max)]);
    return password.join('');
}
// =============================================================

// длина пароля
let length = 8;
const original = getRandomPassword(length);
const encrypt = crypto(original, length);
const decrypt = crypto(encrypt, length);

console.log(original, encrypt, decrypt, check(original, encrypt));
