const myFruits = ['Banana','Apple','Kiwi']

for(let i =0; i<myFruits.length; i++){
    myFruits[i] = myFruits[i].toLowerCase()
    }
let ans
while(ans !== null && ans !==''){
    ans = prompt('What fruit do you like?')
    if(myFruits.includes(ans.toLowerCase())){
        alert(`You got a${ans}!`)
    }else if(ans !== null && ans !==''){
        alert(`Sorry we don´t have a${ans}`)
    }else(ans!=='');{
        alert('No more fuits for you!')
    }
}
