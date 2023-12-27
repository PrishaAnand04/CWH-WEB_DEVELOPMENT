let arr=[1.,2,3,4,5]

console.log(arr)
console.log(arr.length)
console.log(arr[0])

arr[0]=25
console.log(arr[0])
arr=arr.splice(1,3,34,56)
console.log(arr)
let narr=arr.slice(2)
// console.log(narr)


let ar=[1,13,5,7,11];
let newArr=[]
// for( let index =0; index<ar.length;index++){
//     const ele=ar[index];
//     newArr.push(ele**2)
// }
// console.log(newArr)

let newAr=ar.map((e)=>{
    return e**2
})
console.log(newAr)

let a=[1,2,3,4,5]

let na=a.reduce((a,b)=>{
    return a+b
})

console.log(na)

Array.from("Prisha")

