const string = 'string'
const bool = true
const num = 30
/*console.log(typeof string === 'string')
console.log(typeof bool === 'boolean')
console.log(typeof num === 'number')*/


/*const myObj = {
    id: 1, name:'Jonas'
}

console.log(typeof myObj[name] === 'Jonas')
console.log(typeof myObj['b'] === 'undefined')*/


const myObj = {id: 1, name: 'Jonas'
}
function isEmpty (myObj, b){
    /*const keys = Object.keys(obj)*/
    return typeof myObj[b] !== 'undefined'
   
}
console.log(isEmpty(myObj, 'name')) 