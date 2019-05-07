import React from 'react';
import Link from 'next/link';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap'; 

const MyNavLink = (props) =>  {
    const { route, title} = props;

    return (
        <Link href={route}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {

        return (
            <div>
                <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
                    <NavbarBrand className="port-navbar-brand" href="/">Francisco Miranda</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="port-navbar-item">
                                <MyNavLink route="/" title="Home" />
                            </NavItem> 
                            <NavItem className="port-navbar-item">
                                <MyNavLink route="/portfolios" title="Portfolio" />
                            </NavItem > 
                            <NavItem className="port-navbar-item">
                                <MyNavLink route="/" title="Home" />
                            </NavItem> 
                            <NavItem className="port-navbar-item">
                                <MyNavLink route="https://github.com/fm-tech" title="Git" />
                            </NavItem>                 
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header; 
            
           
        



