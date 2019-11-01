function spamCheck(str){
    str = str.toLowerCase()
    console.log(str)
    if (str.includes("viagra") || str.includes("xxxxxx")){
        return true
    }else{
        return false
    }
}
console.log(spamCheck("get free xxxxxx"))
