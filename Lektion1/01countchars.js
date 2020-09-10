function countChars(str, a){
    let count = 0
    for (let i = 0; i<str.length; i++){
        if (str.charAt(i)=== a){count++}
    }
    return count
}
console.log(countChars("My Bad My Man", "M"))

/*
function test(lek, stuga){

}
console.log("Vi leker ","i vår stuga")
*/