export const setFetchedUserData = (res) => {
  return {
    type: 'SET_USER_DATA',
    payload: {
      users: res,
      isLoading: false
    }
  }
}