// Problem Description
// Given a string A of size N, find and return the longest palindromic substring in A.
// Substring of string A is A[i...j] where 0 <= i <= j < len(A)
// Palindrome string:
// A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.
// Incase of conflict, return the substring which occurs first ( with the least starting index).

// Problem Constraints
// 1 <= N <= 6000

// Input Format
// First and only argument is a string A.

// Output Format
// Return a string denoting the longest palindromic substring of string A.

// Example Input
// A = "aaaabaaa"

// Example Output
// "aaabaaa"

// Example Explanation
// We can see that longest palindromic substring is of length 7 and the string is "aaabaaa".

const longPal = (A) => {
    let sIdx = 0, eId = 0
    let maxCount = 0

    let str = A.split('');

    for(let i = 0 ; i < str.length; i++){
        // odd leng
        let p1 = i, p2 = i
        while(p1 >= 0 && p2 < str.length && str[p1] == str[p2]){
            let c = p2 - p1 + 1;
            if(maxCount < c){
                maxCount = c
                sIdx = p1, eId = p2
            }
            p1 -- 
            p2 ++
        }

        //even idx
        p1 = i, p2 = i+1
        while(p1 >= 0 && p2 < str.length && str[p1] == str[p2]){
            let c = p2 - p1 + 1;
            if(maxCount < c){
                maxCount = c
                sIdx = p1, eId = p2
            }
            p1 -- 
            p2 ++
        }

    }

    console.log(str.slice(sIdx,eId+1).join(''))

}

longPal("aaaabaaa")
longPal("abba")