import React, { useState } from "react" 
import { Container, Row, Col } from 'react-bootstrap' 
import { URL } from './EnvVars'
import fetch from 'isomorphic-fetch'
import { propTypes } from "react-bootstrap/esm/Image"
          
export default function Register(props){
    const fetchURL = `${URL}/register`
    const [ email, setEmail ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        props.history.push('/')
    }
    const handleSwitch = event => {
        event.preventDefault()
        props.history.push('/login')
    }
    const handleChangeFirstName = event => {setFirstName(event.target.value)}
    const handleChangeLastName = event => {setLastName(event.target.value)}
    const handleChangePassword = event => {setPassword(event.target.value)}
    const handleChangeEmail = event => {setEmail(event.target.value)}
   
    return (
        <Container>
            <Row d-flex="justify-content-center">
                <Col>
                </Col>
                <Col xs={12} sm={4} lg={3} d-flex="justify-content-center">
                <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" 
                    value={ firstName } onChange={ handleChangeFirstName }/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                    value={ lastName } onChange={ handleChangeLastName }/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    value={ email } onChange={ handleChangeEmail }/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    value={ password } onChange = { handleChangePassword }/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a onClick={handleSwitch}>sign in?</a>
                </p>
            </form>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
        
    )
}        
            