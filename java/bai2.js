
// let a  = [0,1,2,3,4,13,51,35,91,222]
let a = [0,1,1,1,1,1,1,1,1,0,1,1,1,2,0,0,3,0]
let x = 2


function tryRemoveFromArray(x,a){
    for (let i = 0; i < a.length; i++) {
        if (x === a[i]){
            a.splice(i,1)
            i--;
        }
    }
}
tryRemoveFromArray(x,a)
console.log(a)
