import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Section.css'; // Custom CSS for additional styling
import { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { IPO, questions } from '../../constants'; // Importing IPO data and questions from constants
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Component representing a section with Upcoming IPO details and Frequently Asked Questions (FAQ).
 * Displays IPO details like company name, price band, open/close dates, and FAQ questions with collapsible answers.
 */
const Section = () => {
    const [activeKey, setActiveKey] = useState(null); // State to manage active accordion item

    // Function to toggle accordion item open/close
    const toggleAccordion = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <>
            <section className="section-field">

                {/* Title Section */}
                <ListGroup.Item className='section-title'>
                    <h1>Upcoming IPO</h1>
                    <p>Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.</p>
                </ListGroup.Item>

                {/* IPO Section */}
                <div className="container">
                    <div className="row" style={{ marginLeft: -50 }}>
                        {IPO.map((ipo) => (
                            <div className="col-md-4 col-sm-12 d-flex align-items-stretch card-section" key={ipo.companyName}>
                                <div className="card shadow-sm p-3 mb-5 bg-white rounded custom-card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <img src={ipo.iconUrl} alt="company Icon" style={{ height: '30px', marginRight: '30px', marginLeft: '-10px' }} />
                                            <h5 className="text-primary mb-0 company-title">{ipo.companyName}</h5>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <p className="mb-1"><strong>PRICE BAND</strong></p>
                                                <p>{ipo.priceBand}</p>
                                            </div>
                                            <div className="col-4 open">
                                                <p className="mb-1"><strong>OPEN</strong></p>
                                                <p>{ipo.open}</p>
                                            </div>
                                            <div className="col-4 close">
                                                <p className="mb-1"><strong>CLOSE</strong></p>
                                                <p>{ipo.close}</p>
                                            </div>
                                            <div className="col-4">
                                                <p className="mb-1"><strong>ISSUE SIZE</strong></p>
                                                <p>{ipo.issueSize}</p>
                                            </div>
                                            <div className="col-4 issue-type">
                                                <p className="mb-1"><strong>ISSUE TYPE</strong></p>
                                                <p>{ipo.issueType}</p>
                                            </div>
                                            <div className="col-4 listing-date">
                                                <p className="mb-1"><strong>LISTING DATE</strong></p>
                                                <p>{ipo.listingDate}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-3">
                                            <button className="btn btn-outline-primary btn-sm">RHP</button>
                                            <button className="btn btn-danger btn-sm">DRHP</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Frequently Asked Questions Section */}
                <ListGroup.Item className='section-title'>
                    <h1> Frequently Asked Questions?</h1>
                    <p>Find answers to common questions that come in your mind related to IPO..</p>
                </ListGroup.Item>
                <div className="accordion-container">
                    <Accordion activeKey={activeKey}>
                        {questions.map((q, index) => (
                            <Card key={index}>
                                <Card.Header className="d-flex justify-content-between align-items-center">
                                    {q.questionTitle}
                                    <Button
                                        variant="link"
                                        className="acco-btn"
                                        onClick={() => toggleAccordion(index.toString())}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <FontAwesomeIcon icon={activeKey === index.toString() ? faMinus : faPlus} />
                                    </Button>
                                </Card.Header>
                                <Accordion.Collapse eventKey={index.toString()}>
                                    <Card.Body>
                                        {q.answer.map((step, stepIndex) => (
                                            <div key={stepIndex}>{step}</div>
                                        ))}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))}
                    </Accordion>
                </div>

            </section>
        </>
    );
}

export default Section;
