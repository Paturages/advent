const input = `.....###..#....#.#..##...
......##.##...........##.
.#..#..#.#.##.##.........
...#..###..##.#.###.#.#.#
##....#.##.#..####.####..
#..##...#.##.##.....##..#
.#.#......#...####...#.##
###....#######...#####.#.
##..#.####...#.#.##......
##.....###....#.#..#.##.#
.#..##.....#########.##..
##...##.###..#.#..#.#...#
...####..#...#.##.#..####
.#..##......#####..#.###.
...#.#.#..##...#####.....
#..###.###.#.....#.#.###.
##.##.#.#.##.#..#..######
####.##..#.###.#...#..###
.........#####.##.###..##
..#.##.#..#..#...##..#...
###.###.#.#..##...###....
##..#.#.#.#.#.#.#...###..
#..#.#.....#..#..#..##...
........#######.#...#.#..
..##.###.#.##.#.#.###..##`;

// Part 1
// I was tricked by edge cases!
// You have to *expand* the grid, not confine to it...
((grid) => {
  const expand = (towards) => {
    switch (towards) {
      case 'left':
        if (x > 0) return;
        grid.forEach((row, i) => {
          grid[i] = ['.'].concat(row);
        });
        x++;
        break;
      case 'right':
        if (x < grid[0].length - 1) return;
        grid.forEach((row, i) => {
          grid[i].push('.');
        });
        break;
      case 'up':
        if (y > 0) return;
        grid = ['.'.repeat(grid[0].length).split('')].concat(grid);
        y++;
        break;
      case 'down':
        if (y < grid.length - 1) return;
        grid.push('.'.repeat(grid[0].length).split(''));
    }
  }
  const turn = (towards) => {
    switch (direction) {
      // Left/Right
      case 'up':
        direction = towards;
        expand(direction);
        return towards == 'left' ? [x-1, y] : [x+1, y];
      // Right/Left
      case 'down':
        direction = towards == 'left' ? 'right' : 'left';
        expand(direction);
        return towards == 'right' ? [x - 1, y] : [x + 1, y];
      // Down/Up
      case 'left':
        direction = towards == 'left' ? 'down' : 'up';
        expand(direction);
        return towards == 'left' ? [x, y+1] : [x, y-1];
      case 'right':
      // Up/Down
        direction = towards == 'left' ? 'up' : 'down';
        expand(direction);
        return towards == 'right' ? [x, y + 1] : [x, y - 1];
    }
  };
  let direction = 'up';
  let x = (grid[0].length / 2 >> 0);
  let y = (grid.length / 2 >> 0);
  let count = 0;
  for (let i = 0; i < 10000; i++) {
    const cell = grid[y][x];
    if (cell == '#') {
      // Clean...
      grid[y][x] = '.';
      // and turn right
      [x, y] = turn('right');
    } else {
      // Infect...
      count++;
      grid[y][x] = '#';
      // and turn left
      [x, y] = turn('left');
    }
  }
  return count;
})(input.split('\n').map(x => x.split('')));

// Part 2
((grid) => {
  const expand = (towards) => {
    switch (towards) {
      case 'left':
        if (x > 0) return;
        grid.forEach((row, i) => {
          grid[i] = ['.'].concat(row);
        });
        x++;
        break;
      case 'right':
        if (x < grid[0].length - 1) return;
        grid.forEach((row, i) => {
          grid[i].push('.');
        });
        break;
      case 'up':
        if (y > 0) return;
        grid = ['.'.repeat(grid[0].length).split('')].concat(grid);
        y++;
        break;
      case 'down':
        if (y < grid.length - 1) return;
        grid.push('.'.repeat(grid[0].length).split(''));
    }
  }
  const turn = (towards) => {
    switch (direction) {
      // Left/Right
      case 'up':
        direction = towards;
        expand(direction);
        return towards == 'left' ? [x - 1, y] : [x + 1, y];
      // Right/Left
      case 'down':
        direction = towards == 'left' ? 'right' : 'left';
        expand(direction);
        return towards == 'right' ? [x - 1, y] : [x + 1, y];
      // Down/Up
      case 'left':
        direction = towards == 'left' ? 'down' : 'up';
        expand(direction);
        return towards == 'left' ? [x, y + 1] : [x, y - 1];
      case 'right':
      // Up/Down
        direction = towards == 'left' ? 'up' : 'down';
        expand(direction);
        return towards == 'right' ? [x, y + 1] : [x, y - 1];
    }
  };
  let direction = 'up';
  let x = (grid[0].length / 2 >> 0);
  let y = (grid.length / 2 >> 0);
  let count = 0;
  for (let i = 0; i < 10000000; i++) {
    const cell = grid[y][x];
    switch (cell) {
      case '.': // Weaken + Left
        grid[y][x] = 'W';
        [x, y] = turn('left');
        break;
      case 'W': // Infect + Forward
        count++;
        grid[y][x] = '#';
        expand(direction);
        switch (direction) {
          case 'up': y--;
          break;
          case 'down': y++;
          break;
          case 'left': x--;
          break;
          case 'right': x++;
          break;
        }
        break;
      case '#': // Flag + Right
        grid[y][x] = 'F';
        [x, y] = turn('right');
        break;
      case 'F': // Clean + Reverse
        grid[y][x] = '.';
        switch (direction) {
          case 'up': expand(direction = 'down'); y++;
            break;
          case 'down': expand(direction = 'up'); y--;
            break;
          case 'left': expand(direction = 'right'); x++;
            break;
          case 'right': expand(direction = 'left'); x--;
            break;
        }
        break;
    }
  }
  return count;
})(input.split('\n').map(x => x.split('')));
