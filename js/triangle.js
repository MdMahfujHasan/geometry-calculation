document.getElementById('btn-calculate-triangle').addEventListener('click', function () {
    const triangleB = getValueFromInputField('triangle-b');
    const triangleH = getValueFromInputField('triangle-h');
    if (triangleB < 0 || triangleH < 0) {
        alert('Please provide a positive integer number.')
        return;
    }
    const triangleArea = (0.5 * triangleB * triangleH).toFixed(2);
    if (isNaN(triangleArea)) {
        alert('Error! NaN (Not a Number)');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
            <div class="flex mb-6">
                <p>Triangle</p>
                <p class="mx-4">
                    <span id="triangle-area">${triangleArea}</span>
                    cm<sup>2</sup>
                </p>
                <button id="triangle-convert-m" class="text-white bg-cyan-600 hover:bg-cyan-700 px-2.5 py-2 rounded">Convert to m<sup>2</sup>
                </button>
            </div>
`;
    const ol = document.getElementById('area-calculation-list');
    ol.appendChild(li);
})

document.getElementById('triangle-convert-m').addEventListener('click', function () {
    const cm = document.getElementById('triangle-area');
    const cmString = cm.innerText;
    const cmNumeric = parseFloat(cmString);
    const m = cmNumeric * 0.01;
    cm.innerText = m;
})