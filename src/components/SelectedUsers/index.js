import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import { List, Avatar, Row, Col, Button } from 'antd';


const SelectedUsers = () => {
  const dispatch = useDispatch()
  const selectedUserList = useSelector(state => _.get(state, 'userData.selectedUsers'))
  const users = useSelector(state => _.get(state, 'userData.users'))

  const [selectedUserData, setSelecteduserData] = useState([])

  useEffect(() => {
    if (selectedUserList.length) {
      setSelecteduserData((users.filter((user) => selectedUserList.includes(user.Name))))

    } else {
      setSelecteduserData([])
    }
  }, [selectedUserList])


  useEffect(() => {
    dispatch({
      type: 'SET_SELECTED_USER_DATA',
      payload: {
        selectedUserData
      }
    })

  }, [selectedUserData])
  return (
    <div>
      <h3>{selectedUserData.length} user selected</h3>
      <List
        itemLayout="horizontal"
        dataSource={selectedUserData}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={_.get(item, 'Profile Image')} />}
              title={item.Name}
              description={
                <>
                  <Row>
                    <Col span={18} push={6}>
                      Bet:{_.get(item, 'Bet')}
                    </Col>
                    <Col span={6} pull={18}>

                      Price:{_.get(item, 'Price')}
                    </Col>
                  </Row>
                </>

              }
            />
          </List.Item>
        )}
      />
      <hr />
      {selectedUserData.length ? (<Button>Start Now</Button>) : null}

    </div>
  );

}

export default SelectedUsers








