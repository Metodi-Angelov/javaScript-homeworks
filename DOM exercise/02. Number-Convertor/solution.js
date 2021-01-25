function solve() {
    let optionList = document.querySelectorAll('#selectMenuTo')[0];
    let button = document.querySelector('button');
    let inputNumber = document.querySelector('#input');
    let finalResult = document.querySelector('#result');


    optionList.innerHTML =
        `    
    <option selected value=""></option>
    <option  value="binary">Binary</option>
    <option  value="hexadecimal">Hexadecimal</option>
    `

    const options = { binary: 2, hexadecimal: 16 };

    button.addEventListener('click', () => {
        // let result
        // if(optionList.value === 'binary') {
        //    result = (+inputNumber.value).toString(2);
        // } else {
        //     result = (+inputNumber.value).toString(16);
        // }
        let result = (+inputNumber.value).toString(options[optionList.value])
        finalResult.value = result;
    })

}