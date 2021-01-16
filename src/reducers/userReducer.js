/**
 * @createdBy Chhanda charan Suna<2017ugcs028@nitjsr.ac.in>
 * @description this is the root reducer
 */
import _ from 'lodash'
const initState = {
  users: [],
  isLoading: true,
  selectedUser: []

}

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        users: action.payload.users,
        isLoading: action.payload.isLoading

      }
    case 'SET_SELECTED_DATA':
      return {
        ...state,
        selectedUser: action.payload.selectedUser
      }
    default:
      return state

  }

}

