import React, { Component } from "react";

export default class TabPage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="container-fuild p-4">
                    <div className="row">
                        <div className="col-9">
                            <small>
                                <div className="row border py-2">
                                    <div className="col-3"><strong>Time In:</strong><br />8:00 AM</div>
                                    <div className="col-3"><strong>Time Out:</strong><br />10:00 AM</div>
                                    <div className="col-3"><strong>Visit Date:</strong><br />3/18/2022</div>
                                    <div className="col-3"></div>
                                </div>
                                <div className="row border border-top-0 py-2">
                                    <div className="col-3"><strong>(M0020) Patient Id:</strong><br />1000085941</div>
                                    <div className="col-3"><strong>(M0030) Start of Care Date:</strong><br />1/20/2022</div>
                                    <div className="col-4"><strong>(M0032) Resumption of Care Date:</strong><br />NA - Not Applicable</div>
                                </div>
                                <div className="row border border-top-0 py-2">
                                    <div className="col-3"><strong>(M0040) Patient Name:</strong><br />Jane Smith</div>
                                    <div className="col-3"><strong>(M0064) Social Security Number:</strong><br />UK - Unknown or Not Available</div>
                                </div>
                                <div className="row border border-top-0 py-2">
                                    <div className="col-3"><strong>Patient Address:</strong><br />1800 southwest minster boulevard</div>
                                    <div className="col-3"><strong>City:</strong><br />Phoenix</div>
                                    <div className="col-3"><strong>(M0050) State:</strong><br />AZ</div>
                                    <div className="col-3"><strong>(M0060) ZIP Code:</strong><br />85022</div>
                                </div>
                                <div className="row border border-top-0 py-2">
                                    <div className="col-3"><strong>(M0063) Medicare Number:</strong><br />NA - No Medicare</div>
                                    <div className="col-3"><strong>(M0065) Medicaid Number:</strong><br />NA - No Medicaid</div>
                                    <div className="col-3"><strong>(M0066) Birth Date:</strong><br />11/20/2021</div>
                                    <div className="col-3"><strong>(M0069) Gender:</strong><br />Female</div>
                                </div>
                                <div className="row border border-top-0 py-2">
                                    <div className='text'><strong>EMERGENCY CONTACT INFORMATION</strong></div>
                                    <div className="col-3"><strong>Physician:</strong><br />Dr. Who</div>
                                    <div className="col-3"><strong>Emergency Contact Name:</strong><br />Joe Bob</div>
                                    <div className="col-3"><strong>Relationship:</strong><br />Father</div>
                                    <div className="col-3"><strong>Contact Address:</strong><br />1234 West G Street</div>
                                    <div className="col-3"><strong>Contact Phone:</strong><br />(123)456-7891</div>
                                    <div className="col-3"><strong>Secondary Physician:</strong><br />Dr. Dre</div>
                                    <div className="col-3"><strong>Secondary Physician Phone:</strong><br />(123)456-7891</div>
                                </div>
                                <div className="row border border-top-0 py-2">
                                    <div className='text'><strong>ASSESSMENT INFORMATION</strong></div>
                                    <div className="col-3"><strong>(M0080) Discipline of Person Comepleting Assessment:</strong><br />2 - PT</div>
                                    <div className="col-3"><strong>(M0090) Date Assessment Completed:</strong><br />3/18/2022</div>
                                    <div className="col-3"><strong>(M0100) Reason for Assessment:</strong><br />Start of Care - Further visits planned</div>
                                </div>
                                <div className="row border border-top-0 py-2">
                                    <div className='text'><strong>REFERRAL INFORMATION</strong></div>
                                    <div className="col-3"><strong>(M0102) Date of Physician-ordred Start of Care(Resumption of Care):</strong><br />NA - No specific SOC date ordered by physician</div>
                                    <div className="col-3"><strong>(M0104) Date of Referral:</strong><br />2/10/2022</div>
                                    <div className="col-3"><strong>(M0110) Episode Timing:</strong><br />Early</div>
                                </div>
                                <div className="row border border-top-0 py-2">
                                    <div className="col-3"><strong>(M0140) Race/Ethnicity:</strong><br />6 - White</div>
                                    <div className="col-3"><strong>(M0150) Current Payment Sources for Home Care:</strong><br />2 - Medicare (HMO/Managed Care/Advantage plan)</div>
                                    <div className="col-3"><strong>(M0066) Birth Date:</strong><br />11/20/1985</div>
                                    <div className="col-3"><strong>(M0069) Gender:</strong><br />Female</div>
                                </div>
                            </small>
                        </div>
                        <div className="col-3 vh-100 overflow-auto">
                            <h5>Comments</h5>
                            <div class="card border border-phcn mb-3">
                                <div class="card-body">
                                    <p class="card-text"><small class="text-muted">Dr. Who</small></p>
                                    <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3/21/22 @9:00am</small></p>
                                </div>
                            </div>
                            <div class="card border border-phcn mb-3">
                                <div class="card-body">
                                    <p class="card-text"><small class="text-muted">Dr. Dre</small></p>
                                    <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3/21/22 @9:00am</small></p>
                                </div>
                            </div>
                            <div class="card border border-phcn mb-3">
                                <div class="card-body">
                                    <p class="card-text"><small class="text-muted">Dr. Phil</small></p>
                                    <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3/21/22 @9:00am</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}