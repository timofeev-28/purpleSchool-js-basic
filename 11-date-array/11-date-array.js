const data = ['29/02/24', '30/02/24', '29.02.24', '30.02.24', '23-09-23', '29.09.02', '41-12', '32-06-24', 'введите дату', '24.08.21', '31.16', '10.13.24', '33/33/00','date-date-date', 'date', '6'];
// если дата пришла через /, то это формат мм/дд/год, и валидные значения всё-равно нужно переворачивать

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
    let day, month, year;

    if (date.includes('/')) {
        [month, day, year] = date.split('/');
    } else if (date.includes('-')) {
        [day,month, year] = date.split('-');
    } else if (date.includes('.')) {
        [day,month, year] = date.split('.');
    }
    if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
        return null;
    }
    return [day, month, year];
}

// По дням выполнено условие не более 31 в месяце, и учтены отличия для февраля (28 или 29);
const filterDates = (array, checkEl) => {
    return array
        .map(e => checkDate(e))
        .filter(e => e && e.length === 3 && checkEl(e))
        .map(e => e.join('.'));
}

console.log('Формат дат DD.MM.YY', filterDates(data, checkElement));
