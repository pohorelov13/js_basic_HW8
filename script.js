const arr = [1, 2, 4, 5, 1, 3, 6, 142, 42];
console.log(arr);

// replaceElem?
function removeElement(arr, elem, newElem) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === elem) arr[i] = newElem;
        }
    }
}

removeElement(arr, 1, 66);

console.log(arr);