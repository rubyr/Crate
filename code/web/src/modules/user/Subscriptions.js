// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import { getListByUser } from '../subscription/api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import SubscriptionItem from '../subscription/Item'

// Component
class Subscriptions extends PureComponent {

  // Runs on server only for SSR
  // This function is a dynamic way of fetching methods from the global store.  
  // In this case, we are accessing the getListByUser method from the store and
  // making it accessible to this component through its props.
  static fetchData({ store }) {
    return store.dispatch(getListByUser())
  }

  // Runs on client only
  // This lifecycle method is invoked once the component is mounted.  After the
  // component mounts, we are invoking the function getListByUser which will 
  // return to us, the list of subscriptions this user has.  It will then
  // update the global state with this information.
  componentDidMount() {
    this.props.getListByUser()
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>My Subscriptions - Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">My subscriptions</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>The crates you are subscribed to are listed here. You can
              cancel
              anytime.</p>
          </GridCell>
        </Grid>

        {/* Product list */}
        <Grid>
          {/* In this GridCell, we are first checking if the subscriptions are loading, if they are it will render
          the loading component, if not perform another check.  The second check is if the user has one or more
          subscriptions, if yes then map over those subscriptions to display each using the SubscriptionItem
          component inside of a div.  If user has zero subscriptions, render the EmptyMessage component informing them*/}
          <GridCell>
            {
              this.props.subscriptions.isLoading
                ? <Loading/>
                : this.props.subscriptions.list.length > 0
                    ? this.props.subscriptions.list.map(subscription => (
                        <div key={subscription.id} style={{ margin: '2em', float: 'left' }}>
                          <SubscriptionItem subscription={subscription} />
                        </div>
                      ))
                    : <EmptyMessage message="You are not subscribed to any crates yet." />
            }
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
// PropTypes are used to provide data type checks for props used in this component.  Will provide warnings
// when the PropType is incorrect or isn't present when that prop is required.
Subscriptions.propTypes = {
  subscriptions: PropTypes.object.isRequired,
  getListByUser: PropTypes.func.isRequired
}

// Component State
// The function below allows this component to access the subscriptions property from the global state.
// Even though we called getListByUser in this component, we are not accessing the return of that function
// directly, but instead through the global state that the function updates.
function subscriptionsState(state) {
  return {
    subscriptions: state.subscriptionsByUser
  }
}

export default connect(subscriptionsState, { getListByUser })(Subscriptions)
