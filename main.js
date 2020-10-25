// The function outputs a string with numbers between A and B, sorted in ascending order. It is not known which of the numbers is greater, but it is known that both A and B are greater than 0.
function cycle(a, b) {
  let x = "";
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    x += i + " ";
  }
  return x;
}
