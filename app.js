const board = document.querySelector('#board')
let colors = ['#FBF8CC', '#FDE4CF', '#FFCFD2', '#F1C0E8', '#CFBAF0', '#A3C4F3', '#8EECF5', '#98F5E1', '#B9FBC0']
const SQUARES_NUMBER = 240

document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        const link = document.querySelector('.input-color').value
        changeColors(link)
    }
})

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 5px white`
}

function removeColor(element) {
    element.style.backgroundColor = '#3b3b3b'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function changeColors(link) {
    if (link.slice(0, 27) === 'https://coolors.co/palette/') {
        colors = []
        link = link.slice(27, link.length)
        let colorsCount = 1
        for (let i = 0; i < link.length; i++) {
            if (link[i] === '-') {
                colorsCount++
            }
        }
    
        for (let i = 0; i < colorsCount; i++) {
            link = link.replace('-', '')
        }
        
        for (let i = 0; i < colorsCount; i++) {
            colors.push(`#${link.slice(0, 6)}`)
            link = link.slice(6, link.length)
        }
        clearInput()
    }
}

function clearInput() {
    document.getElementById('inputValue').value = ''
}