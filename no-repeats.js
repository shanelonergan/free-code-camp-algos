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

// testing

p1 = ['aab', 'aab', 'aba', 'aba', 'baa', 'baa']
p1Arrays = p1.map(perm => perm.split(''))
console.log(p1Arrays)



function permAlone(str) {
  return str;
}

permAlone('aab');
