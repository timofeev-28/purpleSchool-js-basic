const arr = [1, 40, -5, 10, 0, -17, 22, 0, 11, -5];
const increment = true; // по возрастанию (false - по убыванию)

function compareValues(increment, a, b) {
    if (increment) {
        return a > b;
    }
    return a < b;
}

function sortElements(arr, increment) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (compareValues(increment, arr[i], arr[j])) {
                let el = arr[i];
                arr[i] = arr[j];
                arr[j] = el;
            }
        }
    }
    return arr;
}

console.log(sortElements(arr, increment));
