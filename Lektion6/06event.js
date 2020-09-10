var balloon = document.querySelector('#balloon')
var fontSize = 16
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        fontSize = fontSize * 2
        if (fontSize >= 512) {
            balloon.textContent ='💥'
        }else {
            balloon.style.fontSize = fontSize + 'px'
        }


    }
})

