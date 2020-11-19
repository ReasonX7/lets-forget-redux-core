const initialState = {
  name: '',
  surname: '',
  status: '',
  email: ''
}

const update = (state, action) => {
  return {
    ...state,
    ...action.payload
  }
}

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE': return update(state, action)
    default: return state
  }
}

export default user
