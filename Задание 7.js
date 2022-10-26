let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
let result = arr.filter(function (elem) {
    if (elem % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

console.log(result);