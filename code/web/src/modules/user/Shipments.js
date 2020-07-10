// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import { white, black } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'


const Shipments = (props) => (
    <div>
      <Grid alignCenter={true} style={{ padding: '2em' }}>
        {/* SEO */}
        <Helmet>
          <title> My Subscriptions - Crate</title>
        </Helmet>

        {/* Left Content - Shipment Cards */}
        <GridCell>

        </GridCell>

        {/* Right Content - Shipment Card Details */}
        <GridCell>
  
        </GridCell>

      </Grid>
    </div>
)

// Component Properties
Shipments.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, {})(Shipments)
