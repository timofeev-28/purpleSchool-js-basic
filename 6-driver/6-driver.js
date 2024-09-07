const hasLicence = true;
const age = 18;
const isDrunk = false;

const canDrive = hasLicence && age >= 18 && !isDrunk;
const res = `${canDrive ? 'Может' : 'Не может'}`;
