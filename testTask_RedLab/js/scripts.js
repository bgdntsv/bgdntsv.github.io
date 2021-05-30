const burgerButton = document.getElementById('burger_btn')
const mobileMenuItem = document.getElementById('mobile-menu')
const mobileMenu = () => {
    burgerButton.classList.toggle('active-burger')
    mobileMenuItem.classList.toggle('activeMobile')
}

const banner = document.getElementById('banner')
const movBtn = document.getElementById('invisible')
let minY = 0

function moving(object, speed) {
    banner.addEventListener('mousemove', function (event) {
        let X = Math.floor((event.pageX - banner.offsetLeft) / speed) + 'px'
        let Y = Math.floor((event.pageY - banner.offsetTop) / speed - minY) + 'px'
        object.style.transform = `translate(${X} , ${Y})`
    })
    banner.addEventListener('mouseleave', () => {
        movBtn.style.transform = 'translate(0,0)'
        let timer = setInterval(() => {
            movBtn.style.animationName = 'rolling'
        }, 400)
        setTimeout(() => clearInterval(timer), 400)

    })
    banner.addEventListener('mouseover', () => {
        movBtn.style.animationName = 'none'
    })
}

if (window.screen.availWidth > 768) {
    moving(movBtn, 12)
}


let cards = document.getElementsByClassName('cards-item')
Array.from(cards).forEach((el, index) => {
    if (!el.value) el.style.animationDelay = `${0.2 * index}s`
})
window.addEventListener('scroll', () => {
    const header = document.getElementById('header')
    if (window.scrollY >= 150) {
        header.style.backgroundColor = 'white'
        header.style.boxShadow = 'rgba(0,0,0,0.2) 2px 2px 2px'
        Array.from(cards).forEach((el) => {
            if (!el.value) el.style.animationName = `slideInUp`
        })
        if (window.screen.availWidth > 768) {
            movBtn.style.height = '7rem'
            movBtn.style.width = '7rem'
            banner.style.height = '10rem'
            banner.style.width = '10rem'
            minY = movBtn.offsetHeight / 4
        }
    } else {
        header.style.backgroundColor = 'transparent'
        header.style.boxShadow = 'none'
        Array.from(cards).forEach((el) => {
            if (!el.value) el.style.animationName = `none`
        })
        if (window.screen.availWidth > 768) {
            movBtn.style.height = '11rem'
            movBtn.style.width = '11rem'
            banner.style.height = '14rem'
            banner.style.width = '14rem'
            minY = 0
        }
    }
})