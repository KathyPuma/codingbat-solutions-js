function conCat(a, b) {
  if (a[a.length - 1] === b[0]) {
    return a.slice(0, a.length - 1) + b;
  } else {
    return a + b;
  }
}