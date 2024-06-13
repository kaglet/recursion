function fibs(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [1, 0];
  }

  // Compute fibonacci for all n after 2.
  // For any n return any array that is their fibonacci and of all numbers before them enumerated in a single list each time
  return [fibs(n - 1)[0] + fibs(n - 2)[0], ...fibs(n - 1)];
}

export default fibs;
