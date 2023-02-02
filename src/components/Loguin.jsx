import React, { useState } from 'react'
import { Button, Form, Row, Col} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { changeUser } from '../redux/userSlice'

const Loguin = () => {
  const [name, setName] = useState("")
  const dispach = useDispatch()

  const handleLogin = () => {
    // console.log(name)
    dispach(changeUser(name))
    
  }

  return (
    <Form>
      <h1 className="mt-5">login</h1>
      <Row className="align-items-center">
        <Col sm={6}>
          <Form.Control type='text' placeholder='nome' onChange={e => setName(e.target.value)} />
        </Col>
        <Col sm={6}>
          <Button onClick={handleLogin} >Loguin</Button>
        </Col>
      </Row>
    </Form>
  )
}


export default Loguin