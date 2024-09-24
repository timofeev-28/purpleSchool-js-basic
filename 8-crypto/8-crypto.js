// Принимаем требование по длине пароля не менее 6 символов

const crypto = (password) => {
    if (!password || password.length < 6) {
        return console.log('Длина пароля не менее 6 знаков');
    }

    const [one, two, three, four, ...rest] = password;
    let res = [two, one, four, three, ...(rest.reverse())];
    return res.join('');
}

const check = (original, encrypt) => {
    if (!encrypt || !original) {
        return false;
    }

    return original === crypto(encrypt);
}
// =============================================================

const original = 'password';
const encrypt = crypto(original); // apssdrow
// если сломать: const encrypt = crypto('apssdro'), то вызов check(original, encrypt) будет false;
const decrypt = crypto(encrypt); // password

console.log(original, encrypt, decrypt, original === decrypt); // 'password', 'apssdrow,' 'password', true;
console.log(check(original, encrypt))
