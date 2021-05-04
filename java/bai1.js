// let a  = [0,1,2,3,4,13,51,35,91,222]
// function findMax(a) {
//     a.sort(function(a, b){return a - b});
//     return a[a.length-1]
// }
// console.log(findMax(a))

//---------------------

let a  = [0,111,22,33,4,13,51,35,91,222]
let max = a[0]
for (let i = 1; i < a.length; i++) {
    if (a[0]<a[i]){
        max = a[i]
    }
}
console.log(max)