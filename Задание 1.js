let num = +prompt('Введите число');
if (isNaN(num)) {
    console.log('Упс, кажется, вы ошиблись');
} else {
    if (num % 2 == 0) {
        console.log('Четное число');
    }
    if (num % 2 !== 0) {
        console.log('Не четное число');
    }
}