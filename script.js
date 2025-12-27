const container = document.querySelector('.container')
let _container = gsap.to(container, {
    width: '400px',
    height: '500px',
    borderRadius: '2%',
    duration: '0.6',
    ease: 'power2.out',
    paused: 'true'
})

let _p = gsap.to('p', {
    fontSize: '100px',
    translateX: 0,
    paused:'true'
})




container.addEventListener('mouseenter', () => {
    _container.play()
    _p.play()
})

container.addEventListener('mouseleave', () => {
    _container.reverse()
    _p.reverse()
})