const array = [1, 3, 5, 6, 87, 7, 9, 64, 22, 1, 12];
//const evenArray = array.filter((num) => num % 2 === 0);
let evenArray = [];

for (num of array) {
    if (num % 2 === 0) {
        evenArray.push(num);
    }
}

console.log(evenArray);