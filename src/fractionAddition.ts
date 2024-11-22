function parse(numString: string): [number, number] {
  numString = numString.slice(1);
  const [n1, n2] = numString.split('/');
  return [parseInt(n1), parseInt(n2)];
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function calc(a: string, b: string): string {
  const fa = a.startsWith('+');
  const fb = b.startsWith('+');
  if (!fa && fb) {
    return calc(b, a);
  }

  const p = parse(a);
  const q = parse(b);
  const p1 = p[0] * q[1];
  const q1 = p[1] * q[0];
  const r = p[1] * q[1];

  if ((fa && fb) || (!fa && !fb)) {
    const f = p1 + q1;
    const c = gcd(f, r);
    return `${a[0]}${f / c}/${r / c}`;
  }

  const f = Math.abs(p1 - q1);
  const c = gcd(f, r);
  return `${q1 > p1 ? '-' : '+'}${f / c}/${r / c}`;
}

export function fractionAddition(expression: string): string {
  let res: string = '';
  let i: number = 0;

  while (i < expression.length) {
    let j = i + 1;
    while (j < expression.length && expression[j] !== '+' && expression[j] !== '-') {
      j++;
    }

    let numString = expression.slice(i, j);

    if (!numString.startsWith('+') && !numString.startsWith('-')) {
      numString = '+' + numString;
    }

    res = res ? calc(res, numString) : numString;
    i = j;
  }

  return res.startsWith('+') ? res.slice(1) : res;
}
