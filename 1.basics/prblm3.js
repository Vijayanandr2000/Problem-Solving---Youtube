/**
 * You are provided with an array in which all elements are repeated thrice except one which is repeated twice.Your task is to print that number.
 * 
 * 
 *  Sample Input :
        5
        13 12 13 12 13
    Sample Output :
        12
 */


let arr = [13,12,13,12,13,1,1]

let map = {};

for(let i=0;i<arr.length ;i++){
    if(map[arr[i]]){
        map[arr[i]]++;
    }else{
        map[arr[i]] = 1;
    }
}
let val = Object.values(map)
let key = Object.keys(map)

for(let i=0;i<val.length;i++){
    if(val[i] == 3){
        console.log(key[i])
    }
}
// console.log(val)
// console.log(key)