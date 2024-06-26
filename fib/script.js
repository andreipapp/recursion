function fib(num) {
    let last = 0;
    let current = 1;
    console.log(last);
    console.log(current);
    for (let i = 1; i < num - 1; i++) {
        current += last;
        last = current - last;
        console.log(current);
    }
}

function fibRec(num, array = [0, 1]) {

    if (num === 1) return [0]
    else if (num === 2) return [0, 1]
    else {
        array.push(array[array.length - 1] + array[array.length - 2]);
        fibRec(num - 1, array);
    }
    return array;
}
console.log(fibRec(8));