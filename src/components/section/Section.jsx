import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import nova from '../../assets/image/nova.png';
import './Section.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section = () => {
    return (
        <>
            <section className="section-field">
                <ListGroup.Item className='section-title'>
                    <h1>Upcoming IPO</h1>
                    <p>Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.</p>
                </ListGroup.Item>

                {/* IPO Section */}
                <div className="col-md-4 d-flex align-items-stretch">
                    <div className="card shadow-sm p-3 mb-5 bg-white rounded custom-card">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <img src={nova} alt="Nova" style={{ height: '30px', marginRight: '10px' }} />
                                <h5 className="text-primary mb-0 company-title">Nova Agritech Ltd.</h5>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <p className="mb-1"><strong>PRICE BAND</strong></p>
                                    <p>Rs 39 - 41</p>
                                </div>
                                <div className="col-4">
                                    <p className="mb-1"><strong>OPEN</strong></p>
                                    <p>2024-01-22</p>
                                </div>
                                <div className="col-4">
                                    <p className="mb-1"><strong>CLOSE</strong></p>
                                    <p>2024-01-24</p>
                                </div>
                                <div className="col-4">
                                    <p className="mb-1"><strong>ISSUE SIZE</strong></p>
                                    <p>143.81 Cr.</p>
                                </div>
                                <div className="col-4">
                                    <p className="mb-1"><strong>ISSUE TYPE</strong></p>
                                    <p>Book Built</p>
                                </div>
                                <div className="col-4">
                                    <p className="mb-1"><strong>LISTING DATE</strong></p>
                                    <p>2024-01-30</p>
                                </div>
                            </div>
                            <div className="d-flex mt-3 ">
                                <button className="btn btn-outline-primary btn-sm">RHP</button>
                                <button className="btn btn-danger btn-sm ">DRHP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section;
