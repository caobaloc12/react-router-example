import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"

const Home = React.lazy(() => import("./components/Home"))
const About = React.lazy(() => import("./components/About"))
const Contact = React.lazy(() => import("./components/Contact"))
const Dashboard = React.lazy(() => import("./components/Dashboard"))
const Users = React.lazy(() => import("./components/Dashboard/Users"))
const Projects = React.lazy(() => import("./components/Dashboard/Projects"))
const Account = React.lazy(() => import("./components/Account"))
const Login = React.lazy(() => import("./components/Auth/Login"))

export const routes = [
  {
    path: "/",
    key: "HOME",
    exact: true,
    restricted: false,
    label: "Home",
    component: Home,
  },
  {
    path: "/about",
    key: "ABOUT",
    exact: true,
    restricted: false,
    label: "About",
    component: About,
  },
  {
    path: "/contact",
    key: "CONTACT",
    exact: true,
    restricted: false,
    label: "Contact",
    component: Contact,
  },
  {
    path: "/account",
    key: "ACCOUNT",
    exact: true,
    restricted: true,
    component: Account,
  },
  {
    path: "/dashboard",
    key: "DASHBOARD",
    restricted: true,
    label: "Dashboard",
    component: Dashboard,
    routes: [
      {
        path: "/dashboard/users",
        restricted: false,
        key: "DASHBOARD_USERS",
        label: "Users",
        component: Users,
      },
      {
        path: "/dashboard/projects",
        restricted: false,
        key: "DASHBOARD_PROJECTS",
        label: "Projects",
        component: Projects,
      },
    ],
  },
  {
    path: "/sign-in",
    key: "LOGIN",
    component: Login,
  },
]

export const renderRoutes = (
  routes,
  isAuthenticated,
  authPath,
  extraProps = {},
  switchProps = {}
) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            if (
              !route.restricted ||
              isAuthenticated ||
              route.path === authPath
            ) {
              return (
                <route.component {...props} {...extraProps} route={route} />
              )
            }
            const redirectTo = authPath ? authPath : "/sign-in"
            return (
              <Redirect
                to={{ pathname: redirectTo, state: { from: props.location } }}
              />
            )
          }}
        />
      ))}
    </Switch>
  ) : null
