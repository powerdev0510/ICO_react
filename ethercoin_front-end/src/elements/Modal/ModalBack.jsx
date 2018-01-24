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

class ModalBack extends Component {
    render() {
      return (
        <Row id="ModalBack">
        </Row>
      ); 
    }
}


export default ModalBack;
