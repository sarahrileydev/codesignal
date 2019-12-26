function isIPv4Address(inputString) {
  //     IPv4 address is a string with the following structure: a.b.c.d,
  // where a, b, c and d are integers in range [0, 255]

  let splitString = inputString.split(".");
  let passCount = 0;

  for (let i = 0; i < splitString.length; i++) {
    if (!splitString[i]) {
      return false;
    }
    if (splitString[i] >= 0 && splitString[i] <= 255) {
      passCount++;
    }
  }
  if (passCount === 4) {
    return true;
  }
  return false;
}

isIPv4Address("172.16.254.1");
