export default function groceriesList() {
  const x = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const newMap = new Map();
  x.forEach((element) => {
    newMap.set(...element);
  });
  return (newMap);
}
