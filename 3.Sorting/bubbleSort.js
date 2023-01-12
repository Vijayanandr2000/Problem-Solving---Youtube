function bubleSort(arr){
    for(let i=0;i<arr.length;i++){
        console.log("idx", i)
        let  check = true;
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j] //temp = 5
                arr[j] = arr[j+1] //arr[0] = 3
                arr[j+1] = temp;    //arr[1] = 5
                check = false
            }

        }
        if(check){
            break;
        }
    }
   
}

let arr = [1, 2, 3, 4, 5];
console.log(arr);
bubleSort(arr);
console.log(arr);



//  5 3 1 2 4    | 3 1 2 4 5  | 
//  i=0          | i=1
 
//   j=0         | j=0
//   3 5 1 2 4   | 1 3 2 4 5 
//   j=1         | j=1
//   3 1 5 2 4   | 1 2 3 4 5 
//   j=2         | j=2
//   3 1 2 5 4   | 1 2 3 4 5  
//   j=3         |  
//  3 1 2 4 5
  