// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

// examples

// abcd permutations = [abcd, bacd, abdc, badc, cdab, dcab, cdba, dcba], and all are non repeating. return 6

// INDECIES: 1234 permutations = [1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341, 2413, 2431, 3124, 3142, 3214, 3241, 3412, 3421, 4123, 4132, 4213, 4231, 4312, 4321], length = 24
// aabb permutations = [aabb, aabb, bbaa, bbaa, abab, abab], has to also be 24?

// OUTLINE
// 1. find all permutations
// 2. remove all with consecutive letters
//      - going though each index of the string, compare to next to see if                    it matches.
//       - if it doesnt, add to new array
// 3. find length of final array

// PSEUDOCODE
// input = 'aab'
// permutations = ['aab', 'aab', 'aba', 'aba', 'baa', 'baa']
// final = []

// permArrays = permutations.map(perm => perm.split(''))

// permArrays.forEach((perm) => {
//     perm.forEach((letter, index) => {
//         next = perm[index + 1]

//         if (letter === next) {
//             // remove from origonal array
//             permArrays.unshift(perm)
//         }
//     })
// })

// solution = permArrays.length

const newSolution = str => {
    const startArr = str.split('');
    const permutations = [];
    let tmp;

    function swap(index1, index2) {
        tmp = startArr[index1];
        startArr[index1] = startArr[index2];
        startArr[index2] = tmp;
    }

    // Generate arrays of permutations using the algorithm.
    function generate(int) {
        if (int === 1) {
            // Make sure to join the characters as we create  the permutation arrays
            permutations.push(startArr.join(''));
        } else {
            for (var i = 0; i != int; ++i) {
                generate(int - 1);
                swap(int % 2 ? 0 : i, int - 1);
            }
        }
    }

    generate(startArr.length);

    let final = [];
    const stringLength = permutations[0].length;
    const stringArrayLength = stringLength - 1;
    console.log(stringLength, stringArrayLength);

    let firstIndex = 0;

    permutations.forEach(stringArr => {
        let secondIndex = 0;
        let pass = true;

        while (secondIndex <= stringLength - 1) {
            const current = stringArr[secondIndex];
            const previous = stringArr[secondIndex - 1];

            console.log(secondIndex, previous, current);
            // if (secondIndex = 0) continue
            if (current === previous) {
                console.log('removing', firstIndex);
                // debugger
                pass = false;
                secondIndex++;
            } else {
                secondIndex++;
            }
        }

        if (pass === true) {
            final.push(stringArr);
        }

        firstIndex++;
    });

    console.log(final);
    return final.length
};

// newSolution('abcdefa');

const refactoredSolution = (str) => {

    // check for matching consecutive letters
    const regex = /([a-z])\1/;

    const startArr = str.split('');
    const permutations = [];
    let tmp;

    // if all characters in the string are identical, return 0
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

    function swap(index1, index2) {
        tmp = startArr[index1];
        startArr[index1] = startArr[index2];
        startArr[index2] = tmp;
    }

    // Generate arrays of permutations using Heap's algorithm.
    function generate(int) {
        if (int === 1) {
            // Make sure to join the characters as we create the permutation arrays
            permutations.push(startArr.join(''));
        } else {
            for (var i = 0; i !== int; ++i) {
                generate(int - 1);
                swap(int % 2 ? 0 : i, int - 1);
            }
        }
    }

    generate(startArr.length);

    const filtered = permutations.filter(function(string) {
        return !string.match(regex);
    });

    console.log(filtered)
    return filtered.length;

}

refactoredSolution('aab')

