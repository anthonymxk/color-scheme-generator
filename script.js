const button = document.getElementById('button')
const one = document.getElementById('one')
const box = document.getElementById('box')

button.addEventListener('click', addDiv)

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + x + "," + y + "," + z + ")";
    return randomColor
    }

function addDiv() {
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
    //color two
    document.getElementById('two').style.backgroundColor = `${colorTwo}`
    document.getElementById('valueTwo').textContent = `${colorTwo}`
    //color three
    document.getElementById('three').style.backgroundColor = `${colorThree}`
    document.getElementById('valueThree').textContent = `${colorThree}`
    //color four
    document.getElementById('four').style.backgroundColor = `${colorFour}`
    document.getElementById('valueFour').textContent = `${colorFour}`
    //color five
    document.getElementById('five').style.backgroundColor = `${colorFive}`
    document.getElementById('valueFive').textContent = `${colorFive}`
}