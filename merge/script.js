function mergeSort(array) {
    if (array.length === 1) return array;
    let leftArray = [];
    let rightArray = [];
    let middle = Math.floor(array.length / 2);
    for (let i = 0; i < middle; i++) {
        leftArray.push(array[i]);
    }
    for (let i = middle; i < array.length; i++) {
        rightArray.push(array[i]);
    }

    return merge(mergeSort(leftArray), mergeSort(rightArray));

}
function merge(left, right) {
    let copy = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            copy.push(left[i++]);
        } else {
            copy.push(right[j++]);
        }
    }
    while (i < left.length) {
        copy.push(left[i++]);
    }

    while (j < right.length) {
        copy.push(right[j++]);
    }

    return copy;
}
console.log(mergeSort([105, 79, 100, 110]));