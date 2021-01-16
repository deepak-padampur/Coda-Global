import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { Table, Checkbox } from 'antd'
// import { Link, useLocation, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

/**
 * @author Chhanda charan Suna <2017ugcs028@nitjsr.ac.in>
 * @author [Chhanda charan Suna](https://github.com/deepak-padampur)
 *
 */


function UsersTable({ dataSource }) {
  const [name, setName] = useState([])
  const dispatch = useDispatch()


  useEffect(() => {

    dispatch({
      type: 'SET_SELECTED_DATA',
      payload: {
        selectedUser: name
      }

    })

  }, [name])


  let columns = [
    {
      key: 'Name',
      title: 'Select',
      dataIndex: 'Name',
      render: (Name) => (
        <Checkbox onChange={e => setName([...name, Name])} />
      )

    },
    {
      key: 'Profile Image',
      title: 'Profile Image',
      dataIndex: 'Profile Image',

      render: (ProfileImage) => (
        <img style={{ maxWidth: '100%' }} src={ProfileImage} alt="Avatar" />

      ),
      width: '10%',
    },
    {
      key: 'Name',
      title: 'Name',
      dataIndex: 'Name',
    },
    {
      key: 'Bet',
      title: 'Bet',
      dataIndex: 'Bet',
    },
    {
      key: 'Price',
      title: 'Price',
      dataIndex: 'Price',
    },
  ]
  return (
    <Table
      scroll={{ x: false, y: false }}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        pageSizeOptions: ['5', '10', '15', '20'],
        showSizeChanger: true,
      }}
    />
  )
}

export default UsersTable