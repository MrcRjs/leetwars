function sumStrings(a, b) {
  a = cleanLeftZeros(a);
  b = cleanLeftZeros(b);

  if (a.length > b.length) {
    const diff = a.length - b.length;
    b = [`0`.repeat(diff), ...b].join('');
  } else {
    const diff = b.length - a.length;
    a = [`0`.repeat(diff), ...a].join('');
  }

  let sum = [];
  let r = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    const tempSum = +(a[i]) + +(b[i]) + r;

    if (tempSum > 9) {
      r = 1;
      const firstDigit = `${tempSum}`.split('')[1];
      sum.push(firstDigit);
    } else {
      sum.push(tempSum);
      r = 0;
    }
  }

  return `${r ? r : ''}${sum.reverse().join('')}`;
}

function cleanLeftZeros(n) {
  let nArr = n.split('');
  let i = 0;
  while (nArr[i] === '0') {
    i++;
  }
  return nArr.slice(i).join('');
}

module.exports = { sumStrings, cleanLeftZeros };

