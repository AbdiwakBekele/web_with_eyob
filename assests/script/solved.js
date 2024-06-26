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