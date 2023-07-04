export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
//   const { protocol, name } = endpoint;
//   let endpoint = `${endpoint.protocol}${endpoint.name}`;

  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Perform the API query for the given endpoint
  // ...

  return queryCount;
}
