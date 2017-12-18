const input = `set i 31
set a 1
mul p 17
jgz p p
mul a 2
add i -1
jgz i -2
add a -1
set i 127
set p 735
mul p 8505
mod p a
mul p 129749
add p 12345
mod p a
set b p
mod b 10000
snd b
add i -1
jgz i -9
jgz a 3
rcv b
jgz b -1
set f 0
set i 126
rcv a
rcv b
set p a
mul p -1
add p b
jgz p 4
snd a
set a b
jgz 1 3
snd b
set f 1
add i -1
jgz i -11
snd a
jgz f -16
jgz a -19`;

// Part 1
(inputs => {
  let played;
  let index = 0;
  const registers = {};
  while (true) {
    const [op, register, value] = inputs[index];
    const parsedValue = registers[value] || +value || 0;
    switch (op) {
      case 'snd': played = registers[register];
      break;
      case 'set': registers[register] = parsedValue;
      break;
      case 'add': registers[register] = (registers[register] || 0) + parsedValue;
      break;
      case 'mul': registers[register] = (registers[register] || 0) * parsedValue;
      break;
      case 'mod': registers[register] = (registers[register] || 0) % parsedValue;
      break;
      case 'rcv': if (registers[register]) return played;
      break;
      case 'jgz': if (registers[register]) index += +value - 1; // -1 to account for the next ++
      break;
    }
    index++;
  }
})(input.split('\n').map(x => x.split(' ')));

// Part 2
(inputs => {
  // One of the few times we'll get to use a generator function!
  // (first time using these, so it's a bit ugly)
  function* program(id) {
    let played;
    let index = 0;
    const registers = { p: id };
    const partner = id == 0 ? program(1) : yieldSent();
    while (index >= 0 && index < inputs.length) {
      const [op, register, value] = inputs[index];
      const parsedValue = registers[value] || +value || 0;
      const parsedRegister = registers[register] || +register || 0;
      switch (op) {
        case 'snd':
          if (id == 0) sent.push(parsedRegister);
          else count++;
          yield parsedRegister;
        break;
        case 'set': registers[register] = parsedValue;
        break;
        case 'add': registers[register] = (registers[register] || 0) + parsedValue;
        break;
        case 'mul': registers[register] = (registers[register] || 0) * parsedValue;
        break;
        case 'mod': registers[register] = (registers[register] || 0) % parsedValue;
        break;
        case 'rcv':
          const { done, value: yielded } = partner.next();
          if (done) return;
          registers[register] = yielded;
        break;
        case 'jgz': if (parsedRegister > 0) index += parsedValue - 1; // -1 to account for the next ++
        break;
      }
      index++;
    }
  }
  function* yieldSent() {
    let done;
    while (!done) {
      const value = sent.shift();
      done = value == null;
      if (!done) yield value;
    }
  }
  const p = program(0);
  const sent = [];
  let count = 0;
  while (!p.next().done);
  return count;
})(input.split('\n').map(x => x.split(' ')))
