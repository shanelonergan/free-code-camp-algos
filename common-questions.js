// FizzBuzz

// print the numbers from 1-100. if a number is devisable by 3, instead print fizz. if it is devisable by 5, instead print buzz.

let solution1 = () => {
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
}

let solution2 = () => {
    for (let i = 1; i <= 100; i++) {

        let output = ''

        switch (true) {
            case (i % 3 === 0 && i % 5 === 0):
                output += 'FizzBuzz'
                break;

            case (i % 3 === 0):
                output += 'Fizz'
                break;

            case (i % 5 === 0):
                output += 'Buzz'
                break;

            default:
                output = i
                break;
        }

        console.log(output)
    }
}

// Non-looping solution

const noLoop = () => {

    const isMultiple = (num, mod) => {
        return num % mod === 0 // returns true or false
    }

    const solution = [...Array(100)].map((_, i) => {
        const num = i + 1

        switch (true) {

            case isMultiple(num, 15): return 'FizzBuzz'
            case isMultiple(num, 3): return 'Fizz'
            case isMultiple(num, 5): 'Buzz'
            default: return num
        }
    }
}).join('|')
