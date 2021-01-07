function nElement(arr) {
    let nStep = Number(arr.pop());
    for (let i = 0; i < arr.length; i += nStep) {
        console.log(arr[i]);
    }
}


nElement(['5', '20', '31', '4', '20', '2'])
nElement(['dsa', 'asd', 'test', 'tset', '2'])
nElement(['1', '2', '3', '4', '5', '6'])