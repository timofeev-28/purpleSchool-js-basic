const isCorrectNumber = (num) => {
    num = num.replaceAll('-', '');
    for (let el of num) {
        if (isNaN(el)) {
            console.log('Проверьте правильность ввода номера карты');
            return null;
        }
    }

    let numCard = [];
    for (let el of num) {
        numCard.push(Number(el));
    }

    let sum = 0;
    numCard.map((el, i) => {
        if (i % 2 === 0) {
            sum += (el * 2 <= 9) ? el * 2 : el * 2 - 9;
        } else {
            sum += el;
        }
    })
    return sum % 10 === 0 ? true : false;
}

const card1 = '4561-1213-4367-261p';
const card2 = '4561-1213-4367-2612';
const card3 = '4561-1213-4367-2611';

console.log(isCorrectNumber(card1));
console.log(isCorrectNumber(card2));
console.log(isCorrectNumber(card3));
