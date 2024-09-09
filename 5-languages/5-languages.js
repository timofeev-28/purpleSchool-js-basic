const lang = prompt('Выберите язык пользователя из перечня: RU, EN, DE, FI, SWE, FRA');

switch(lang.toUpperCase()) {
    case ('RU'):
        console.log('Добрый день!');
        break;
    case ('EN'):
        console.log('Good day!');
        break;
    case ('DE'):
        console.log('Gutten Tag!');
        break;
    case ('FI'):
        console.log('Hyvää iltapäivää!');
        break;
    case ('SWE'):
        console.log('God eftermiddag!');
        break;
    case ('FRA'):
        console.log('Bon après-midi!');
        break;
    default:
        console.log('Вы не выбрали язык из перечня имеющихся((');
}
