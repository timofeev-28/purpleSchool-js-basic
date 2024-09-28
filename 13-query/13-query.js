const getQueryString1 = (data) => {
    if (!data) {
        console.log('Отсутствуют данные при вызове функции');
        return null;
    }

    let str = '';
    for (let key in data) {
        str += `${key}=${data[key]}&`;
    }
    return str.slice(0, -1);
};

console.log(getQueryString1({search: "Вася", take: 10}));
