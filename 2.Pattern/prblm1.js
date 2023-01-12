/**
 * Write a code to generate a inverted half pyramid pattern using numbers.

    Input Description:
    Given an integer R indicates number of rows.

    Where 1<=R<=100

    Output Description:
    Print the number half pyramid pattern with the size R.

    Sample Input :
        5
    Sample Output :
        12345
        1234
        123
        12
        1
 */




const formInvertedPyramid = (n) =>{

    for(let i = 1 ; i <= n ; i++){
        let arr = [];
        for(let j = 1 ; j <= n-i+1 ; j++){
            arr.push(j);
        }

        console.log(arr)
    }

}

formInvertedPyramid(5)