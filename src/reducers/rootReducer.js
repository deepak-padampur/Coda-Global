/**
 * @createdBy Chhanda charan Suna<2017ugcs028@nitjsr.ac.in>
 * @description this is the root reducer
 */

import { userReducer } from './userReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  userData: userReducer
})

export default rootReducer