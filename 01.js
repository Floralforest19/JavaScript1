function btnClick(event) {
   event.currentTarget.textContent ='You cliked me!'
}

const clickerBtn = document.querySelector('#clicker')
clickerBtn.addEventListener('click', btnClick)
const anotherBtn = document.querySelector('#another')
anotherBtn.addEventListener('click', btnClick)
    
anotherBtn.style.position='absolute'

document.addEventListener('mousemove', function(event) {
anotherBtn.style.left= event.clientX + 'px'
anotherBtn.style.top =event.clientY + 'px'
console.log(event.clientX, event.clientY)
})

