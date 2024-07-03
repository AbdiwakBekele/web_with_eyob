/*

Question 1:
Consider the following algorithm Start with a positive number n
if n is even then divide by 2 if n is odd then multiply by 3 and add 1  continue this until n becomes 1

Start Number: 7
eg: 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1

*/

// Answer 1:

function question1() {
    var n = 54;
    while (n != 1) {

        if (n % 2 == 0) {
            n = n / 2;
        } else {
            n = (n * 3) + 1;
        }

        console.log(n);
    }
}

x = [1, 2, 3, 4, 5];


/*

Question 2: Day 5
Take a list of numbers using a single input field, the store the value inside an array
*/

function pushToArray() {
    var data = document.getElementById('numberInput').value;
    var y = data.split(',');
    var z = convertToArrayNumber(y);

    // Looping through Array using for..in
    // a is index
    for (var a in z) {
        console.log(z[a]);
    }

    // Looping through Array using for..of
    // a is value
    for (var a of z) {
        console.log(a);
    }
}

function convertToArrayNumber(y) {
    var x = [];

    for (var i = 0; i < y.length; i++) {
        x.push(Number(y[i]));
    }
    return x;
}


/**
 * Question 3
 * An array can hold the digits of a number. For example the digits of the number 32053 are
 * stored in the array {3, 2, 0, 5, 3}. Write a method call repsEqual that takes an array and an
 * integer and returns 1 if the array contains only the digits of the number in the same order that
 * they appear in the number. Otherwise it returns 0.
 * 
 * Eg, {3, 2, 0, 5, 3} and 32053 - returns 1, {3, 2, 0, 5, 3} and 14053 - returns 0
 * 
 */


function question3() {

    var a = [1, 2, 0, 5, 3];
    var b = [3, 2, 0, 5, 3];

    var result = repsEqual(a, b);
    console.log(result);

    // x is array, y is integer
    function repsEqual(x, y) {

        if (x.length != y.length) {
            return 0;
        }

        for (var i = 0; i < x.length; i++) {
            if (x[i] != y[i]) {
                return 0;
            }
        }
        return 1;
    }
}


/**
 * Question 4
 * Write a function named isNUnique that returns 1 if its integer array argument is n-unique,
 * otherwise it returns 0. So isNUnique(new int[ ]{2, 7, 3, 4}, 5) should return 1 and
 * isNUnique(new int[] {2, 3, 3, 7}, 5) should return 0.
 */

// x is array, y is integer
function isNUnique(x, y) {

    var count = 0;

    for (var i = 0; i < x.length; i++) {

        for (var j = i + 1; j < x.length; j++) {
            var result = x[i] + x[j];
            if (result == y) {
                count++;
            }
        }
    }

    if (count == 1) {
        return 1;
    }
    return 0;
}


/**
 * Question 5
 * Define an array to be sum-safe if none of its elements is equal to the sum of its elements. The array
 * a = {5, -5, 0} is not sum-safe because the sum of its elements is 0 and a[2] == 0. However, the
 * array a = {5, -2, 1} is sum-safe because the sum of its elements is 4 and none of its elements
 * equal 4.
 */

// x is array
function isSumSafe(x) {
    // Total sum of all
    var totalSum = 0;
    for (var i = 0; i < x.length; i++) {
        totalSum += x[i];
    }

    for (var i = 0; i < x.length; i++) {
        if (totalSum == x[i]) {
            return 0
        }
    }
    return 1;
}
