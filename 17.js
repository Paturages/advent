const input = 394;

// Part 1
false &&
(input => {
  let state = [0];
  let index = 0;
  for (let i = 0; i < 2017; i++) {
    index = ((1 + index + input) % (i + 1)) || 0;
    state.splice(index + 1, 0, i + 1);
  }
  return state[index + 2];
})(input)

// Part 2
(input => {
  let index = 0;
  let result;
  for (let i = 0; i < 50000000; i++) {
    index = ((1 + index + input) % (i + 1)) || 0;
    // The second value is only set when index == 0
    // so we can disregard the array processing
    if (index == 0) result = i + 1;
  }
  return result;
})(input)
