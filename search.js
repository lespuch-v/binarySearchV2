function binarySearchV2(arr, x, start=0, end=arr.length){
    // There is no item in the array
    if(end < start){
        return -1
    }

    // Calculate middle index
    let middle = Math.floor((start + end) / 2)
    console.log(middle)

    // Is the middle match?
    if(arr[middle] === x){
        return middle
    }

    if(arr[middle] < x){
        return binarySearchV2(arr, x, middle + 1, end)
    }else{
        return binarySearchV2(arr, x,  start, middle - 1)
    }
}

const arr1 = [1,4,5,7,9,10,15,9,15,0,13]
const newArr = arr1.sort((a, b)=>{
    return a - b
})
console.log(newArr)

console.log(binarySearchV2(newArr, 13))
// console.log(binarySearchV2(newArr, 4))

