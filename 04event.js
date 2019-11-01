const div = document.querySelector('div')
const h1 = document.querySelector('h1')
div.addEventListener('mouseenter', function(){
    div.classList.replace('off','on')
    h1.textContent = 'You caught me!? 😮'
})
div.addEventListener('mouseleave', function(){
    div.classList.replace('on','off')
    h1.textContent = 'You can´t catch me 😎!'
})