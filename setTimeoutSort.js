function setTimeoutSort(arr, callback) {
    const sortedArr = [];
    const allPromises = arr.map(el => new Promise(resolve => {
        setTimeout(() => {
            sortedArr.push(el);
            resolve();
        }, el);
    }));

    Promise.all(allPromises).then(() => callback(sortedArr));
}

async function setTimeoutSortAsync(arr) {
    return await new Promise(resolve => setTimeoutSort(arr, resolve));
}

/**
 * Copy-paste like a true coder.
 * https://stackabuse.com/insertion-sort-in-javascript/
 */
function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = inputArr[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}

function setTimeoutSortStrict(arr, callback) {
    setTimeoutSort(arr, (result) => {
        callback(insertionSort(result));
    });
}

async function setTimeoutSortStrictAsync(arr) {
    return await new Promise(resolve => setTimeoutSortStrict(arr, resolve));
}

module.exports = {
    setTimeoutSort,
    setTimeoutSortAsync,
    setTimeoutSortStrict,
    setTimeoutSortStrictAsync
}