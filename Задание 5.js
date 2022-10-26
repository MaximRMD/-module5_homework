const arr = [54, 23, 243, 589, 749, 53.3, 23.05];
let sum = 0;
let summaConsole = ('Сумма массива');
let longArr = ('Длинна массива');
let arrFace = ("Элементы массива");
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(arr.length, longArr);
console.log(sum, summaConsole);
console.log(arr, arrFace);