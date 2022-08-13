/**
 * Write a code to generate the X form of a number pattern.

Input Description:
Given an integer N indicates X pattern.

Where 1<=N<=100.

Output Description:
Print the numbers in X form based on the given integer N.

Where 1<=N<=100

Sample Input :
5
Sample Output :
1       1
 2     2
  3   3
   4 4
    5
   6 6
  7   7
 8     8
9       9
 */

const formXShape = (n) => {

    for(let i=1;i<n*2;i++){
        let arr = [];
        for(let j = 1 ; j < n*2 ;j++){
            if(i==j || j == n+n-i){
                arr.push(i);
            }else{
                arr.push(' ')
            }
        }

        console.log(arr.join(''))
    }

}



formXShape(5)
