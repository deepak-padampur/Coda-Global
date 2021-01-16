/**
 * @createdBy Chhanda charan Suna<2017ugcs028@nitjsr.ac.in>
 * @description this is the root reducer
 */

const initState = {
  users: [],
  isLoading: true
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        users: action.payload.users,
        isLoading: action.payload.isLoading

      }
    default:
      return state

  }

  return state;
}

export default rootReducer