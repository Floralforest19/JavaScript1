function delay(func, wait){
    setTimeout(function(){
        console.log('Log')
        func()
    }, wait * 1000)
}
delay(function(){
},1)