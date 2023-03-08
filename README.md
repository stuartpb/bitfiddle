# bitfiddle

A simple toolkit for "bit-fiddling" operations

## swizzle

A function that takes a string and a number and returns a new number or [BigInt][] described by the bits in positions described by the string, in terms of 2-based little-endian indexing: `0` and `1` represent a literal `0` or `1`.

[BigInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

Note that characters here are in [parseInt][]'s "base-36" order, ie. positions beyond `9` are described alphabetically, skipping no letters (not even `I`,`l`, or `O` as in [Douglas Crockford's Base32][cb32]).

[parseInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[cb32]: https://www.crockford.com/base32.html

In other words, the bits of a 32-bit value (right-justified) are counted thus:

```
XWVUTSRQ PONMLKJI HGFEDCBA 98765432
```

For convenience, you *may* use non-alphanumeric characters such as spaces to separate bit destination positions in the template string.

### Example

Converting an 8-bit octet value into a 24-bit RGB value using `rgbirgbi` bit order:

```js
const color = swizzle(byte, '95629562 84628462 73627362');
                          // rriirrii ggiiggii bbiibbii
```
