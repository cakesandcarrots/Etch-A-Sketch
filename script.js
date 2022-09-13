let count, row, column;
count = prompt('Add value');
canvas = document.querySelector('.canvas');
for (row = 1; row <= count; row++) {
    let rPixel = document.createElement('div')
    rPixel.classList.add('pixel');
    canvas.appendChild(rPixel);


    for (column = 1; column <= count; column++) {
        let cPixel = document.createElement('div');
        cPixel.classList.add('pixel');
        rPixel.appendChild(cPixel);

        cPixel.addEventListener('mousemove', (e) => {
            e.target.classList.add('ChangeColor');
        })

    }



}


