const article = document.querySelector('article ')
const navToggle = document.querySelector('.menu-link')
const togglebtn = document.querySelector('.nav-btn')

togglebtn.addEventListener("click",function(){
    if (article.classList.contains('toggle')){
         article.classList.remove('toggle')
    }
    else{
        article.classList.add('toggle')
    }
})