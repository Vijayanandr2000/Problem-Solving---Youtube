// Problem Description
// Little Ponny has been given a string A, and he wants to find out the lexicographically minimum subsequence from it of size >= 2. Can you help him?

// A string a is lexicographically smaller than string b, if the first different letter in a and b is smaller in a. For example, "abc" is lexicographically smaller than "acc" because the first different letter is 'b' and 'c' which is smaller in "abc".

// Problem Constraints
// 1 <= |A| <= 105
// A only contains lowercase alphabets.

// Input Format
// The first and the only argument of input contains the string, A.

// Output Format
// Return a string representing the answer.

// Example Input
// Input 1:
//  A = "abcdsfhjagj" 

// Input 2:
//  A = "ksdjgha" 

// Example Output
// Output 1:
//  "aa" 

// Output 2:
//  "da" 

// Example Explanation
// Explanation 1:
//  "aa" is the lexicographically minimum subsequence from A. 

// Explanation 2:
//  "da" is the lexicographically minimum subsequence from A.


const solve = (s) => {

    let firstMin = s[0], idx = 0
    for(let i = 0 ; i < s.length-1; i++) {
        if(firstMin > s[i]){
            firstMin = s[i];
            idx = i
        }
    }

    let secMin = s[idx+1]
    for(let i = idx+1; i < s.length ;i++){
        if(secMin > s[i]){
            secMin = s[i];
        }
    }

    console.log(firstMin+secMin)

}

solve("abcdsfhjagj")
solve("ksdjgha")