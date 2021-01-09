function rotateArr(arr = []) {
    let amountRoration = +arr.pop();
    const arrRotated = arr;
    for (let i = 0; i < amountRoration; i++) {
        arrRotated.unshift(arrRotated.pop());
    }
    console.log(arrRotated.join(' '));
}



rotateArr(['1', '2', '3', '4', '2']);
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15']);