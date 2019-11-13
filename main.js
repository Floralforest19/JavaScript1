let ans
while(ans !== null && ans!== ''){
    ans = prompt('Hur gammal är du?')
    if (ans === null || ans ===''){
        alert('goodbye')
    }else if{
        alert(!isNaN(ans)){
            ans = parseInt(ans)
            if (ans >=18){
                alert ('You may vote')
            }else{
                alert('So young')
            }
        }
    }else{
        alert('No number')
    }
}