// FizzBuzz

// print the numbers from 1-100. if a number is devisable by 3, instead print fizz. if it is devisable by 5, instead print buzz.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
