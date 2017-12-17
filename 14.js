const input = 'amgozmfv';
// Back from day 10
const ARRAY_LENGTH = 256;
const knotHash = input => {
  const sourceLengths = input.split('').map(x => x.charCodeAt()).concat([17, 31, 73, 47, 23]);
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
};

// Part 1
new Array(128).fill(0).reduce(
  (sum, _, i) => sum + knotHash(`${input}-${i}`)
    .split('')
    .reduce(
      (count, x) =>
      count + (Number(`0x${x}`).toString(2).match(/1/g) || []).length,
      0
    ),
  0
)

// Part 2
(input => {
  const disk = new Array(128).fill(0).map(
    (_, i) => knotHash(`${input}-${i}`)
      .split('')
      .map(x => Number(`0x${x}`).toString(2))
      .map(x => `000${x}`.slice(-4)) // Left pad
      .join('') // Join the binary numbers...
      .split('') // ...and split the digits
  );
  const clearRegion = (x, y) => {
    if (!disk[y] || !+disk[y][x]) return;
    disk[y][x] = null;
    clearRegion(x + 1, y);
    clearRegion(x, y + 1);
    clearRegion(x - 1, y);
    clearRegion(x, y - 1);
  };
  let regions = 0;
  for (let y = 0; y < disk.length; y++) {
    const row = disk[y];
    for (let x = 0; x < row.length; x++) {
      if (row[x] == 1) {
        regions++;
        clearRegion(x, y);
      }
    }
  }
  return regions;
})(input)
