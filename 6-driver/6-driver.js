const hasLicence = true;
const age = 18;
const isDrunk = false;

const canDrive = hasLicence && age >= 18 && !isDrunk;
const res = `Водитель ${canDrive ? 'Может' : 'Не может'} садиться за руль`;
