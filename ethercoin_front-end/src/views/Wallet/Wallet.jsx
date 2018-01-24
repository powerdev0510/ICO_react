import React, { Component } from 'react';

import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import Card from 'components/Card/Card.jsx';
import {thArray, tdArray} from 'variables/Variables.jsx';
import DepositBtcModal from '../../elements/Modal/DepositBtcModal.jsx'
import ModalBack from '../../elements/Modal/ModalBack.jsx'

class TableList extends Component {
    state = {
        showModal: false,
        showModalBack: false
    }

    handleClickDepositBtc = () => {
        this.setState({showModal: true});
        this.setState({showModalBack: true});
    }

    handleCloseBtcModal = () => {
        this.setState({showModal: false});
        this.setState({showModalBack: false});
        console.log('close');
    }

    componentDidMount() {
        
        
    }

    render() {
        
        const { handleClickDepositBtc, handleCloseBtcModal } = this;
        const { showModal, showModalBack } = this.state;

        return (
            <div>
                <div className="content">
                    <Grid fluid>
                        <Row>
                            <Col md={6}>
                                <Card
                                    title="Bitcoin"
                                    content={
                                        <Button
                                            bsStyle="warning"
                                            fill
                                            round
                                            type="submit"
                                            onClick={handleClickDepositBtc}
                                        >
                                        Deposit Bitcoin
                                        </Button>
                                    }
                                />
                            </Col>
                            <Col md={6}>
                                <Card
                                    title="Ether Coin"
                                    content={
                                        <Button
                                            bsStyle="warning"
                                            fill
                                            round
                                            disabled
                                            type="submit"
                                        >
                                        Coming soon...
                                        </Button>
                                    }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Card
                                    title="Bitcoin"
                                    category="Withdraw BTC"
                                    ctTableFullWidth ctTableResponsive
                                    content={
                                        <form id="btc_wallet">
                                            <FormInputs
                                                ncols = {["col-md-11"]}
                                                proprieties = {[
                                                    {
                                                    label : "To Address",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "To Address",
                                                    disabled : false
                                                    }
                                                ]}
                                            />
                                            <FormInputs
                                                ncols = {["col-md-11"]}
                                                proprieties = {[
                                                    {
                                                    label : "Amount",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "Amount",
                                                    disabled : false
                                                    }
                                                ]}
                                            />
                                            <FormInputs
                                                ncols = {["col-md-11"]}
                                                proprieties = {[
                                                    {
                                                    label : "Amount Sent",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "Amount Sent",
                                                    disabled : false
                                                    }
                                                ]}
                                            />
                                            <FormInputs
                                                ncols = {["col-md-11"]}
                                                proprieties = {[
                                                    {
                                                    label : "Password",
                                                    type : "password",
                                                    bsClass : "form-control",
                                                    placeholder : "Password",
                                                    disabled : false
                                                    }
                                                ]}
                                            />
                                            <Button
                                                bsStyle="warning"
                                                fill
                                                round
                                                type="submit"
                                            >
                                                Withdraw Bitcoin
                                            </Button>
                                            <div className="clearfix"></div>
                                        </form>
                                    }
                                />
                            </Col>
                            <Col md={6}>
                                <Card
                                    title="EtherCoin"
                                    category="Withdraw ETCC"
                                    ctTableFullWidth ctTableResponsive
                                    content={
                                        <form id="ethercoin_wallet">
                                            <FormInputs
                                                ncols = {["col-md-11"]}
                                                proprieties = {[
                                                    {
                                                    label : "To Address",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "To Address",
                                                    disabled : true
                                                    }
                                                ]}
                                            />
                                            <FormInputs
                                                ncols = {["col-md-11"]}
                                                proprieties = {[
                                                    {
                                                    label : "Amount",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "Amount",
                                                    disabled : true
                                                    }
                                                ]}
                                            />
                                            <FormInputs
                                                ncols = {["col-md-11"]}
                                                proprieties = {[
                                                    {
                                                    label : "Amount Sent",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "Amount Sent",
                                                    disabled : true
                                                    }
                                                ]}
                                            />
                                            <FormInputs
                                                ncols = {["col-md-11"]}
                                                proprieties = {[
                                                    {
                                                    label : "Password",
                                                    type : "password",
                                                    bsClass : "form-control",
                                                    placeholder : "Password",
                                                    disabled : true
                                                    }
                                                ]}
                                            />
                                            <Button
                                                bsStyle="warning"
                                                fill
                                                disabled
                                                round
                                                type="submit"
                                            >
                                            Coming Soon
                                            </Button>
                                            <div className="clearfix"></div>
                                        </form>
                                    }
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
                { showModalBack && <ModalBack onClose={handleCloseBtcModal}/> }
                { showModal && <DepositBtcModal onClose={handleCloseBtcModal}/> }
            </div>
        );
    }
}

export default TableList;
