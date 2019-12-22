
function alternatingSums(a) {
  let team1 = 0;
  let team2 = 0;

  let newArr = [];

  for (let i = 0; i < a.length; i++) {
    if (i == 0 || i % 2 == 0) {
      team1 += a[i];
    } else {
      team2 += a[i];
    }
  }

  return newArr.push(team1, team2);
}

alternatingSums([50, 60, 60, 45, 70]);
