import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {FormInputs} from '../../components/FormInputs/FormInputs.jsx';
import Button from '../CustomButton/CustomButton.jsx';
import './DepositBtcModal.css';

class DepositBtcModal extends Component {
    render() {
        var buttonStyle = {
            color: 'white',
            marginLeft: '30px',
            WebkitTransition: 'all', // note the capital 'W' here
            msTransition: 'all' // 'ms' is the only lowercase vendor prefix
          };
          
        return (
            <Col md={6} id="depositBtcModal">
                <Row className="header">
                    <Col md={11}>
                        <h3>Deposit BTC account</h3>
                    </Col>
                    <Col md={1}>
                        <h3><a className="modalClose" onClick={this.props.onClose}>×</a></h3>
                    </Col>
                </Row>
                <Row className="content">
                    <Row id="qrcode">
                    </Row>
                    <Row>
                        <FormInputs
                            ncols = {["col-md-12"]}
                            proprieties = {[
                                {
                                    type : "text",
                                    bsClass : "form-control",
                                    disabled : true
                                }
                            ]}
                        />
                    </Row>
                    <Row>
                        <h5>Send BTC on this cryptoaddress or scan QR-code with your mobile BTC Wallet</h5>
                    </Row>
                </Row>
                <Row className="footer">
                    <Button
                        bsStyle="default"
                        fill
                        pullRight
                        round
                        type="submit"
                        style={buttonStyle}
                        onClick={ this.props.onClose }
                    >
                    Cancel
                    </Button>
                    <Button
                        bsStyle="warning"
                        fill
                        pullRight
                        round
                        type="submit"
                    >
                    Copy Address
                    </Button>
                    
                </Row>
            </Col>
        );
  }
}

DepositBtcModal.propTypes = {
    
}

export default DepositBtcModal;
