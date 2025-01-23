const secondLargest = (...arr) => {
  let largest = arr[0];
  let secondLargest = largest;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

let ans = secondLargest(1, 2, 3, 4, 5, 6, 40, 40, 7, 7);

console.log(ans);
