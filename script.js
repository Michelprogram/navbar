const icons = document.querySelectorAll('.list')
const indicator = document.querySelector('.indicator')

const activeLink = (active) =>{
    icons.forEach(el=> el.classList.remove('active'))
    active.classList.add('active')
}

icons.forEach(el =>{
    el.addEventListener('click', ()=>{
        activeLink(el)
    })
})
