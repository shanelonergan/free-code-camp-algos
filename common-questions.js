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
    for (let i = 0; i < .100; i++) {

        let output

        switch (true) {
            case (i % 3 === 0 && i % 5 === 0):

                break;

            default:
                break;
        }
    }
}

solution1()
