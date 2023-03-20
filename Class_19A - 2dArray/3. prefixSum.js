// A = [   
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9], 
//]

// Find Prefix sum for given matrix

const solve = (a) => {

    for(let i = 0 ; i < a.length; i++) {
        for(let j = 1 ; j < a[0].length ; j++){
            a[i][j] = a[i][j-1] + a[i][j]
        }
    }

    for(let i = 0 ; i < a[0].length ; i++){
        for(let j = 1 ; j < a.length ; j++){
            a[j][i] = a[j-1][i] + a[j][i]
        }
    }

    console.log(a)



}

solve([   
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], 
])