function greaterThan10(num){
    return new Promise(function(resolve, reject){
        if(num >10){
            resolve('Is bigger')
        }else{
            reject('Not big enough')
        }
    })
}

greaterThan10(12).then(function(){
    console.log('Sucsess!')
})
greaterThan10(5).catch(function(){
    console.log('Fail!')
})