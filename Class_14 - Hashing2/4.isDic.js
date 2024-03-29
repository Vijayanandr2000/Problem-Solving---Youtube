// Problem Description
// Surprisingly, in an alien language, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given an array of words A of size N written in the alien language, and the order of the alphabet denoted by string B of size 26, return 1 if and only if the given words are sorted lexicographically in this alien language else, return 0.

// Problem Constraints
// 1 <= N, length of each word <= 105
// Sum of the length of all words <= 2 * 106

// Input Format
// The first argument is a string array A of size N.
// The second argument is a string B of size 26, denoting the order.

// Output Format
// Return 1 if and only if the given words are sorted lexicographically in this alien language else, return 0.

// Example Input
// Input 1:
//  A = ["hello", "scaler", "interviewbit"]
//  B = "adhbcfegskjlponmirqtxwuvzy"

// Input 2:
//  A = ["fine", "none", "no"]
//  B = "qwertyuiopasdfghjklzxcvbnm"

// Example Output
// Output 1:
//  1

// Output 2:
//  0


// Example Explanation
// Explanation 1:

//  The order shown in string B is: h < s < i for the given words. So return 1.
// Explanation 2:

//  "none" should be present after "no". Return 0.


const sortLan = (a,b) => {
    let map = {}
    for(let i = 0 ; i < b.length; i++) {
        map[b[i]] = i
    }
    for(let i = 0 ; i < a.length; i++) {
        let a1 = String(a[i]).split('')
        let a2 = String(a[i+1]).split('')
        for(let j = 0 ; j < (a1.length && a2.length) ; j++){
            let mapVal1 = map[a1[j]]
            let mapVal2 = map[a2[j]]
            if(mapVal1 > mapVal2){
                console.log(0)
                return
            }else if(mapVal1 == mapVal2){
                continue
            }else if(mapVal1 < mapVal2){
                break;
            }
        }
    }
    console.log(1)

}

sortLan(["hello", "scaler", "interviewbit"],"adhbcfegskjlponmirqtxwuvzy")
sortLan(["fine", "none", "no"],"qwertyuiopasdfghjklzxcvbnm")