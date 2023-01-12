/**
 * TOPICS
 *      1. variable declaration
 *      2. condition
 *      3. loop
 *      4. functions
 *
 * --> VARIABLE DECLARATION
 * 
 *      let,var,const
 *      let -> blocking scope
 *      const -> blocking scope
 *      var -> functional r global scope
 *      
 *      let -> inside scope
 *      
 *      const -> inside scope once assigned can't reassign
 *      
 *      var -> global scope perform hoisting
 * 
 * --> CONDITIONAL STATEMENT
 * 
 *      If(){
 * 
 *      } else{
 *      
 *      }
 * 
 * --> LOOPING STATEMENT 
 *      
 *      for(initialization;condition;increement/decrement){
 *      
 *      }
 * 
 *      while(){
 *      
 *      }
 * 
 * --> function
 * 5+6 => 11
 * 1+2 => 2
 * 
 */

// let var const

// console.log(a);
// let a = 10;
// console.log(a);

// a = 11;

// console.log(a);
// a=12
// console.log(a);

// var a = 10;
// console.log(a);

// a = 11;
// console.log(a);


// console.log(a);

// const a = 10;
// console.log(a);

// a = 11;
// console.log(a);

// voting function

// let age = 17;
// if(age<18){
//     console.log('NO VOTING')
// }else{
//     console.log('VOTING ACCEPTED')
// }

// age = 21
// age<18 ? console.log('NO VOTING') : console.log('VOTING ACCEPTED');


// for(let i=1;i<=10;i = i+1){
//     if(i==5){
//         break;
//     }else{
//         console.log(i)
//     }
// }

// let a = true; check = 1;
// while(a){
//     if(check ==5){
//         a= !a;
//     }
//     console.log(check)
//     check ++;
// }
// function sum(a,b){
//     return a+b;
// }
// const sum = (a,b) => {
//     return a+b;
// }
// console.log(sum(123,123))
// console.log(sum(123,124))
// console.log(sum(123,125))

/**
 * DATA TYPES
 *  1. Boolean type
 *  2. Null type
 *  3. Undefined type
 *  4. Number type
 *  5. String type
 *  6. BigInt type
 *  7. Symbol type
 *  8. Object
 * 
 * ARRAY 
 *      
 *      a = [1,2,3,4,5,'ajd']
 * 
 * OBJECT
 * 
 *      map = {
 *          '0':0,
 *          '1':1,
 *          '2':2,
 *          '3':3,
 *      }
 * 
 * 
 */

let a = [1,2,3];

/**
 * start i=0, end =length-1
 */

// for(let i=a.length-1;i>=0;i--){
//     console.log(a[i])
// }

// let map = {
//     "0":"vijay",
//     "1":"anand",
//     "2":"vijayanand",
// };

// console.log(map["0"])
// console.log(Object.keys(map))
// console.log(Object.values(map))

let s = 'aabccdedabcdfertayksfd';

let obj = {};
//'a':2
for(let i=0;i<=s.length-1;i++){
    if(obj[s[i]] == undefined){
        obj[s[i]] = 1;
    }else{
        obj[s[i]] += 1
    }
}
console.log(obj)

