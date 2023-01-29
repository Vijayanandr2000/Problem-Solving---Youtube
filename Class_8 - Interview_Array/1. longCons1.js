// Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.

// Input Format
// The only argument given is string A.

// Output Format
// Return the length of the longest consecutive 1’s that can be achieved.

// Constraints
// 1 <= length of string <= 1000000
// A contains only characters 0 and 1.

// For Example
// Input 1:
//     A = "111000"
// Output 1:
//     3

// Input 2:
//     A = "111011101"
// Output 2:
//     7


const solve = (a) =>{
    // count total 1

    // iterate if o fund left find no of 1 and right find no of 1
    // l+ r < count1 => l+r+1
    // l + r == count1 => l+r 

    let count1 = 0
    for(let i = 0 ; i < a.length ; i++){
        if(a[i] == 1){
            count1++;
        }
    }
    let max = -Infinity
    for(let i = 0 ; i < a.length ; i++){
        if(a[i] == 0){
            let l = 0, j = i-1
            while(j >= 0){
                if(a[j] == 1){
                    l++
                }else{
                    break
                }
                j--
            }

            let k = i+1, r= 0
            while(k < a.length){
                if(a[k] == 1){
                    r++
                }else{
                    break
                }
                k++
            }

            let count = l+r
            if(count < count1){
                max = Math.max(max, count+1)
            }else{
                max = Math.max(max, count)
            }
        }
    }

    console.log(max)

}

solve("111000")
solve("111011101")