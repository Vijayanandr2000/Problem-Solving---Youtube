/**
 * Find the first 0 in window of size k. You  are given n numbers and window size ‘w’

  Your task is to print the first index which has 0


    Sample Input :
        7 2
        1 0 6 7 4 0 9
    Sample Output :
        2 2 -1 -1 6 6
 */

let arr = [1,0,6,7,4,0,9];
let n = 2;

let ans = [];

for(let i=0;i<arr.length-1;i++){
    let idx = null
    for(let j=i; j<i+n;j++){
        if(arr[j] == 0){
            idx = j;
            break;
        }
    }
    if(idx == null){
        ans.push(-1);
    }else{
        ans.push(idx+1)
    }
}
console.log(ans)