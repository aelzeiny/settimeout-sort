# Set Timeout Sort

Best sort. Best complexity. Please use in all of your production applications.

```
npm i settimeout-sort
```

## A Revolutionary Sort!
```javascript
function setTimeoutSort(arr) {
    const sortedArr = [];
    for (let el of arr) {
        setTimeout(() => sortedArr.push(el), el);
    }
    ...
}
```

## Strictly-Sorted Usage

This uses Insertion Sort to sort the partially-sorted array. See Time-complexity for more details.

**With Callbacks**
```javascript
setTimeoutSortStrict([4, 3, 2, -100, 100], (sortedList) => console.log(sortedList));
```

**With Async**
```javascript
(async() => {
    console.log(await setTimeoutSortStrictAsync([4, 3, 2, -100, 100]));
})();
```

## Partially-Sorted Usage

**With Callbacks**
```javascript
setTimeoutSort([4, 3, 2, -100, 100], (sortedList) => console.log(sortedList));
```

**With Async**
```javascript
(async() => {
    console.log(await setTimeoutSortAsync([4, 3, 2, -100, 100]));
})();
```

## Caveats
This sort only works with numbers.

Your array might not end up sorted with `setTimeoutSortAsync` or `setTimeoutSort`; especially when using negative numbers. Please use `setTimeoutSortStrict` or `setTimeoutSortStrictAsync` to guarentee sort results.

```javascript
console.log(await setTimeoutSortAsync([4, 3, 2, -100, 100]));
// 1st try [ -100, 2, 3, 4, 100 ]
// 2nd try [ -100, 2, 3, 4, 100 ]
// 3rd try [ -100, 2, 4, 3, 100 ]
```

## Time complexity:

`setTimeoutSort`:
> *Worst Case*: O(N*T), where T is largest value in your list.
> 
> *Average Case*: o(N*T), where T is largest value in your list.


`setTimeoutSortStrict`:
> *Worst Case*: O(N*T + N^2), where T is largest value in your list. Insertion sort's worst-case time-complexity is O(N^2). However, it's highly unlikely that this case is ever encountered (unless all numbers are negative).
> 
> *Average Case*: o(N*T), where T is largest value in your list. Insertion sort is proven to be o(N) on partially-sorted arrays, and therefore does not increase the complexity of the algorithm.

## Space complexity:
O(N). This is not an inplace-sort.
