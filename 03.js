// Part 1:
((input = 289326) => {
  let radius = 0, n = 0;
  // 1. Generate a full square spiral overshooting the input.
  // The bottom right value of a square is its size, squared.
  // (radius is the distance from to the middle to any edge)
  do n = (++radius*2 + 1)**2; while (n < input);

  // 2. Look for the value by decrementing to the other sides
  // The result is factored from these iterations
  /*
    // Search/move to the middle bottom (removes steps)
    if (n - radius <= input) return steps - (n - input);
    steps = radius;
    n -= radius;

    // To the left bottom (adds steps)
    if (n - radius <= input) return steps + (n - input);
    steps += radius;
    n -= radius;

    // To the middle left (removes steps)
    if (n - radius <= input) return steps - (n - input);
    steps = radius;
    n -= radius;

    // To the top left (adds steps)
    if (n - radius <= input) return steps + (n - input);
    steps += radius;
    n -= radius;

    // To the top middle (removes steps)
    if (n - radius <= input) return steps - (n - input);
    steps = radius;
    n -= radius;

    // To the top right (adds steps)
    if (n - radius <= input) return steps + (n - input);
    steps += radius;
    n -= radius;

    // Back to the middle right, this should be the worst-case check (removes steps)
    return steps - (n - input);
  */
  for (let toMiddle = true;;toMiddle = !toMiddle) {
    if (n - radius <= input) return (toMiddle ? 2 : 1)*radius + (n-input)*(toMiddle ? -1 : 1);
    n -= radius;
  }
})();

// Part 2
/*
  Starting with the following 3*3 square:
  5   4   2
  10  1   1
  11  23  25
  we iteratively generate new sides (right, top, left, bottom)
  by taking the adjacent cells from the previous same side,
  the previous generated value and some extra edge cases
  (usually the penultimate value of the latest generated side).
  
  Bottom is a bit of a special case since it wraps around to the
  generated right side.
*/
const previous = {
  right: [25, 1, 2],
  top: [2, 4, 5],
  left: [5, 10, 11],
  bottom: [11, 23, 25],
};
const input = 289326;

(function findValue() {
  let found;
  const right = [];
  previous.right.forEach((x, i) =>
    right.push(x + (previous.right[i+1] || 0) + (previous.right[i-1] || 0) + (right[i-1] || 0))
  );
  right.push(previous.right[right.length - 1] + right[right.length - 1]);
  found = right.find(x => x > input);
  if (found) return found;

  const top = [right[right.length - 1]];
  previous.top.forEach((x, i) =>
    top.push(x + (previous.top[i+1] || 0) + (previous.top[i-1] || right[right.length - 2]) + top[i])
  );
  top.push(previous.top[top.length - 2] + top[top.length - 1]);
  found = top.find(x => x > input);
  if (found) return found;

  const left = [top[top.length - 1]];
  previous.left.forEach((x, i) =>
    left.push(x + (previous.left[i+1] || 0) + (previous.left[i-1] || top[top.length - 2]) + left[i])
  );
  left.push(previous.left[left.length - 2] + left[left.length - 1]);
  found = left.find(x => x > input);
  if (found) return found;

  const bottom = [left[left.length - 1]];
  previous.bottom.forEach((x, i) =>
    bottom.push(x + (previous.bottom[i+1] || right[0]) + (previous.bottom[i-1] || left[left.length - 2]) + bottom[i])
  );
  bottom.push(previous.bottom[bottom.length - 2] + bottom[bottom.length - 1] + right[0]);
  found = bottom.find(x => x > input);
  if (found) return found;

  right.unshift(bottom[bottom.length - 1]);
  Object.assign(previous, { right, top, left, bottom });
  return findValue();
})();