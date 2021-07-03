const solution = (new_id) => {
  let recommandId = new_id.slice();
  // step1
  recommandId = recommandId.toLowerCase();
  // step2
  recommandId = recommandId.replace(/[^a-z0-9_\-\.]/g, '');
  // step3
  recommandId = recommandId.replace(/\.{2,}/g, '.');
  // step4
  recommandId = recommandId[0] === '.' ? recommandId.slice(1) : recommandId;
  recommandId =
    recommandId[recommandId.length - 1] === '.'
      ? recommandId.slice(0, recommandId.length - 1)
      : recommandId;
  // step5
  recommandId = recommandId.length === 0 ? 'a' : recommandId;
  // step6
  recommandId =
    recommandId.length > 15 ? recommandId.slice(0, 15) : recommandId;
  recommandId =
    recommandId[recommandId.length - 1] === '.'
      ? recommandId.slice(0, recommandId.length - 1)
      : recommandId;
  // step7
  if (recommandId.length < 3) {
    const lastChar = recommandId[recommandId.length - 1];
    while (recommandId.length !== 3) {
      recommandId += lastChar;
    }
  }
  return recommandId;
};

console.log(solution('...!@BaT#*..y.abcdefghijklm'));

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15)
    .replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/^\.|\.$/g, '');
  return id.padEnd(3, id[id.length - 1]);
};
