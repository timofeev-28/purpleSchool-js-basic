const numbers = Array.from({ length: 25 }, () => {
    const min = -100;
    const max = 100;
    const randomNumber = Math.ceil(Math.random() * (max - min) + min);
    return randomNumber;
});

const sortArray = (incomingArray, increase = true) => {
    const array = [...incomingArray];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const isExchange = increase ? array[i] > array[j] : array[i] < array[j];
            if (isExchange) {
                [array[j], array[i]] = [array[i], array[j]];
            }
        }
    }

    return array;
}

console.log(numbers);
console.log('Отсортированный по возрастанию массив:', sortArray(numbers));
console.log('Отсортированный по убыванию массив:', sortArray(numbers, false));
