// Given a number A. Return square root of the number if it is perfect square otherwise return -1.

// input 4 : 2
// 36 : 6

// 100: 10

// 101: -1

const findSquareRoot = (A) => {
    for(let i=1;i<=A/2;i++){
        if(i*i==A){
            return i;
        }
    }
    return -1;
}

console.log(findSquareRoot(1001));