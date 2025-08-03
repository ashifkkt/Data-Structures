function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentElement = arr[mid];
    if (currentElement < val) {
      left = mid + 1;
    } else if (currentElement > val) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 5, 6, 8, 9, 9, 10], 10));
