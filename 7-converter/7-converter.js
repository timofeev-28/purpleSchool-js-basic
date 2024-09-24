const getTargetCurrencyIcon = (target) => {
    target = target.toUpperCase();

    switch (target) {
        case 'RUB':
            return 'руб';
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
        case 'CNY':
            return '¥';
        default:
            return '';
    }
}

const convertSum = (sum, initial, target) => {
    const USD = 90;
    const EUR = 100;
    const CNY = 12;

    initial = initial.toUpperCase();
    target = target.toUpperCase();

    switch (initial) {
        case 'CNY':
            switch (target) {
                case 'RUB':
                    return sum * CNY;
                case 'USD':
                    return (sum * CNY) / USD;
                case 'EUR':
                    return (sum * CNY) / EUR;
                default:
                    return null;
            }
        case 'USD':
            switch (target) {
                case 'RUB':
                    return sum * USD;
                case 'EUR':
                    return (sum * USD) / EUR;
                case 'CNY':
                    return (sum * USD) / CNY;
                default:
                    return null;
            }
        case 'EUR':
            switch (target) {
                case 'RUB':
                    return sum * EUR;
                case 'USD':
                    return (sum * EUR) / USD;
                case 'CNY':
                    return (sum * EUR) / CNY;
                default:
                    return null;
            }
        case 'RUB':
            switch (target) {
                case 'USD':
                    return sum / USD;
                case 'EUR':
                    return sum / EUR;
                case 'CNY':
                    return sum / CNY;
                default:
                    return null;
            }
        default:
            return null;
    }
}

const converter = (sum, currency, targetCurrency, func) => {
    let resSum = func(sum, currency, targetCurrency);
    resSum = resSum ? resSum.toFixed(2) : resSum;

    const icon = resSum ? getTargetCurrencyIcon(targetCurrency) : '';

    return `${resSum} ${icon}`;
}

console.log(converter(1000, 'rub', 'cny', convertSum)); // 83.33 ¥;
console.log(converter(1000, 'rub', 'chf', convertSum)); // null;
