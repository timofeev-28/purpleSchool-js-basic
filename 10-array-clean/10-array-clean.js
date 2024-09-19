const array = [-6, -3, 0, 1, 13, 20, 33, 90];

const checkElement = (el) => (el > 5);

const filterArray = (arr, func) => {
    const resArr = [];

    for (let el of arr) {
        if (!func(el)) {
            resArr.push(el);
        }
    }

    return resArr;
}

console.log(filterArray(array, checkElement));
