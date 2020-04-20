// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

// Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.

// For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac, the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

function repeatedString(str, num) {
	const strArr = str.split('')

	if (!strArr.includes("a")) {
        return 0
    } else if (str.length === 1 || strArr.every((val) => val === strArr[0])) {
		return num
	}

	const numOfAs = strArr.reduce((acc, letter) => {
		letter === 'a' ? acc++ : null
		return acc
	}, 0)

	const part1 = Math.floor(num / str.length) * numOfAs
	const part2 = () => {
		const remainder = num % str.length
		let extra = 0
		if (remainder) {
			for (let i = 0; i < remainder; i++) {
				if (strArr[i] === 'a') {
					extra++
				}
			}
		}
		return extra
	}

	console.log(part1, part2(), part1 + part2())
	return part1 + part2()
}

repeatedString('x', 10000000000)
