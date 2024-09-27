const data = ['29/02/24', '30/02/24', '23-09-23', '29/09/02', '41-12', '32/06/24', 'введите дату', '24.08.21', '31.16', '10.13.24', '33/33/00', 'date', '6'];

const checkElement = (arr) => {
    let day = Number(arr[0]);
    let month = Number(arr[1]);
    let year = Number(arr[2]);

    switch (true) {
        case (month === 2 && year % 4 !== 0):
            return day > 0 && day <= 28;

        case (month === 2 && year % 4 === 0):
            return day > 0 && day <= 29;

        case (month !== 2 && month > 0 && month <= 12):
            return day > 0 && day <= 31;

        default: false;
    }
}

const checkDate = (date) => {
    if (date.includes('/')) {
        date = date.replaceAll('/', '.');
    }
    if (date.includes('-')) {
        date = date.replaceAll('-', '.');
    }

    return date.split('.')
}

// По дням выполнено условие не более 31 в месяце, и учтены отличия для февраля (28 или 29);
const filterDates = (array, checkEl) => {
    return array
        .map(e => checkDate(e))
        .filter(e => e.length === 3 && checkEl(e))
        .map(e => e.join('.'));
}

console.log('Формат дат DD.MM.YY', filterDates(data, checkElement));
