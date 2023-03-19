function getValueFromInputField(id) {
    const inputElement = document.getElementById(id);
    const inputString = inputElement.value;
    const inputNumeric = parseFloat(inputString);
    return inputNumeric;
}
// rgb(255, 160, 122)
function randomColor() {
    let color = [];
    for (let i = 1; i <= 3; i++) {
        const mathRandom = Math.floor(Math.random() * 256)
        color.push(mathRandom);
    }
    return 'rgb(' + color.join(', ') + ')';
}

function setRandomColorById(id) {
    document.getElementById(id).addEventListener('mouseover', function () {
        document.getElementById(id).style.backgroundColor = randomColor() + '';
    })
}

setRandomColorById('triangle');
setRandomColorById('rectangle');
setRandomColorById('parallelogram');
setRandomColorById('rhombus');
setRandomColorById('pentagon');
setRandomColorById('ellipse');