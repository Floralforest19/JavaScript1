const msg = document.querySelector('#msg')
const intervalId = setInterval(function(){
msg.textContent = msg.textContent + 'Hey'
}, 1000)
const bTn = document.querySelector('#stop')
bTn.addEventListener('click', bTn)
const sbTn = document.querySelector('#stop')
sbTn.addEventListener('click', function(){
    clearInterval(intervalId)
    msg.textContent = msg.textContent + 'Ok'
})