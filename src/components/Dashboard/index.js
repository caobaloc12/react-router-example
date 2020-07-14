import React from "react"
import { Link, Switch, Redirect } from "react-router-dom"
import { Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import { renderRoutes } from "react-router-config"

const Dashboard = ({ route }) => {
  return (
    <>
      <Helmet titleTemplate='%s - React App'>
        <title>Dashboard</title>
      </Helmet>
      <Row>
        <Col xs='12' lg='2'>
          <ul>
            <li>
              <Link to='/dashboard/users'>Users</Link>
            </li>
            <li>
              <Link to='/dashboard/projects'>Projects</Link>
            </li>
          </ul>
        </Col>
        <Col xs='12' lg='8'>
          <Switch>
            <Redirect exact from='/dashboard' to='/dashboard/projects' />
            {renderRoutes(route.routes)}
          </Switch>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
