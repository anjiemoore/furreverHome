import React, { Component } from 'react';
import { Link } from 'react-router-dom';
  import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item as={ Link } to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            as={ Link }
            to='/messages'
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={ Link }
            to='/surrender'
            name='surrender'
            active={activeItem === 'surrender'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={ Link }
            to='/adopt'
            name='adopt'
            active={activeItem === 'adopt'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              as={ Link }
              to='/login'
              name='Login'
              active={activeItem === 'Login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default NavBar;