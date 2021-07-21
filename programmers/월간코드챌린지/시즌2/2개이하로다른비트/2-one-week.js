const solution = (numbers) => {
  return numbers.map((number) => {
    let startNumber = number;
    while (true) {
      startNumber++;
      const numOfDiffBits = String((startNumber ^ number).toString(2)).match(
        /1/g,
      ).length;
      if (numOfDiffBits > 2) continue;
      else break;
    }
    return startNumber;
  });
};

//  10, 11번 시간 초과로 틀림
// 짝수면 맨끝 0이니까 1로 바꿔줌
// 홀수면 경우의 수에 따라 바꿔주면 될듯
