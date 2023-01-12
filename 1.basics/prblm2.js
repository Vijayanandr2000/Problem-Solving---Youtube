/**
 * You are given three numbers A, B & C. Print the largest amongst these three numbers.
 * 
 *  Sample Input :
        1
        2
        3
    Sample Output :
        3   
 */

let arr = [1,22,3];

const findMax = (arr) => {
    let max = arr[0];
    for(let i=0 ; i<arr.length ; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }

    console.log('Maximum number in this', max)
}

findMax(arr)