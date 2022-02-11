export default () => (store) => (next) => (action) => {
  if (action.type === 'COMPUTATION_PERFORMED') {
    console.log(`Computation performed:\n type: ${action.payload.computationType}`)
  }
  return next(action)
}
