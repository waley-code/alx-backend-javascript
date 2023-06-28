export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    const c = ((error).message).toLowerCase();
    queue.push((`Error: ${c}`));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
