import React, { useState } from "react" 
import { Container, Row, Col } from 'react-bootstrap' 
import { URL } from './EnvVars'
import fetch from 'isomorphic-fetch'
import { propTypes } from "react-bootstrap/esm/Image"
          
export default function Register(){
    return (
        <Container>
            <Row d-flex="justify-content-center">
                <Col>
                </Col>
                <Col xs={12} sm={4} lg={3} d-flex="justify-content-center">
                <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a onClick={() => props.history.push('/login')}>sign in?</a>
                </p>
            </form>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
        
    )
}        
            