function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error('String length should be between 1 and 10');
  }
}

module.exports = stringLength;
