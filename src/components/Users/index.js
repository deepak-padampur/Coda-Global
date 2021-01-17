/**
 * @createdBy Chhanda charan Suna<2017ugcs028@nitjsr.ac.in>
 * @description render the fetched data
 */

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Input, Card } from 'antd';
import { setFetchedUserData } from '../../actions/userActions'
import UsersTable from '../UsersTable'
import SelectedUsers from '../SelectedUsers'
import url from '../../config'

const Users = () => {
  const { users = [], isLoading } = useSelector(state => state.userData)
  const [dataSource, setDataSource] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch(
          setFetchedUserData(res)
        )
      }).catch(err => {
        console.log(err)
      })


  }, [])
  useEffect(() => {
    if (users.length) {
      const tempUserList = users.map(user => ({
        key: user.Name,
        ...user,
        meta: `${user.Name} ${user.Price} ${user.Bet}`,
      }))
      setDataSource([...tempUserList])
    }


  }, [users])

  const filterUsersFromSearchQuery = query => {
    const tempUserList = users.map(user => ({
      key: user.Name,
      ...user,
      meta: `${user.Name} ${user.Price} ${user.Bet}`,
    }))
    if (query.length === 0) {

      setDataSource([...tempUserList])
    }
    if (query.length !== 0) {

      setDataSource(
        tempUserList.filter(user => user.meta.toLowerCase().includes(query.toLowerCase())),
      )
    }

  }


  return (<>
    <h1>Double or Nothing</h1>
    <Row>
      <Col span={18} push={6}>
        <Card>
          <div className="card-header px-1 px-md-2">
            <Input.Search
              placeholder="Search by Name"
              size="large"
              className="w-60 mb-2"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value)
                filterUsersFromSearchQuery(e.target.value)
              }}
            />

          </div>
          <div className="card-body">
            <UsersTable dataSource={dataSource} />
          </div>


        </Card>
      </Col>
      <Col span={6} pull={18}>
        <SelectedUsers />
      </Col>
    </Row>

  </>)
}

export default Users