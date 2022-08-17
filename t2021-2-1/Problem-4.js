// Problem-4:  Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//     (examples)
//     input: [1,2,8,9,12,46,76,82,15,20,30]
//     Output:
//         {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}


function countInList(arr){

    if(arr.length==0)   return -1

    let obj = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}

    obj[1]=arr.length             // 1 will always divide all element

    for(let i=2;i<=9;i++){
        for(let element of arr){
            if(element%i==0){
                obj[i]++
            }
        }
    }
    console.log(obj)
}

countInList([1,2,8,9,12,46,76,82,15,20,30])