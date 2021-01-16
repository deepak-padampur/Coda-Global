/**
 * @createdBy Chhanda charan Suna<2017ugcs028@nitjsr.ac.in>
 * @description render the fetched data
 */

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import url from '../../config'

const Users = () => {
  const users = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(users)
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'FETCH_DATA',
          payload: {
            users: res,
            isLoading: false
          }
        })
      }).catch(err => {
        console.log(err)
      })


  }, [])
  return (<>
    <h1>User data will go here</h1>

  </>)
}

export default Users