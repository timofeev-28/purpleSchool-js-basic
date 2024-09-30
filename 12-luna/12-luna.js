const isCorrectNumber = (card) => {
    const cardNumber = card
        .replaceAll('-', '')
        .split('')
        .map(Number);

    if (cardNumber.includes(NaN)) {
        console.log('Что-то с номером карты не так');
        return NaN;
    }

    for (let i = 0; i < cardNumber.length; i += 2) {
        cardNumber[i] = (cardNumber[i] * 2 <= 9) ? cardNumber[i] * 2 : cardNumber[i] * 2 - 9;
    }

    let sum = cardNumber.reduce((acc, e) => acc + e);
    return sum % 10 === 0;
}

const card1 = '4561-1213-4367-261p';
const card2 = '4561-1213-4367-2612';
const card3 = '4561-1213-4367-2611';

console.log(isCorrectNumber(card1));
console.log(isCorrectNumber(card2));
console.log(isCorrectNumber(card3));
