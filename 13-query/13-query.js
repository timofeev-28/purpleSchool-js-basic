const getQueryString = (data) => {
    let str = '';

    for (let key in data) {
        str += `${key}=${data[key]}&`;
    }
    return str.slice(0, -1);
}

console.log(getQueryString({search: "Вася", take: 10}));
