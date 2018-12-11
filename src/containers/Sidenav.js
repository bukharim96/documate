import React from 'react'
import RESSheet from 'ressheet'
import logo from '../components/logo'

const itemStyles = {
  display: 'block',
  marginTop: 5,
  fontSize: 16,
  fontWeight: 600
}

const subnavItemStyles = {
  position: 'relative',
  left: -25,
  listStyle: 'none'
}

export default class Sidebar extends React.Component {
  state = {}

  static Label = class extends React.Component {
    render() {
      return (
        <h4 style={{
          color: '#ccc',
          fontWeight: 300,
          textTransform: 'uppercase',
          fontSize: 14
        }} {...this.props} />
      )
    }
  }

  static Logo = class extends React.Component {
    render() {
      return (
        <div style={{margin: '15px 0 25px', textAlign: 'center'}}>
          <img src={logo} width={100} title="Documate Homepage" />
        </div>
      )
    }
  }
  
  static Item = class extends React.Component {
    state = {
      isCurrentSubnavOpen: false,
      navItemIcon: 'right'
    }
    
    toggleNavItemSubnav(e) {
      e.preventDefault()
      if (this.state.isCurrentSubnavOpen == false) {
        this.setState({
          isCurrentSubnavOpen: true,
          navItemIcon: 'down'
        })
      } else if (this.state.isCurrentSubnavOpen == true) {
        this.setState({
          isCurrentSubnavOpen: false,
          navItemIcon: 'right'
        })
      }
    }

    render() {
      return (
        <>
          <a onClick={this.toggleNavItemSubnav.bind(this)} href={this.props.href || '/'} style={{...itemStyles}}>
            {/* <i style={{marginRight: 7}} className={'fas fa-angle-' + this.state.navItemIcon} /> */}
            {this.props.children}
          </a>
          {
            this.state.isCurrentSubnavOpen && (
              <div className="subnav">
                <ul style={{listStylePosition: 'outside'}}>
                  {
                    typeof this.props.subnav === 'object' && this.props.subnav.map((subnav, i) => (
                      <li className="subnav-item" style={subnavItemStyles} key={'_subNavItemLink_' + i}>
                        <a href={subnav.link}>{subnav.text}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            )
          }
        </>
      )
    }
  }

  render() {
    let sidenavStyles = new RESSheet(this.props, {
      default: {
        backgroundColor: '#222831',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: 300,
        height: '100vh',
        padding: 20,
        fontSize: 15,
        overflowY: 'auto'
      }
    })
  
    return (
      <aside id="Sidenav" style={sidenavStyles} {...this.props} />
    )
  }
}