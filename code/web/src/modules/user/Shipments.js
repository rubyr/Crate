// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H2, H3, H4, H5 } from '../../ui/typography'
import Card from '../../ui/card/Card'
import { white, black, grey, grey2 } from '../../ui/common/colors'

// App Imports
import {getShipmentsByUser} from '../user/api/actions'
import Loading from "../common/Loading";

class Shipments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    }
  }

  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getShipmentsByUser())
  }

  // Runs on client only
  componentDidMount() {
    this.props.getShipmentsByUser()
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title> My Shipments - Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Your Shipments</H3>
            <p style={{ marginTop: '1em', color: grey2 }}>View all your past/future shipments, the items it contains, and which items you kept!</p>
          </GridCell>
        </Grid>

        <Grid>
        
          {/* Left Content - Shipment Cards */}
          <GridCell alignCenter={true} justifyCenter={true} style={{maxWidth: '30em'}}>
            <div style={{height: '100vh', borderRight: '2px solid black'}}>

              {this.props.shipments.isLoading ? <Loading /> : 
               this.props.shipments.list &&
                this.props.shipments.list.map(({crate:{name}, deliveryDate, id}) => {
                  let reformattedDate = new Date(parseInt(deliveryDate)).toDateString()
                  return (
                    <Card key={id} style={{ alignSelf: 'center', width: '20em', backgroundColor: white, margin: '2em', textAlign: 'center', padding: '2em' }}>
                      <H4 style={{ color: black}}>{name}</H4>
                      <p style={{ marginTop: '2em' }}>{reformattedDate}</p>
                    </Card>
                  )
                })
              }
            </div>
          </GridCell>

          {/* Right Content - Shipment Card Details */}
          <GridCell style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '50em', height: '25em', marginTop: '1em', padding: '1em', backgroundColor: white }}>
              <H2 style={{border: '1px solid black', marginBottom: '0.3em', width: '100%', textAlign: 'center'}}>Clothes for Men</H2>
              <p style={{ color: black, width: '100%', textAlign: 'center' }}>(Arrival Date <u>January 3rd</u>)</p>
              <H3 style={{ paddingLeft: '1em', color: black, marginTop: '1em'}}>Items In This Order:</H3>
              <ul style={{marginTop: '2em'}}>
                <li style={{ paddingLeft: '3em', marginTop: '1em' }}>Cool Hat 🧢</li>
                <li style={{ paddingLeft: '3em', marginTop: '1em' }}>Cool Pants 👖</li>
                <li style={{ paddingLeft: '3em', marginTop: '1em' }}>Cool Shirt 👔</li>
                <li style={{ paddingLeft: '3em', marginTop: '1em' }}>Cool Watch ⌚️</li>
              </ul>
            </Card>
          </GridCell>

        </Grid>
      </div>
    )
  }
}

// Component Properties
Shipments.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function shipmentsState(state) {
  return {
    user: state.user,
    shipments: state.shipments
  }
}

export default connect(shipmentsState, {getShipmentsByUser})(Shipments)
