document.getElementById('btn-calculate-pentagon').addEventListener('click', function () {
    const pentagonP = getValueFromInputField('pentagon-p');
    const pentagonB = getValueFromInputField('pentagon-b');
    if (pentagonP < 0 || pentagonB < 0) {
        alert('Please provide a positive integer number.')
        return;
    }
    const pentagonArea = (0.5 * pentagonP * pentagonB).toFixed(2);
    if (isNaN(pentagonArea)) {
        alert('Error! NaN (Not a Number)');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
            <div class="flex mb-6">
                <p>Pentagon</p>
                <p class="mx-8">${pentagonArea}cm<sup>2</sup></p>
                <button class="text-white bg-cyan-600 hover:bg-cyan-700 px-2.5 py-2 rounded">Convert to m<sup>2</sup>
                </button>
            </div>
`;
    const ol = document.getElementById('area-calculation-list');
    ol.appendChild(li);
})