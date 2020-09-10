function isSmall(num) {
    return new Promise((resolve, reject) => { 
       if(isNaN(parseInt(num))){
        reject('Was not a number')
       }else if(parseInt(num)>100){
           reject('Was not small')
       }else{
           resolve('Was small')
       }
            
    })
}

function canVote(num){
    return new Promise((resolve, reject) => {
        if( num < 18){
            reject('You may not vote')
        }else{
            resolve('You may vote!')
        }
    })
}
isSmall(12)
    .then((num => canVote (num)) 
    .then((msg => alert(msg))