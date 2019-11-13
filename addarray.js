function func (arr){

    let val = 0
    
    for (let i = 0; i < arr.length; i++) {
        val = val += arr[i]
            
        }
        return val
    }
    console.log(func([1, 2, 3]))