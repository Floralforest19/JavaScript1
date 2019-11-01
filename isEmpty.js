/*
const myObj = { id: 1 }
console.log(isEmpty(myObj)) 
const otherObj = {}
console.log(isEmpty(otherObj))

isEmpty: function () 
console.log(Object.keys(isEmpty));*/

const myObj = {id: 1
}
function isEmpty (obj){
    const keys = Object.keys(obj)
    if (keys.length === 0){
        return true
    }
    return false
}
console.log(isEmpty(myObj)) 