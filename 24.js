const input = `31/13
34/4
49/49
23/37
47/45
32/4
12/35
37/30
41/48
0/47
32/30
12/5
37/31
7/41
10/28
35/4
28/35
20/29
32/20
31/43
48/14
10/11
27/6
9/24
8/28
45/48
8/1
16/19
45/45
0/4
29/33
2/5
33/9
11/7
32/10
44/1
40/32
2/45
16/16
1/18
38/36
34/24
39/44
32/37
26/46
25/33
9/10
0/29
38/8
33/33
49/19
18/20
49/39
18/39
26/13
19/32`;

// Part 1
false &&
(components => {
  const combinations = [];
  // Map components to ports
  const ports = {};
  components.forEach((component, index) => {
    const [p1, p2] = component.split('/');
    if (!ports[p1]) ports[p1] = {};
    if (!ports[p2]) ports[p2] = {};
    ports[p1][index] = true;
    ports[p2][index] = true;
  });
  const roots = Object.keys(ports[0]);
  const computeBranches = (usedNode, bridge, usedComponents) => {
    const [p1, p2] = components[bridge.slice(-1)[0]].split('/');
    const nextNodes = Object.keys(Object.assign({}, ports[p1 == usedNode ? p2 : p1])).filter(i => !usedComponents[i]);
    if (!nextNodes.length) return combinations.push(bridge.map(i => components[i]));
    nextNodes.forEach(node => computeBranches(p1 == usedNode ? p2 : p1, bridge.concat(node), Object.assign({ [node]: true }, usedComponents)));
  };
  roots.forEach(root => computeBranches(0, [root], { [root]: true }));
  console.log(combinations.reduce((max, bridge) => {
    const sum = bridge.reduce((sum, x) => {
      const [p1, p2] = x.split('/');
      return sum + Number(p1) + Number(p2);
    }, 0);
    return sum > max ? sum : max;
  }, 0));
})(input.split('\n'));

// Part 2
(components => {
  const combinations = [];
  // Map components to ports
  const ports = {};
  components.forEach((component, index) => {
    const [p1, p2] = component.split('/');
    if (!ports[p1]) ports[p1] = {};
    if (!ports[p2]) ports[p2] = {};
    ports[p1][index] = true;
    ports[p2][index] = true;
  });
  const roots = Object.keys(ports[0]);
  const computeBranches = (usedNode, bridge, usedComponents) => {
    const [p1, p2] = components[bridge.slice(-1)[0]].split('/');
    const nextNodes = Object.keys(Object.assign({}, ports[p1 == usedNode ? p2 : p1])).filter(i => !usedComponents[i]);
    if (!nextNodes.length) return combinations.push(bridge.map(i => components[i]));
    nextNodes.forEach(node => computeBranches(p1 == usedNode ? p2 : p1, bridge.concat(node), Object.assign({ [node]: true }, usedComponents)));
  };
  roots.forEach(root => computeBranches(0, [root], { [root]: true }));
  let maxLength = 0;
  console.log(combinations.reduce((max, bridge) => {
    if (bridge.length < maxLength) return max;
    if (bridge.length > maxLength) {
      maxLength = bridge.length;
      max = 0;
    }
    const sum = bridge.reduce((sum, x) => {
      const [p1, p2] = x.split('/');
      return sum + Number(p1) + Number(p2);
    }, 0);
    return sum > max ? sum : max;
  }, 0));
})(input.split('\n'));
