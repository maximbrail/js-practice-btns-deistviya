const body = document.querySelector('body')
const box = document.querySelector('.box img')
const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const img5 = document.querySelector('.img5')
const img6 = document.querySelector('.img6')



btn.onclick = () => {
    body.classList.add('color')
    body.classList.remove('color2')
}


btn2.onclick = () => {
    body.classList.add('color2')
    body.classList.remove('color')
}

btn3.onclick = () => {
    box.classList.add('img')
    box.classList.remove('img2')
    body.classList.remove('color2')
    body.classList.remove('color')
}

btn4.onclick = () => {
    box.classList.add('img2')
    box.classList.remove('img')
    body.classList.remove('color2')
    body.classList.remove('color')
    box.classList.remove('anim')
}


btn5.onclick = () => {
    box.classList.add('anim')   
}

btn6.onclick = () => {
    img5.classList.add('img8')
    img6.classList.add('img7')
}
