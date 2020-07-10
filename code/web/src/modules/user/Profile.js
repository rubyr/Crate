// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link, Redirect } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import { white, black } from '../../ui/common/colors'


import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'
import { routeImage } from '../../setup/routes'
import user from '../../setup/routes/user'

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile
          <Link to={userRoutes.edit.path}>
            <Icon size={1} style={{ color: black, display: 'inline', marginLeft: '10px' }}>mode_edit</Icon>
          </Link>
        </H3>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        {props.user.details ? 
          <>
            <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>
            <p style={{ color: grey2, marginBottom: '0.5em' }}>{props.user.details.email}</p>
            <p style={{ color: grey2, marginBottom: '3em' }}>{props.user.details.address}</p>
            <img src={routeImage + props.user.details.image} alt={props.user.details.name} style={{ width: 400 }}/>
            <p style={{ color: black, marginBottom: '2em', marginTop: '2em' }}>{props.user.details.bio}</p>
          </> : <Redirect to={user.login.path} />
        }
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
