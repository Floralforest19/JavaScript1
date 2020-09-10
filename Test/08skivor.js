const myRecords = []
let ans 
while(ans!== '' && ans !== null){
    ans = prompt('Lägg till en skiva')
    if (ans!== '' && ans !== null){
        myRecords.push(ans)
    }
}

alert(myRecords)