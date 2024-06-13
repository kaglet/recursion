function fibs(n, sequence = []) {
  let result;

  if (n === 0 || n === 1) {
    result = n;
    sequence.push(result);

    return sequence;
  }

  result = fibs(sequence[n - 1], sequence) + fibs(sequence[n - 2], sequence);

  sequence.push(result);

  return sequence;
}

export default fibs;
