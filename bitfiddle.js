const isNumeric = x => typeof x == 'number' || typeof x == 'bigint';

export const swizzle = (x, y) => {
  if (
    (typeof x == 'string' && !isNumeric(y)) ||
    (isNumeric(x) && typeof y != 'string')
  ) {
    throw new TypeError('swizzle() expects a string and a number or BigInt');
  }
  const source = isNumeric(x) ? x : y;

  // get an array of all (plus-two) "source bit offsets"
  const template = [...(typeof x == 'string' ? x : y)
    .replace(/[^0-9a-z]/ig, '')].map(x => parseInt(x, 36));

  let swizzled = template.length > 32 ? 0n : 0;
  for (const offset of template) {
    swizzled <<= 1;
    if (offset > 1) {
      swizzled |= (source >> (offset - 2)) & 1;
    } else if (offset == 1) {
      swizzled |= 1;
    }
  }

  return swizzled;
}

export default {swizzle};
