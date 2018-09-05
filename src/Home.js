import React, { Component } from 'react';
import {
    Col, Row, Grid, Image
} from 'react-bootstrap';
import logo from './alok_mandliya.jpg';
import './App.css';



export class Home extends Component {

    render() {
        return (
            <div id="home">
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <Image src={logo} responsive className="circle center-block" />
                            <h2>Dr Alok Mandliya</h2>
                            <h3>Neurologist</h3>
                            <br />
                        </Col>
                        <Col xs={12} md={12}>
                            <h4>
                                <table align="center">
                                    <tr>
                                        <td>
                                            <i className="fa fa-user-md"></i>
                                        </td>
                                        <td>
                                            &nbsp; MBBS from MGM Medical College Indore MP, 2001-2007.
                    </td>
                                    </tr>
                                </table>
                            </h4>

                            <h4>
                                <table align="center">
                                    <tr>
                                        <td>
                                            <i className="fa fa-capsules"></i></td>
                                        <td>
                                            &nbsp;MD (Medicine) from Seth GS Medical college and KEM Hospital Mumbai 2007-2010
                         </td>
                                    </tr>
                                </table>
                            </h4>

                            <h4>
                                <table align="center">
                                    <tr>
                                        <td>
                                            <i class="fa fa-dna"></i>
                                        </td>
                                        <td>
                                            &nbsp;DM Neurology from Sri Chitra Tirunal Institute for Medical Sciences and Technology (SCTIMST), Trivandrum 2011-2013
                       </td>
                                    </tr>
                                </table>
                            </h4>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}