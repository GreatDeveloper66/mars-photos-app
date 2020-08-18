import React, { useState } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { URL } from './EnvVars'
import fetch from 'isomorphic-fetch'

export default function Login() {
        const handleSubmit = () => {
            event.preventDefault()
            props.history.push('/')
        }
        return (
            <Container>
                <Row d-flex="justify-content-center">
                    <Col>
                    </Col>
                    <Col xs={12} sm={4} lg={3} d-flex="justify-content-center">
                    <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a onClick={() => props.history.push('/register')}>password?</a>
                </p>
            </form>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        )
}