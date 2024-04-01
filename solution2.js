function generateArray(start, end) {
    const length = Math.abs(end - start) + 1;
    const step = start <= end ? 1 : -1;
    return Array.from({ length }, (_, index) => start + step * index);
  }
  console.log(generateArray(4, 7)); 
  console.log(generateArray(-4, 7));