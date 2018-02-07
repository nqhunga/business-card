import React from 'react'
import { CollapseEx, NavbarEx, NavbarTogglerEx, NavbarBrandEx, NavEx, NavItemEx, LinkEx } from './Navigation.style';

class Navigation extends React.Component {
  constructor(props) {
      super(props);

      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }

    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
    render() {
      return (
        <div>
          <NavbarEx color="faded" light>
            <NavbarBrandEx className="mr-auto"><LinkEx to="/">Main Page</LinkEx></NavbarBrandEx>
            <NavbarTogglerEx onClick={this.toggleNavbar} className="mr-2" />
            <CollapseEx isOpen={!this.state.collapsed} navbar>
              <NavEx navbar>
                <NavItemEx>
                  <LinkEx to="/add">Add New</LinkEx>
                </NavItemEx>
                <NavItemEx>
                  <LinkEx to="/card">Display Cards</LinkEx>
                </NavItemEx>
              </NavEx>
            </CollapseEx>
          </NavbarEx>
        </div>
      );
    }
}

export default Navigation;
