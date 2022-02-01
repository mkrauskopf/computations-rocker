const config = (state = {}, action) => {
  switch (action.type) {
    case 'MODULE_COLORS':
      return {
        colors: action.payload,
        ...state,
      }
    default:
      return state
  }
}

export default { config }
