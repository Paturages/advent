const input = `set b 99
set c b
jnz a 2
jnz 1 5
mul b 100
sub b -100000
set c b
sub c -17000
set f 1
set d 2
set e 2
set g d
mul g e
sub g b
jnz g 2
set f 0
sub e -1
set g e
sub g b
jnz g -8
sub d -1
set g d
sub g b
jnz g -13
jnz f 2
sub h -1
set g b
sub g c
jnz g 2
jnz 1 3
sub b -17
jnz 1 -23`;

// Part 1
((instructions) => {
  const registers = {};
  const map = {};
  let index = 0;
  let count = 0;
  while (instructions[index]) {
    let [op, reg, value] = instructions[index];
    const parsedRegister = registers[reg] || Number(reg) || 0;
    value = registers[value] || Number(value) || 0;
    switch (op) {
      case 'set': 
        registers[reg] = value;
        break;
      case 'sub':
        registers[reg] = (registers[reg] || 0) - value;
        break;
      case 'mul':
        count++;
        registers[reg] = (registers[reg] || 0) * value;
        break;
      case 'jnz':
        if (parsedRegister != 0) index += value - 1;
        break;
    }
    index++;
  }
  return count;
})(
  input.split('\n').map(x => x.split(' '))
);

// Part 2
// Just reimplement the input... I guess?
(() => {
  /*
    set b 99
    set c b
    jnz a 2
    jnz 1 5
    mul b 100
    sub b -100000
    set c b
    sub c -17000
    set f 1
    set d 2
    set e 2

    This is the variable input part that should change for each user
  */
  const r = { a: 1, b: 109900, c: 109900 + 17000, f: 1, d: 2, e: 2 };
  /*
    set g d
    mul g e
    sub g b
    jnz g 2
    set f 0
    sub e -1
    set g e
    sub g b
    jnz g -8

    In this loop, f (which is a flag) is set to 0 when d*e == b
    and e is incrementing until it matches b.

    It's equivalent to setting f to 0 when b % d == 0
    and setting e to b immediately
  */
  /*
    sub d -1
    set g d
    sub g b
    jnz g -13 (returns to set e = 2)

    Incrementing d (from 2) and doing the previous operation until d == b...
    It must have something to do with prime numbers!
    f is set to 0 when d evenly divides b...
  */
  /*
    jnz f 2
    sub h -1
    set g b
    sub g c
    jnz g 2
    jnz 1 3
    sub b -17
    jnz 1 -23

    Translates to:
    if (f == 0) h++
    if (b == c) exit(0) (which is what jnz 1 3 does)
    else b += 17 and redo from { f: 1, d: 2, e: 2 }

    In the end, h is equal to the amount of non-prime numbers
    between the initial b (109900) and c (b + 17000)
    found by incrementing b by 17

    Let's implement that in good ol' JavaScript...
  */
  let count = 0;
  const isPrime = n => {
    if (n <= 3) return true;
    if (n % 2 == 0) return false;
    const l = n / 2;
    for (let i = 3; i < l; i += 2) {
      if (n % i == 0) return false;
    }
    return true;
  };
  for (let i = r.b; i <= r.c; i += 17) {
    if (!isPrime(i)) count++;
  }
  return count;
})();
