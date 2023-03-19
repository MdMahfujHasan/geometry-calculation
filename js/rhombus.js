document.getElementById('btn-calculate-rhombus').addEventListener('click', function () {
    const rhombusD1 = getValueFromInputField('rhombus-d1');
    const rhombusD2 = getValueFromInputField('rhombus-d2');
    if (rhombusD1 < 0 || rhombusD2 < 0) {
        alert('Please provide a positive integer number.')
        return;
    }
    const rhombusArea = (0.5 * rhombusD1 * rhombusD2).toFixed(2);
    if (isNaN(rhombusArea)) {
        alert('Error! NaN (Not a Number)');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
            <div class="flex mb-6">
                <p>Rhombus</p>
                <p class="mx-4">${rhombusArea}cm<sup>2</sup></p>
                <button class="text-white bg-cyan-600 hover:bg-cyan-700 px-2.5 py-2 rounded">Convert to m<sup>2</sup>
                </button>
            </div>
`;
    const ol = document.getElementById('area-calculation-list');
    ol.appendChild(li);
})