const solution = (orders, course) => {
  const result = {};
  course.forEach((menuNum) => {
    result[menuNum] = {};
    orders.forEach((order) => {
      const combinations = getCombinations(order.split(''), menuNum);
      combinations.forEach((combination) => {
        const menu = combination.sort().join('');
        if (result[menuNum][menu]) {
          result[menuNum][menu]++;
        } else {
          result[menuNum][menu] = 1;
        }
      });
    });
  });
  let answer = [];
  Object.keys(result).forEach((key) => {
    const menusObj = result[key];
    const numOfMenuObj = {};
    Object.keys(menusObj).forEach((menu) => {
      if (numOfMenuObj[menusObj[menu]]) {
        numOfMenuObj[menusObj[menu]] = [...numOfMenuObj[menusObj[menu]], menu];
      } else {
        numOfMenuObj[menusObj[menu]] = [menu];
      }
    });
    const maxNum = Math.max(...Object.keys(numOfMenuObj));
    if (maxNum > 1) {
      answer = [...answer, ...numOfMenuObj[maxNum]];
    }
  });
  return answer.sort();
};

const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
};
