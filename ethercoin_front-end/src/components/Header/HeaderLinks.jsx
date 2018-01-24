import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class HeaderLinks extends Component{
    render(){
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">5</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
            <div>
                
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">1 BTC = 14081.20 USD</NavItem>
                    <NavItem eventKey={2} href="#">1 LBR = 1.00 USD</NavItem>
                    <NavItem eventKey={3} href="#">1 LBR = 0.00007102 BTC</NavItem>
                    <NavItem eventKey={4} href="#">Asai Yuki</NavItem>
                    <NavItem eventKey={5} href="/#/login">Log Out</NavItem>
                </Nav>
            </div>
        );
    }
}

export default HeaderLinks;
