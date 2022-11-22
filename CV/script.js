let display1 = document.querySelector('#display1')
let display2 = document.querySelector('#display2')
let display3 = document.querySelector('#display3')
let display4 = document.querySelector('#display4')
let display5 = document.querySelector('#display5')

let content1 = document.querySelector('.container_block1')
let content2 = document.querySelector('.container_block2')
let content3 = document.querySelector('.container_block3')
let content4 = document.querySelector('.container_block4')
let content5 = document.querySelector('.container_block5')

let displayed_content = 1

display1.onclick = () => {
    content1.style.transform = 'translateX(0%)'
    content2.style.transform = 'translateX(-110%)'
    content3.style.transform = 'translateX(-110%)'
    content4.style.transform = 'translateX(-110%)'
    content5.style.transform = 'translateX(-110%)'

    display1.style.border = '2px solid white'
    display2.style.border = 'none'
    display3.style.border = 'none'
    display4.style.border = 'none'
    display5.style.border = 'none'
}

display2.onclick = () => {
    content1.style.transform = 'translateX(-110%)'
    content2.style.transform = 'translateX(0%)'
    content3.style.transform = 'translateX(-110%)'
    content4.style.transform = 'translateX(-110%)'
    content5.style.transform = 'translateX(-110%)'

    display1.style.border = 'none'
    display2.style.border = '2px solid white'
    display3.style.border = 'none'
    display4.style.border = 'none'
    display5.style.border = 'none'
}

display3.onclick = () => {
    content1.style.transform = 'translateX(-110%)'
    content2.style.transform = 'translateX(-110%)'
    content3.style.transform = 'translateX(0%)'
    content4.style.transform = 'translateX(-110%)'
    content5.style.transform = 'translateX(-110%)'

    display1.style.border = 'none'
    display2.style.border = 'none'
    display3.style.border = '2px solid white'
    display4.style.border = 'none'
    display5.style.border = 'none'
}

display4.onclick = () => {
    content1.style.transform = 'translateX(-110%)'
    content2.style.transform = 'translateX(-110%)'
    content3.style.transform = 'translateX(-110%)'
    content4.style.transform = 'translateX(0%)'
    content5.style.transform = 'translateX(-110%)'

    display1.style.border = 'none'
    display2.style.border = 'none'
    display3.style.border = 'none'
    display4.style.border = '2px solid white'
    display5.style.border = 'none'
}

display5.onclick = () => {
    content1.style.transform = 'translateX(-110%)'
    content2.style.transform = 'translateX(-110%)'
    content3.style.transform = 'translateX(-110%)'
    content4.style.transform = 'translateX(-110%)'
    content5.style.transform = 'translateX(0%)'

    display1.style.border = 'none'
    display2.style.border = 'none'
    display3.style.border = 'none'
    display4.style.border = 'none'
    display5.style.border = '2px solid white'
}

VANTA.NET({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x2d2d2d,
    backgroundColor: 0x0
  })


