function getExchangeRate(originalCarrency, targetCarrency) {
    const original = originalCarrency.toUpperCase();
    const target = targetCarrency.toUpperCase();

    switch(true) {
        case original === 'RUB' && target === 'USD':
            return 91.11;
        case original === 'RUB' && target === 'EUR':
            return 100.5;
        case original === 'RUB' && target === 'CNY':
            return 12.7;
        case original === 'USD' && target === 'RUB':
            return 0.010975;
        case original === 'USD' && target === 'EUR':
            return 0.90646;
        case original === 'USD' && target === 'CNY':
            return 0.140428;
        case original === 'EUR' && target === 'RUB':
            return 0.00995;
        case original === 'EUR' && target === 'USD':
            return 0.90646;
        case original === 'EUR' && target === 'CNY':
            return 0.90646;
        case original === 'CNY' && target === 'RUB':
            return 0.07877;
        case original === 'CNY' && target === 'USD':
            return 7.12;
        case original === 'CNY' && target === 'EUR':
            return 7.85;
        default:
            return null;
    }
}

// ПОДДЕРЖИВАЕМЫЕ ВАЛЮТЫ: RUB, USD, EUR, CNY

function getConversion(sum, originalCarrency, targetCarrency) {
    if (getExchangeRate(originalCarrency, targetCarrency)) {
        const res = (sum / getExchangeRate(originalCarrency, targetCarrency)).toFixed(2);

        return `Сумма конвертации ${sum} ${originalCarrency.toUpperCase()} в ${targetCarrency.toUpperCase()} равна ${res} ${targetCarrency.toUpperCase()}`;
    }
    
    return `Конвертация данной пары валют не поддерживается`;
}
