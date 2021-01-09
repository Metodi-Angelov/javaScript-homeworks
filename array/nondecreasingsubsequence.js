function solution(array = []) {
    let result = array.reduce((acc, currElement) => {
        let lastElement = acc[acc.length - 1];
        if (currElement >= lastElement || lastElement === undefined) {
            acc.push(currElement);
        }
        return acc;
    }, []);
    console.log(result.join('\n'))
}



solution([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// solution([1, 2, 3, 4]);
// solution([20, 3, 2, 15, 6, 1]);