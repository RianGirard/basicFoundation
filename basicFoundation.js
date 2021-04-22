// #1 Get 1 to 255: 

function createArray() {
    var array = [];
    for (var i = 1; i < 256; i++){
        array.push(i);  // adds the current i to the end position of the array
    }
    console.log(array);
    return array;
}
createArray();


// #2 Get even 1000: 

function getSumEvens() {
    var sum = 0;
    for (var i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
} 
getSumEvens();


// #3 Sum odd 5000:

function getSumOdds() {
    var sum = 0;
    for (var i = 1; i < 5000; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}
getSumOdds();


// #4 Iterate an array: 
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        }
    return sum;
}
var example = sumArray([1,3,-5,7,9,11,13,-15,17,19]);
console.log(example);


// #5 Find max: 

function largest(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var number = largest([1,-35,7,100]);  // calls function to return the largest number in the array
console.log(number);


// #6 Find average: 

function getAverage(arr) {
    var avg = 0;
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
var average = getAverage([-5, 7, 91]);
console.log(average);


// #7 Array odd: 

function oddNums(n) {
    var arr = [];
    for (var i = 0; i < n; i++){
        if (i % 2 !== 0){
            arr.push(i);
        }
    }
    console.log(arr);
    return arr;
}
oddNums(50);


// #8 Greater than Y: 

function greaterThan(arr, Y) {
    var sum = 0;
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] > Y) {
            sum = sum + 1;
        }
    }
    console.log(sum);
    return sum;
}
greaterThan([1, 3, 5, 7, 1234, -22], -2);


// #9 Squares: 

function squareValues(arr){
    for (var i = 0; i < arr.length; i++){
        let num = arr[i] * arr[i];
        arr[i] = num;
    }
    console.log(arr);
    return arr;
}
squareValues([-1,3,-5,7,9, 1111]);


// #10 Negatives: 

function replaceNegs(arr){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
    return arr;
}
replaceNegs([1, 1234,23, 23, -1, 23,-98]);


// #11 Max/Min/Avg:

function getValues(arr) {
    var avg = 0;
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
    }
    avg = sum / arr.length;
    newArr.push(max, min, avg);
    console.log(newArr);
    return newArr;
}
getValues([-100, 300, -500, 75]);


// #12 Swap Values:

function swapValues(arr) {
    var n = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (i == arr.length - 1){
            arr[0] = arr[i];
            arr[i] = n;
        }
    }
    console.log(arr);
    return arr;
}
swapValues([-1, 3, -5, 7, 9, 1343]);


// #13 Number to String
function replaceNegs2Dojo(arr){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
    return arr;
}
replaceNegs2Dojo([1, -1234,23, 23, -1, 23,-98]);