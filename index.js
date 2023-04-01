//1.Create a JavaScript function to find difference between two arrays.
function arrayDiff(a, b) {
  return [
      ...a.filter(x => b.indexOf(x) === -1),
      ...b.filter(x => a.indexOf(x) === -1)
  ];
}
console.log(arrayDiff([1, 2, 3], [1, 2, 3, 4, 5]));
console.log(arrayDiff(['a', 'b', 'c'], ['a', 'b']));

//2.Create a JavaScript function to get a sum of all numbers in the given range.
function rangeSum(arr) {
  return arr.reduce((a,b) => (a+b)*(Math.abs(a-b) + 1) / 2)
}
console.log(rangeSum([5,10]));
console.log(rangeSum([0,6]));