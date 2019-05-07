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
            <a className="nav-link">{title}</a>
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
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Francisco Miranda</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <MyNavLink route="/" title="Home" />
                            </NavItem> 
                            <NavItem>
                                <MyNavLink route="/portfolios" title="Portfolio" />
                            </NavItem> 
                            <NavItem>
                                <MyNavLink route="/" title="Home" />
                            </NavItem> 
                            <NavItem>
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
            
           
        



