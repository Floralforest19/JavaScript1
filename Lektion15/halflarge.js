function greaterThan10(num){
    return new Promise(function(resolve, reject){
        if(num >10) {
            resolve(num)
        }else{
            reject('Not big enough')
        }
    })
}
function halveEvenNumber(num){
    return new Promise(function(resolve, reject){
        if(num %2===0) {
            resolve(num /2)
        }else{
            reject('Not a even number')
        }
    })
}

greaterThan10(12)
.then(function(num){
   return halveEvenNumber(num)
})
.then(function(halvedNum){
   console.log(halvedNum)
})
greaterThan10(11)
    .then(function(num){
        return halveEvenNumber(num)
    })
    .catch(function(error){
        console.log(error)
    })