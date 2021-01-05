function givenDelimeter(arr) {
    let delimeter = arr[arr.length - 1];
    arr.pop();
    let result = arr.join(`${delimeter}`);
    return result;
}

console.log(givenDelimeter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']
))
