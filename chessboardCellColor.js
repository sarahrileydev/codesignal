function chessBoardCellColor(cell1, cell2) {
  let cellArr1 = cell1.split("");
  let cellArr2 = cell2.split("");
  let convertLettersToNum = {
    A: "1",
    B: "2",
    C: "3",
    D: "4",
    E: "5",
    F: "6",
    G: "7",
    H: "8"
  };
  let color1 = "";
  let color2 = "";

  cellArr1[0] = convertLettersToNum[cellArr1[0]];
  cellArr2[0] = convertLettersToNum[cellArr2[0]];

  if (cellArr1[0] % 2 === 0 && cellArr1[1] % 2 === 0) {
    color1 = "dark";
  } else if (cellArr1[0] % 2 === 1 && cellArr1[1] % 2 === 1) {
    color1 = "dark";
  } else {
    color1 = "light";
  }

  if (cellArr2[0] % 2 === 0 && cellArr2[1] % 2 === 0) {
    color2 = "dark";
  } else if (cellArr2[0] % 2 === 1 && cellArr2[1] % 2 === 1) {
    color2 = "dark";
  } else {
    color2 = "light";
  }

  if (color1 === color2) {
    return true;
  }
  return false;
}

chessBoardCellColor("A1", "C3");
