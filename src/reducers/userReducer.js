/**
 * @createdBy Chhanda charan Suna<2017ugcs028@nitjsr.ac.in>
 * @description this is the root reducer
 */
import _ from 'lodash'
const initState = {
  users: [],
  isLoading: true,
  selectedUsers: [],
  selectedUserData: []

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
        selectedUsers: action.payload.selectedUsers
      }
    case 'SET_SELECTED_USER_DATA':
      return {
        ...state,
        selectedUserData: action.payload.selectedUserData
      }
    default:
      return state

  }

}

