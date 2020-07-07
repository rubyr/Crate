// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import H4 from '../../ui/typography/H4'
import { Input, Textarea } from '../../ui/input'
import { white } from "../../ui/common/colors"

// App Imports
import user from '../../setup/routes/user'
import { routeImage } from "../../setup/routes"
import { renderIf } from '../../setup/helpers'
import { upload, messageShow, messageHide } from '../common/api/actions'
import Profile from './Profile'

// Component
class ProfileEditor extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      user: {
        ...props.user.details
      },
    }
  }

  onChange = (event) => {
    let user = {...this.state.user}
    user[event.target.name] = event.target.value

    this.setState({
      user
    })
  }

  onSubmit = (event) => {
    // event.preventDefault()

    // this.setState({
    //   isLoading: true
    // })

    // this.props.messageShow('Saving product, please wait...')

    // // Save product
    // this.props.productCreateOrUpdate(this.state.product)
    //   .then(response => {
    //     this.setState({
    //       isLoading: false
    //     })

    //     if (response.data.errors && response.data.errors.length > 0) {
    //       this.props.messageShow(response.data.errors[0].message)
    //     } else {
    //       this.props.messageShow('Product saved successfully.')

    //       // this.props.history.push(admin.productList.path)  
    //     }
    //   })
    //   .catch(error => {
    //     this.props.messageShow('There was some error. Please try again.')

    //     this.setState({
    //       isLoading: false
    //     })
    //   })
    //   .then(() => {
    //     window.setTimeout(() => {
    //       this.props.messageHide()
    //     }, 5000)
    //   })
  }

  onUpload = (event) => {
    this.props.messageShow('Uploading file, please wait...')

    this.setState({
      isLoading: true
    })

    let data = new FormData()
    data.append('file', event.target.files[0])

    // // Upload image
    this.props.upload(data)
      .then(response => {
        if (response.status === 200) {
          this.props.messageShow('File uploaded successfully.')

          let user = {...this.state.user}
          user.image = `/images/uploads/${ response.data.file }`

          this.setState({
            user
          })
        } else {
          this.props.messageShow('Please try again.')
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error. Please try again.')
      })
      .then(() => {
        this.setState({
          isLoading: false
        })

        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Edit Profile - Crate</title>
        </Helmet>

        {/* Page Content */}
        <div>
          {/* Top actions bar */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell style={{ textAlign: 'left' }}>
              <Link to={user.profile.path}>
                <Button><Icon size={1.2}>arrow_back</Icon> Back</Button>
              </Link>
            </GridCell>
          </Grid>

          {/* Product list */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell>
              <H4 font="secondary" style={{ marginBottom: '1em', textAlign: 'center' }}>
                Edit Profile
              </H4>

              {/* Form */}
              <form onSubmit={this.onSubmit}>
                <div style={{ width: '25em', margin: '0 auto' }}>
                  {/* Name */}
                  <Input
                    type="text"
                    fullWidth={true}
                    placeholder="Name"
                    required="required"
                    name="name"
                    autoComplete="off"
                    value={this.state.user.name}
                    onChange={this.onChange}
                  />

                  {/* Description */}
                  <Textarea
                    fullWidth={true}
                    placeholder="Bio"
                    required="required"
                    name="bio"
                    value={this.state.user.bio}
                    onChange={this.onChange}
                    style={{ marginTop: '1em' }}
                  />

                  <Input
                    type="email"
                    fullWidth={true}
                    placeholder="Email"
                    required="required"
                    name="email"
                    value={this.state.user.email}
                    onChange={this.onChange}
                  />

                  <Input
                    type="text"
                    fullWidth={true}
                    placeholder="Address"
                    required="required"
                    name="address"
                    value={this.state.user.address}
                    onChange={this.onChange}
                  />
                  
                  {/* Upload File */}
                  <div style={{ marginTop: '1em' }}>
                    <input
                      type="file"
                      onChange={this.onUpload}
                      required={false}
                    />
                  </div>

                  {/* Uploaded image */}
                  {renderIf(this.state.user.image !== '', () => (
                    <img src={routeImage + this.state.user.image} alt="User Image"
                         style={{ width: 200, marginTop: '1em' }}/>
                  ))}
                </div>

                {/* Form submit */}
                <div style={{ marginTop: '2em', textAlign: 'center' }}>
                  <Button type="submit" theme="secondary" disabled={this.state.isLoading}>
                    <Icon size={1.2} style={{ color: white }}>check</Icon> Save
                  </Button>
                </div>
              </form>
            </GridCell>
          </Grid>
        </div>
      </div>
    )
  }
}

// Component Properties
ProfileEditor.propTypes = {
}

// Component State
function profileEditorState(state) {
  return {
    user: state.user
  }
}

export default connect(profileEditorState, {
  upload,
  messageShow,
  messageHide
})(ProfileEditor)