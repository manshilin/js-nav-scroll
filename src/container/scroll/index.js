
let isDisplay = false

window.buttonScroll.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

setInterval(() => {
    if (window.scrollY > 500) {
        if (!isDisplay) {
            window.buttonScroll.style.display = 'block'
            isDisplay = true
        }
    } else {
        if (isDisplay) {
            window.buttonScroll.style.display = 'none'
            isDisplay = false
        }
    }
})