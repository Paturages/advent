const input = `Generator A starts with 634
Generator B starts with 301`;
const FACTOR_A = 16807;
const FACTOR_B = 48271;
const CAP = 2147483647;
const N = 40000000;

// Part 1
(([a, b]) => {
  let count = 0;
  for (let i = 0; i < N; i++) {
    a = (a * FACTOR_A) % CAP;
    b = (b * FACTOR_B) % CAP;
    if (a.toString(2).slice(-16) == b.toString(2).slice(-16)) count++;
  }
  return count;
})(input.split('\n').map(x => +x.slice(x.lastIndexOf(' ') + 1)))

// Part 2
const N2 = 5000000;
(([a, b]) => {
  let count = 0;
  for (let i = 0; i < N2; i++) {
    do a = (a * FACTOR_A) % CAP;
    while (a % 4);
    do b = (b * FACTOR_B) % CAP;
    while (b % 8);
    if (a.toString(2).slice(-16) == b.toString(2).slice(-16)) count++;
  }
  return count;
})(input.split('\n').map(x => +x.slice(x.lastIndexOf(' ') + 1)))
