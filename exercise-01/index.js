const sum = (array, res = 0) => {
    try {
        if (!array.length) throw "Mảng rỗng!!!"
        if (typeof array[0] !== 'number' || isNaN(array[0])) throw "Mảng chỉ bao gồm số!!!"
        res += array[0];
        array.shift();
        return array.length > 0 ? sum(array, res) : res;
    }
    catch (e) {
        return e;
    }
}

let isNaN = (maybeNaN) => maybeNaN !== maybeNaN;

const array = [5, 9, 6, 8, 4, 6]; // sum: 38
const array2 = [23, 34, 236, 7352, 23462, 234, 6734, 1234, 634234, 623234]; // sum: 1296777
const array3 = [5, 9, 6, NaN, 8, 4, 6]; // throw error
const array4 = []; // throw error

console.log(sum(array));