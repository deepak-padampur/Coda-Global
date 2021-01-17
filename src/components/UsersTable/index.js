import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { Table, Checkbox, Card, Spin } from 'antd'
// import { Link, useLocation, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

/**
 * @author Chhanda charan Suna <2017ugcs028@nitjsr.ac.in>
 * @author [Chhanda charan Suna](https://github.com/deepak-padampur)
 *
 */


Array.prototype.remove = function () {
  let what, a = arguments, L = a.length, ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};


function UsersTable({ dataSource }) {
  const [name, setName] = useState([])
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch({
      type: 'SET_SELECTED_DATA',
      payload: {
        selectedUsers: name
      }

    })

  }, [name])


  let columns = [
    {
      key: 'Name',
      title: 'Select',
      dataIndex: 'Name',
      render: (Name) => (
        <Checkbox onChange={e => {
          if (e.target.checked) {
            if (!name.includes(Name)) {
              setName([...name, Name])
            }
          } else {
            name.remove(Name)
            setName([...name])

          }
        }}
          checked={name.includes(Name)}
        />
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
      sorter: (a, b) => a.Bet - b.Bet,
    },
    {
      key: 'Price',
      title: 'Price',
      dataIndex: 'Price',
      sorter: (a, b) => a.Price - b.Price,
    },
  ]
  return (
    <Card title="User List" bordered={false}>
      {dataSource.length ? (<Table
        scroll={{ x: false }}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSizeOptions: ['5', '10', '15', '20'],
          showSizeChanger: true,
        }}
      />) : (<Spin />)}
    </Card>
  )
}

export default UsersTable