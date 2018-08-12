import React, { Component } from 'react';
import request from 'request';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
  Nav, Navbar, NavItem, Col, Image, Row, Grid, Button, Modal, ListGroup, ListGroupItem, Form, FormControl, FormGroup, Panel
} from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import 'react-datepicker/dist/react-datepicker.css';
import logo from './alok_mandliya.jpg';
import './App.css';


class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedPlace: 'indore',
      selectedPage: 1,
      selectedTab: 1,
      selectedName: '',
      selectedEmail: '',
      selectedPhoneNumber: '',
      selectedDate: moment(),
      selectedTime: moment(),
      bookAppointmentshow: false,
      contactshow: false
    };
  }

  handleDateChange = (date) => {
    this.setState({
      selectedDate: date
    });
  }
  handleTimeChange = (time) => {
    this.setState({
      selectedTime: time
    });
  }
  handleNameChange = (e) => {
    this.setState({
      selectedName: e.target.value
    });
  }
  handleEmailChange = (e) => {
    this.setState({
      selectedEmail: e.target.value
    });
  }
  handlePhoneNumberChange = (e) => {
    this.setState({
      selectedPhoneNumber: e.target.value
    });
  }
  handleSelect = (place) => {
    this.setState({
      selectedPlace: place
    });
  }
  handlePageChange = (page) => {
    this.setState({
      selectedPage: page
    });
  }
  handleTabChange = (tab) => {
    this.setState({
      selectedTab: tab
    });
  }
  handleBookAppointmentClose = () => {
    this.setState({ bookAppointmentshow: false });
  }
  handleContactClose = () => {
    this.setState({ contactshow: false });
  }

  handleBookAppointmentShow = () => {
    this.setState({ bookAppointmentshow: true });
  }
  handleContactShow = () => {
    this.setState({ contactshow: true });
  }
  handleConfirmAppointment = () => {
    var post_data = JSON.stringify({
      name: this.state.selectedName,
      email: this.state.selectedEmail,
      mobile: this.state.selectedPhoneNumber,
      date: this.state.selectedDate,
      time: this.state.selectedTime
    });

    request.post({
      headers: {  'Content-Type': 'application/json' },
      url: 'http://localhost:8000/api/appointments?access_token=abc123',
      body: post_data
    }, function (error, response, body) {
      console.log(body);
    });


  }

  render() {

    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#" onClick={() => this.handleTabChange(1)} >
                <i className="fa fa-hospital"></i> Home
            </NavItem>
              <NavItem eventKey={2} href="#" onClick={() => this.handleTabChange(2)}>
                <i className="fa fa-user-md"></i> About Me
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="#" onClick={this.handleBookAppointmentShow}>
                <i className="far fa-calendar-check"></i> Book Appointment
              </NavItem>
              <NavItem eventKey={2} href="#" onClick={this.handleContactShow}>
                <i className="fa fa-envelope fa-fw"></i> Contact Us
              </NavItem>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {this.state.selectedTab === 1 && <div id="home">
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
                        <i class="fa fa-capsules"></i></td>
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
        </div>}
        {this.state.selectedTab === 2 &&
          <div id="about">
            <Grid>
              <Row>
                <Col xs={12} md={12}>
                  <h2>Credential</h2>
                  <ListGroup>
                    <ListGroupItem>MBBS from MGM Medical College Indore MP, 2001-2007.</ListGroupItem>
                    <ListGroupItem>MD (Medicine) from Seth GS Medical college and KEM Hospital Mumbai 2007-2010</ListGroupItem>
                    <ListGroupItem>DM Neurology from Sri Chitra Tirunal Institute for Medical Sciences and Technology (SCTIMST), Trivandrum 2011-2013</ListGroupItem>
                  </ListGroup>
                  <h2>Background</h2>
                  <p>Dr Alok Mandliya obtained his medical graduation from MGM Medical college Indore.
           He wenton to successfully complete his post-graduate training in Medicine obtaining
           the Doctor of Medicine from prestigious Seth GS Medical college and KEM Hospital Mumbai with gold medal.
            He was awarded by prestigiousJaykar Award in Mumbai in 2010. He did his DM from world renowned Sri
             Chitra Tirunal Institute for Medical Sciences and Technology (SCTIMST), Trivandrum with gold medal.
              He was trained under the guidance of Dr D R Karnad and Dr Prof.K Radhakrishnan. In 2013 he was
              rewarded as best young neurologist in India. Following his return, he joined Bombay Hospital Indore
              as Neurologist where he is serving with full dedication. In 2014 he was single neurologist from India
               who was invited by Japanese Society of Electrophysiology in Super EMG workshop. He is a life member
                of American Academy of Neurology, Indian Academy of Neurology.
            He is also an active speaker in Neuro Club Indore. His basic area of interest is stroke,
             critical care neurology and neuro infectious diseases.</p>
                  <h2>Expertise</h2>
                  <ListGroup>
                    <ListGroupItem> Critical Neurological Illness, Stroke, Epilepsy, Movement Disorders, Botox Therapy, Headache and Neuromuscular Diseases</ListGroupItem>
                  </ListGroup>
                  <h2>Achievements and Accolades</h2>
                  <ListGroup>
                    <ListGroupItem>1. Invited in Tokyo SuperEMG workshop 2014, single young neurophysician from India
                    </ListGroupItem>
                    <ListGroupItem>2. Torrent Young Scholar Award 2013 : Considered as best budding brain in field of Neurology 2013 in India </ListGroupItem>
                    <ListGroupItem>3. Gold Medal in Neurology 2013 </ListGroupItem>
                    <ListGroupItem>4. Jaykar Award 2010 : Best Postgraduate in Medicine in Mumbai </ListGroupItem>
                    <ListGroupItem>5. Gold Medal in Medicine 2010 (Post Graduation)</ListGroupItem>
                    <ListGroupItem>6. Gold Medal in Paediatrics 2007</ListGroupItem>
                    <ListGroupItem>7. Gold Medal in Pathology 2004</ListGroupItem>

                  </ListGroup>
                  <h2>Paper Published</h2>
                  <ListGroup>
                    <ListGroupItem>1. Sinus arrest: Complicating acute posterior cerebral artery stroke : Alok Mandliya, Narayanan Namboodiri,
                  Sapna Erat Sreedharan, Sylaja P. N., Neurology India, Sep-Oct 2011, Vol 59,Issue 5 : 772-773
                  </ListGroupItem>
                    <ListGroupItem>2. Successful mechanical thrombectomy of acute middle cerebral artery occlusion due to vegetation from infective endocarditis :
                  Sajith Sukumaran, ER Jayadevan, Alok Mandliya, Sapna Erat Sreedharan,
                  S.Harikrishnan, Neelima Radhakrishnan, PN Sylaja : Neurology India 2012, Volume : 60,Issue : 2, Page : 239-240
                </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Grid>
          </div>}

        <Modal show={this.state.bookAppointmentshow} onHide={this.handleBookAppointmentClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.selectedPage === 1 &&
              <div>
                <Row>
                  <Col>

                    <Panel>
                      <Panel.Heading>
                        <Panel.Title componentClass="h3">Location</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body>
                        <ListGroup>
                          <ListGroupItem onClick={() => this.handleSelect('indore')} active={this.state.selectedPlace === 'indore' ? true : false}>Bombay Hospital Indore</ListGroupItem>
                        </ListGroup>
                      </Panel.Body>
                    </Panel>

                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <DatePicker
                      selected={this.state.selectedDate}
                      onChange={this.handleDateChange}
                      minDate={moment()}
                      maxDate={moment().add(1, "month")}
                      filterDate={this.isWeekday}
                      inline
                    />
                  </Col>
                  <Col md={6}>

                    <DatePicker
                      selected={this.state.selectedTime}
                      onChange={this.handleTimeChange}
                      showTimeSelect
                      showTimeSelectOnly
                      minTime={moment().hours(10).minutes(0)}
                      maxTime={moment().hours(18).minutes(0)}

                      timeIntervals={15}
                      dateFormat="LT"
                      timeCaption="Time"
                      inline
                    />

                  </Col>
                </Row>
              </div>
            }
            {this.state.selectedPage === 2 &&
              <div>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalName">
                    <FormControl type="text" name='name' placeholder="Full Name" onChange={(e) => this.handleNameChange(e)} /></FormGroup>
                  <FormGroup><FormControl type="email" name='email' placeholder="Email Id" onChange={(e) => this.handleEmailChange(e)} /></FormGroup>
                  <FormGroup><MaskedFormControl type='text' name='phoneNumber' placeholder="Phone number" mask='1111111111' onChange={(e) => this.handlePhoneNumberChange(e)} />
                  </FormGroup>
                  <FormGroup>
                    <Button bsStyle="success" onClick={this.handleConfirmAppointment}>Confirm Appointment</Button>
                  </FormGroup>
                </Form>
              </div>
            }


          </Modal.Body>
          <Modal.Footer>
            <div className="flex-model">
              <Button bsStyle="danger" onClick={this.handleBookAppointmentClose}>Close</Button>
              {this.state.selectedPage === 2 && <Button bsStyle="primary" onClick={() => this.handlePageChange(1)}><i class="fa fa-arrow-left"></i> Back</Button>}
              {this.state.selectedPage === 1 && <Button bsStyle="primary" onClick={() => this.handlePageChange(2)}>Next <i class="fa fa-arrow-right"></i></Button>}
            </div>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.contactshow} onHide={this.handleContactClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.selectedPage === 1 &&
              <div>
                <h4>Dr Alok Mandliya</h4>
                <h5>Bombay Hospital Indore</h5>
                <h6>dralokdm@gmail.com</h6>
                <h6>9754086504</h6>
              </div>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" onClick={this.handleContactClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>

    );
  }
}

export default App;
