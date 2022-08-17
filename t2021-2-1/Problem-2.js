// Problem-2:  With a single integer as the input, generate the following until a = x [series of numbers as shown in the below examples]

//     Output: (examples)
//         1) input a = 1, then output : 1
//         2) input a = 2, then output : 1, 3
//         3) input a = 3, then output : 1, 3, 5
//         4) input a = 4, then output : 1, 3, 5, 7
//         .
//         .
//         5) input a = x, then output : 1, 3, 5, 7, .......



function oddSeries(num){
    if(num<=0)  return -1

    let arr = []
    let i = 0 
    while(i<num){
        arr.push( 2*i + 1)
        i++
    }
    
    console.log(arr.join(","))
}
oddSeries(4)