function solve() {
    let optionList = document.getElementById('selectMenuTo');
    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', (e) => {
        console.log('clik')
    })
    optionList.innerHTML = 
    `    
    <option selected value=""></option>
        <option  value="binary">Binary</option>
        <option  value="hexadecimal">Hexadeicmal</option>
    `

}