// In the popular Minesweeper game you have a board with some mines and those cells that don't
// contain a mine have a number in it that indicates the total number of mines in the neighboring cells.
// Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Dylan Israel solution

function minesweeper(matrix) {
  let mineCount = [];
  for (let i = 0; i < matrix.length; i++) {
    mineCount.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      mineCount[i][j] = 0;
      // check the above
      if (matrix[i][j - 1] === true) {
        mineCount[i][j]++;
      }
      // check below
      if (matrix[i][j + 1] != undefined) {
        if (matrix[i][j + 1] === true) {
          mineCount[i][j]++;
        }
      }
      // check left
      if (matrix[i - 1] != undefined) {
        if (matrix[i - 1][j] === true) {
          mineCount[i][j]++;
        }
      }
      // check right
      if (matrix[i + 1] != undefined) {
        if (matrix[i + 1][j] === true) {
          mineCount[i][j]++;
        }
      }
      // down right
      if (matrix[i + 1] != undefined) {
        if (matrix[i + 1][j + 1] === true) {
          mineCount[i][j]++;
        }
      }
      // down left
      if (matrix[i + 1] != undefined) {
        if (matrix[i + 1][j - 1] === true) {
          mineCount[i][j]++;
        }
      }
      // top right
      if (matrix[i - 1] != undefined) {
        if (matrix[i - 1][j + 1] === true) {
          mineCount[i][j]++;
        }
      }
      // top left
      if (matrix[i - 1] != undefined) {
        if (matrix[i - 1][j - 1] === true) {
          mineCount[i][j]++;
        }
      }
    }
  }
  return mineCount;
}
