export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const newViesInt8 = new Int8Array(buffer);
  newViesInt8[position] = value;
  return (buffer);
}
