import React, { Component } from 'react';
import {
    Col, Row, Grid, ListGroup, ListGroupItem
} from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';



export class About extends Component {

    render() {
        return (
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
            </div>
        )
    }
}