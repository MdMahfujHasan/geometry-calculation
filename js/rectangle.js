document.getElementById('btn-calculate-rectangle').addEventListener('click', function () {
    const rectangleW = getValueFromInputField('rectangle-w');
    const rectangleL = getValueFromInputField('rectangle-l');
    if (rectangleW < 0 || rectangleL < 0) {
        alert('Please provide a positive integer number.')
        return;
    }
    const rectangleArea = (rectangleW * rectangleL).toFixed(2);
    if (isNaN(rectangleArea)) {
        alert('Error! NaN (Not a Number)');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
            <div class="flex mb-6">
                <p>Rectangle</p>
                <p class="mx-8">${rectangleArea}cm<sup>2</sup></p>
                <button class="text-white bg-cyan-600 hover:bg-cyan-700 px-2.5 py-2 rounded">Convert to m<sup>2</sup>
                </button>
            </div>
`;
    const ol = document.getElementById('area-calculation-list');
    ol.appendChild(li);
})