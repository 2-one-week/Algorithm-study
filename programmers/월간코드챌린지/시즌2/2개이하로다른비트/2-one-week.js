const solution = (left, right) => {
  let answer = 0;
  for (let num = left; num <= right; num++) {
    let count = 0;
    for (let divider = 1; divider <= num; divider++) {
      if (num % divider === 0) {
        count++;
      }
    }
    count % 2 === 0 ? (answer += num) : (answer -= num);
  }
  return answer;
};
