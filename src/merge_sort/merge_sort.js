function getLeftHalf(array) {
  let length = array.length;

  if (length % 2 === 0) {
    return array.slice(0, length / 2);
  } else {
    // left half always smaller than right half of array
    return array.slice(0, Math.floor(length / 2));
  }
}

function getRightHalf(array) {
  let length = array.length;

  if (length % 2 === 0) {
    return array.slice(length / 2, length);
  } else {
    // right half always bigger than left half of array
    return array.slice(Math.floor(length / 2), length);
  }
}

function merge(array1, array2) {
  let i = 0;
  let j = 0;
  let k = 0;
  let mergedArr = [];

  while (k < array1.length + array2.length) {
    if (
      array1[i] < array2[j] ||
      (array2[j] === undefined && array1[i] !== undefined)
    ) {
      mergedArr.push(array1[i]);
      i++;
    } else {
      mergedArr.push(array2[j]);
      j++;
    }
    k++;
  }

  return mergedArr;
}

function mergeSort(array) {
  if (array.length === 1) return array;

  let sortedLeft = mergeSort(getLeftHalf(array));
  let sortedRight = mergeSort(getRightHalf(array));

  let sortedMerge = merge(sortedLeft, sortedRight);

  return sortedMerge;
}

export default mergeSort;
