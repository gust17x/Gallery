const paralax = document.querySelector('.paralax')
const infors = document.querySelectorAll('[data-anim]')
const animeScrow = 'animeScrow'

function scroll() {

    const pageTop = window.pageYOffset + ((window.innerHeight * 3.3 / 4))

    infors.forEach(function(e) {

        if((pageTop) > e.offsetTop) {
            e.classList.add(animeScrow)
        }else {
            e.classList.remove(animeScrow)
        }

    })

}

document.addEventListener("scroll", function(e)  {
    e.preventDefault()
    scroll()
})
 