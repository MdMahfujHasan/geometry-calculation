document.getElementById('btn-calculate-parallelogram').addEventListener('click', function () {
    const parallelogramB = getValueFromInputField('parallelogram-b');
    const parallelogramH = getValueFromInputField('parallelogram-h');
    if (parallelogramB < 0 || parallelogramH < 0) {
        alert('Please provide a positive integer number.')
        return;
    }
    const parallelogramArea = (parallelogramB * parallelogramH).toFixed(2);
    if (isNaN(parallelogramArea)) {
        alert('Error! NaN (Not a Number)');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
            <div class="flex mb-6">
                <p>Parallelogram</p>
                <p class="mx-4">${parallelogramArea}cm<sup>2</sup></p>
                <button class="text-white bg-cyan-600 hover:bg-cyan-700 px-2.5 py-2 rounded">Convert to m<sup>2</sup>
                </button>
            </div>
`;
    const ol = document.getElementById('area-calculation-list');
    ol.appendChild(li);
})