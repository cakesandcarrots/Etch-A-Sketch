let count, row, column;
count = prompt('Pick a value from 16-100');
if (count < 16 || count > 100) {
    count = prompt('Invalid choice.Pick a value between 16-100.');
}
else {
    canvas = document.querySelector('.canvas');
    for (row = 1; row <= count; row++) {
        let rPixel = document.createElement('div')
        rPixel.classList.add('rpixel');
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

}
