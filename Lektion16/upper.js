function makeUpperCase(str){
    return new Promise(function(resolve, reject){
        if(typeof str === 'string'){
        const upperCaseStr = str.toUpperCase()
        resolve(upperCaseStr)
        }else{
         reject('Not a string')   
        }

    })
}
makeUpperCase('mikaela').then(function(str){
    console.log(str)
})
makeUpperCase(5).catch(function(error){
    console.log(error)    
})