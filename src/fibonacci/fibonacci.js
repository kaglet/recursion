function fibs(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [1, 0];
  }

  // Compute fibonacci for all n after 2.
  // For any n return any array that is their fibonacci and of all numbers before them, how we compute them is another thing.
  // Never mind repetition I don't think we can avoid that,
  // How can we feed them as an answer with the base knowns the trivial cases, how do we use the trivial cases in an array other than like this.
  // Always return an array in literal list format, enumerated, where it is the first, i think the second, then the third.
  // We are always guaranteed the third though.
  // How can I add previous entries when they are arrays.
  // Well the result literal is an array but we could always get the first entry then conjoin them later.
  // Does the same thing as fibonacci but returns a single number in an array, I want more than that.
  // How can I return the rest of the results recursively in a list format even if the indexed first element is the one I want.
  // It is important to list them uniquely at that.
  // That element in the sequence and the element before it
  /* The fibs of the element itself and the element before it will always give the desired result I think no repetition because 
  it's just enumerating of the element before it always right*/
  return [fibs(n - 1)[0] + fibs(n - 2)[0], ...fibs(n - 1)];
}

export default fibs;
