function btnClick(event) {
    event.currentTarget.textContent = 'Please leave! 😡!'
 }

 const clickerBtn = document.querySelector('#message')
 clickerBtn.addEventListener('click', btnClick)
 const clicker2Btn = document.querySelector('#changer')
 clicker2Btn.addEventListener('click', btnClick)

 btnClick.addEventListener('click', function(event) {
    console.log(event)
    })