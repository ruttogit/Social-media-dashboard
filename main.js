const switchBtn = document.querySelector('.switch-btn');
const bodyElement = document.querySelector('.body')


switchBtn.addEventListener('click', () =>{
    switchBtn.classList.toggle('active-state');
    bodyElement.classList.toggle('dark-mode');
})