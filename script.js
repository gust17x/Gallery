const box = document.querySelectorAll("[data-anim]")
const animation = 'animation'
const animation2 = 'animation2'



function animScroow() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    
    box.forEach(function(e) {
        if ((windowTop) > e.offsetTop ) {
            e.classList.add(animation)
        }else{
            e.classList.remove(animation)
        }
    })

}

window.addEventListener("scroll", function() {
    animScroow()
})

