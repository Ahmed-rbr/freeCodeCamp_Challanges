const removeZeros = (arr = []) => {
  if (arr.length == 0) return [];

  const size = arr.length;
  arr = arr.filter((a) => a !== 0);

  for (let i = arr.length; i < size; i++) {
    arr.push(0);
  }
  return arr;
};

console.log(removeZeros([]));
