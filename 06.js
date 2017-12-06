const input = '11	11	13	7	0	15	5	5	4	4	1	1	7	1	15	11';

// [Part 1, Part 2]
(() => {
  const t = input.split('\t').map(x => +x);
  const map = {};
  let count = -1, loopCount = 0, hash;
  do {
    if (map[hash] == 1) loopCount++; else count++;
    if (map[hash] == 2) return [count, loopCount];
    if (hash) map[hash] = map[hash] ? 2 : 1;
    hash = t.join('.');
    let max = Math.max(...t), i = t.indexOf(max);
    t[i] = 0;
    while (max--) {
    	i = (i+1) % t.length;
    	t[i]++;
    }
  } while (1);
})();
