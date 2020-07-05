// Imports
import React from "react" // required for jsx
import PropTypes from "prop-types" // proptypes
import { connect } from "react-redux" // redux connector function
import { Helmet } from "react-helmet" // helmet is a <head> manager, where nested components override higher level ones
import { Link } from "react-router-dom" // redirect link

// UI Imports
import { Grid, GridCell } from "../../ui/grid"
import { H3, H4 } from "../../ui/typography"
import Button from "../../ui/button"
import { grey, grey2 } from "../../ui/common/colors"

// App Imports
import userRoutes from "../../setup/routes/user" // used to redirect to subscriptions page
import { logout } from "./api/actions" // logout function for logout button

/**
 * @typedef User
 * @property {object} details
 * @property {string} details.role
 * @property {string} details.name
 * @property {string} details.email
 * @description user data object, holds basic information about the user
 */

// Component
/**
 * @function Profile
 * @description User profile react component
 * @param {object} props
 * @param {User} props.user
 * @param {() => () => void} props.logout
 * @returns {React.ReactNode}
 */
const Profile = (props) => (
  <div>
    {/* Helmet header manager - set title of page */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: "2em", textAlign: "center" }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    {/* Main Page */}
    <Grid>
      <GridCell style={{ padding: "2em", textAlign: "center" }}>
        {/* User Name */}
        <H4 style={{ marginBottom: "0.5em" }}>{props.user.details.name}</H4>
        {/* User Email */}
        <p style={{ color: grey2, marginBottom: "2em" }}>
          {props.user.details.email}
        </p>
        {/* User Subscriptions link */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>
        {/* User Logout button */}
        <Button
          theme="secondary"
          onClick={props.logout}
          style={{ marginLeft: "1em" }}
        >
          Logout
        </Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
Profile.propTypes = {
  // User object, holds user data like name, email, and so on
  user: PropTypes.object.isRequired, 
  // logout function, defined in /api/actions.js
  logout: PropTypes.func.isRequired,
}

// Component State
/**
 * @description Redux state function
 * @param {object} state 
 * @param {User} state.user
 */
function profileState(state) {
  return {
    // redux state manager holds current user details
    user: state.user,
  }
}

export default connect(profileState, { logout })(Profile)
