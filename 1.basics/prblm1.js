/**
 * You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.
 * 
 *  Sample Input :
        2
    Sample Output :
        2000
        200000

    1km = 1 * 10^3 = 1*1000 = 1000 
    1Km = 1cm = 1 * 1/10^-5  = 1 * 100000 = 100000
 */

const convert = (n) => {
    console.log("Kilometer into Meter", n * 1000)
    console.log("KIlometert Into Centimeter", n * 100000)
}

convert(2)
