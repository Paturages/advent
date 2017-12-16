const input = `106,118,236,1,130,0,235,254,59,205,2,87,129,25,255,118`;
const ARRAY_LENGTH = 256;

// Part 1
(lengths => {
  let skipSize = 0;
  let index = 0;
  let length;
  let array = new Array(ARRAY_LENGTH).fill(0).map((_, i) => i);
  while ((length = lengths.shift()) >= 0) {
    // To be able to wrap around
    array = array.concat(array.slice());
    array = array
      // Before the sub-array
      .slice(0, index)
      // The sub-array
      .concat(array.slice(index, index + length).reverse())
      // After the sub-array
      .concat(array.slice(index + length))
    ;
    // Recrop the array
    array = index + length > ARRAY_LENGTH ?
      array.slice(ARRAY_LENGTH, index + length).concat(array.slice(index + length - ARRAY_LENGTH, ARRAY_LENGTH)) :
      array.slice(0, ARRAY_LENGTH)
    ;
    index = (index + length + skipSize++) % ARRAY_LENGTH;
  }
  return array[0] * array[1];
})(input.split(',').map(Number))

// Part 2
(sourceLengths => {
  let skipSize = 0;
  let index = 0;
  let length;
  let array = new Array(ARRAY_LENGTH).fill(0).map((_, i) => i);
  for (let i = 0; i < 64; i++) {
    const lengths = sourceLengths.slice();
    while ((length = lengths.shift()) >= 0) {
      // To be able to wrap around
      array = array.concat(array.slice());
      array = array
        // Before the sub-array
        .slice(0, index)
        // The sub-array
        .concat(array.slice(index, index + length).reverse())
        // After the sub-array
        .concat(array.slice(index + length))
      ;
      // Recrop the array
      array = index + length > ARRAY_LENGTH ?
        array.slice(ARRAY_LENGTH, index + length).concat(array.slice(index + length - ARRAY_LENGTH, ARRAY_LENGTH)) :
        array.slice(0, ARRAY_LENGTH)
      ;
      index = (index + length + skipSize++) % ARRAY_LENGTH;
    }
  }
  return new Array(ARRAY_LENGTH / 16).fill(0)
    .map((_, i) =>
      array.slice(16 * i, 16 * (i + 1))
        .reduce((hash, x) => hash ^ +x, 0)
        .toString(16)
    )
    // Left pad if necessary
    .map(x => x.length == 1 ? `0${x}` : x)
    .join('')
  ;
})(input.split('').map(x => x.charCodeAt()).concat([17, 31, 73, 47, 23]))
