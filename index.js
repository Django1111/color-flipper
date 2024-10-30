const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const purple = Math.round(Math.random() * 255) 
    const olive = Math.round(Math.random() * 255)
    const orange = Math.round(Math.random() * 255)
    
    const color = `rgb(${purple}, ${olive}, ${orange})`
    body.style.backgroundColor = color;
}
