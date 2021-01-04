function cookingNumber(arr) {
    let num = Number(arr[0]);
    let operators = { chop: (x) => x / 2, dice: (x) => Math.sqrt(x), spice: (x) => x + 1, bake: (x) => x * 3, fillet: (x) => x * 0.8 };
    for (let i = 1; i < arr.length; i++) {
        num = operators[arr[i]](num);
        console.log(num);
    }
}


cookingNumber(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
cookingNumber(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])