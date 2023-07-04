export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const newViesInt8 = new Int8Array(buffer);
  try {
    newViesInt8[position] = value;
  } catch (error) {
    throw new Error('Position outside range')
  }
  return (buffer);
}
