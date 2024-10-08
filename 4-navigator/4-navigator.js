const addressLat = 3;
const addressLong = 3;
const positionLat = 0;
const positionLong = 0;

// Принимаем, что значения координат только положительные;
const sideA = Math.max(addressLat, positionLat) - Math.min(addressLat, positionLat);
const sideB = Math.max(addressLong, positionLong) - Math.min(addressLong, positionLong);

const distance = (Math.sqrt(sideA ** 2 + sideB ** 2)).toFixed(1);
const result = `Расстояние от текущей точки до точки назначения ${distance} метра(ов).`;
