const input = `Begin in state A.
Perform a diagnostic checksum after 12667664 steps.

In state A:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state C.

In state B:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state D.

In state C:
  If the current value is 0:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state E.

In state D:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the right.
    - Continue with state B.

In state E:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state F.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state C.

In state F:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state D.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.`;

const test = `Begin in state A.
Perform a diagnostic checksum after 6 steps.

In state A:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state B.

In state B:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.`;

// Part 1
let lines;
(rules => {
  const t = [0];
  let index = 0;
  let state = rules.start;
  for (let i = 0; i < rules.checkAfter; i++) {
    const current = t[index];
    const { write, move, nextState } = rules[state][current];
    t[index] = +write;
    index += move == 'right' ? 1 : -1;
    state = nextState;
    if (t[index] == null) {
      if (move == 'right') t.push(0);
      else {
        index++;
        t.unshift(0);
      }
    }
  }
  console.log(t.reduce((sum, x) => sum + x, 0));
})((lines = input.split('\n')).reduce((rules, line, index) => {
  if (!index) return Object.assign(rules, { start: line.slice(-2, -1) });
  if (index == 1) return Object.assign(rules, { checkAfter: +line.slice(line.indexOf('after') + 6, -7) });
  if (!line || line[0] == ' ') return rules;
  // Else, compute the state conditionals
  const state = line.slice(-2, -1);
  const stateRules = [
    {
      write: lines[index+2].slice(-2, -1),
      move: lines[index+3].slice(lines[index+3].lastIndexOf(' ') + 1, -1),
      nextState: lines[index+4].slice(-2, -1)
    },
    {
      write: lines[index+6].slice(-2, -1),
      move: lines[index+7].slice(lines[index+3].lastIndexOf(' ') + 1, -1),
      nextState: lines[index+8].slice(-2, -1)
    }
  ];
  return Object.assign(rules, { [state]: stateRules });
}, {}));

// Part 2
// :thinking_face:
document.querySelector('input[value="[Reboot the Printer]"]').click();
