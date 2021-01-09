function addRemoveElements(arr = []) {
    const arrNums = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            arrNums.push(i + 1);
        } else {
            arrNums.pop();
        }
    }
    console.log(arrNums.length > 0 ? arrNums.join('\n') : 'Empty');
    
}


// addRemoveElements(['add', 'add', 'add', 'add']);
// addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);