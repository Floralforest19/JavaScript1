const menu = document.querySelector('#menu')
const toggleMenu = document.querySelector('#toggleMenu')
toggleMenu.addEventListener('click', function(){
    if (menu.classList.contains('hide')) {
        menu.classList.remove('hide')
        toggleMenu.textContent = "🔽Hide menu"
      } else {
        menu.classList.add('hide')
        toggleMenu.textContent = '▶️Show menu'
    }
})