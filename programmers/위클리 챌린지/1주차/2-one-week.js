const solution = (price, money, count) => {
  const requiredMoney =
    money -
    Array(count)
      .fill(price)
      .map((v, i) => v * (i + 1))
      .reduce((acc, curr) => acc + curr, 0);
  return requiredMoney < 0 ? Math.abs(requiredMoney) : 0;
};
