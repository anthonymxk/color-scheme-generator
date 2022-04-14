const button = document.getElementById('button')
const one = document.getElementById('one')
const box = document.getElementById('box')

//when button is clicked, create palette
button.addEventListener('click', createPalette)


function randomColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const randomColor = "rgb(" + x + "," + y + "," + z + ")";
    return randomColor
    }

    //arrow function to convert rgb to hex value
const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

function createPalette() {
    //generate color
    colorOne = randomColor()
    colorTwo = randomColor()
    colorThree = randomColor()
    colorFour = randomColor()
    colorFive = randomColor()
    //assigning generated color to the div & change text

    //color one
    document.getElementById('one').style.backgroundColor = `${colorOne}`
    document.getElementById('valueOne').textContent = `${colorOne}`
    document.getElementById('valueOneHex').textContent = `${rgb2hex(colorOne)}`

    //color two
    document.getElementById('two').style.backgroundColor = `${colorTwo}`
    document.getElementById('valueTwo').textContent = `${colorTwo}`
    document.getElementById('valueTwoHex').textContent = `${rgb2hex(colorTwo)}`
    //color three
    document.getElementById('three').style.backgroundColor = `${colorThree}`
    document.getElementById('valueThree').textContent = `${colorThree}`
    document.getElementById('valueThreeHex').textContent = `${rgb2hex(colorThree)}`
    //color four
    document.getElementById('four').style.backgroundColor = `${colorFour}`
    document.getElementById('valueFour').textContent = `${colorFour}`
    document.getElementById('valueFourHex').textContent = `${rgb2hex(colorFour)}`

    //color five
    document.getElementById('five').style.backgroundColor = `${colorFive}`
    document.getElementById('valueFive').textContent = `${colorFive}`
    document.getElementById('valueFiveHex').textContent = `${rgb2hex(colorFive)}`

    //assign values to copy paste
    document.getElementById('copypasteRGBValue').innerHTML = `${colorOne}<br>${colorTwo}<br>${colorThree}<br>${colorFour}<br>${colorFive}`
    document.getElementById('copypaste').style.opacity = '1'
    document.getElementById('copypasteHexValue').innerHTML = `${rgb2hex(colorOne)}<br>${rgb2hex(colorTwo)}<br>${rgb2hex(colorThree)}<br>${rgb2hex(colorFour)}<br>${rgb2hex(colorFive)}`
    document.getElementById('copypasteHex').style.opacity = '1'
}   