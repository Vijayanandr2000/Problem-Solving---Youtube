// Given an integer A, you need to find the count of it's factors.

// Factor of a number is the number which divides it perfectly leaving no remainder.

// Example : 1, 2, 3, 6 are factors of 6 - 4

const countFactors = (A) => {
    let c = 2;
    let i
    for(i = 2; i < A/i; i++){
        if(A % i == 0 ){
            c  += 2;
        }
    }

    if(i*i ==A){
        c++
    }

    return c;
}

console.log(countFactors(49))