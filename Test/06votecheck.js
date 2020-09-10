let ans
while(ans !== null && ans!== ''){
 ans = prompt('Hur gammal är du?')
    if (ans >=18 ){
    alert ('Du får rösta')
    }else if (ans <= 18){
    alert ('Du får inte rösta')
    }else{
    alert ('X är ingen siffra')
    }
}