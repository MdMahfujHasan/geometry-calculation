document.getElementById('btn-calculate-ellipse').addEventListener('click', function () {
    const ellipseA = getValueFromInputField('ellipse-a');
    const ellipseB = getValueFromInputField('ellipse-b');
    if (ellipseA < 0 || ellipseB < 0) {
        alert('Please provide a positive integer number.')
        return;
    }
    const PI = Math.PI;
    const ellipseArea = (PI * ellipseA * ellipseB).toFixed(2);
    if (isNaN(ellipseArea)) {
        alert('Error! NaN (Not a Number)');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
                <div class="flex mb-6">
                    <p>Ellipse</p>
                    <p class="mx-4">${ellipseArea}cm<sup>2</sup></p>
                    <button class="text-white bg-cyan-600 hover:bg-cyan-700 px-2.5 py-2 rounded">Convert to m<sup>2</sup>
                    </button>
                </div>
    `;
    const ol = document.getElementById('area-calculation-list');
    ol.appendChild(li);
})