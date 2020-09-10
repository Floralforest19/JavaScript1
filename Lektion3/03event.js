const hot = document.querySelector('.hot')
const switcher = document.querySelector('#switcher')
switcher.addEventListener('click', function(){
    if (hot.classList.contains('hot')) {
        hot.classList.replace('hot', 'cool')
      } else {
        hot.classList.replace('cool', 'hot')
      }  
})

  

   
