import React, { Component } from "react";

export default class TabPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="container-fuild p-4">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="row pb-2">
                            <div className="col-lg-9">
                                

                                <div className="row pb-2">
                                    <div className="contianer-fluid d-flex">
                                    <h5 className="text-uppercase flex-fill">Patient Information</h5><div className="text-end timestamp flex-fill"><small>Visit Date: 3/18/2022 Time in: 8:00 PM Time out: 9:00 PM</small></div>
                                    </div>
                                    <div className="col-lg-3">
                                        <label>Patient Id Number (M0020):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="10000008580" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Start of Care (M0030):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="1/20/2022" />
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <label>Resumption of Care (M0032):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="NA - Not Applicable" />
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col-md-6">
                                        <label>Patient Name (M0040):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="Jane Smith" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Social SecurityNumber (M0064):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="UK - Unknown or Not Available" />
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col-md-12 col-lg-4">
                                        <label>Patient Address</label>
                                        <input type="text" className="form-control" readonly="readonly" value="1800 southwest minster boulevard" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>City</label>
                                        <input type="text" className="form-control" readonly="readonly" value="Phoenix" />
                                    </div>
                                    <div className="col-md-3 col-lg-2">
                                        <label>State (M0050):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="AZ" />
                                    </div>
                                    <div className="col-md-3 col-lg-3">
                                        <label>Zip (M0060):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="85022" />
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col-md-6 col-lg-3">
                                        <label>Medicare Number (M0063):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="NA - No Medicare" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Medicaid Number (M0065):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="NA - No Medicaid" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Birth Date (M0066):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="11/20/2021" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Gender (M0069):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="Female" />
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <hr />
                                    <h5 className="text-uppercase">Emergency Contact Information</h5>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Physician:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="Dr. Who" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Physician Phone:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="(123)456-7891" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Secondary Physician:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="Dr. Dre" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Secondary Physician Phone:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="(123)456-7891" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Emergency Contact Name:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="Joe Bob" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Relationship:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="Father" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Contact Address:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="1234 West G Street" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>Contact Phone:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="(123)456-7891" />
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <hr />
                                    <h5 className="text-uppercase">Assessment Information</h5>
                                    <div className="col-md-12 col-lg-12">
                                        <label>(M0080) Discipline of Person Completing Assessment:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="2 - PT" />
                                    </div>
                                    <div className="col-md-12 col-lg-3">
                                        <label>(M0090) Date Assessment Completed:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="3/18/2022" />
                                    </div>
                                    <div className="col-md-12 col-lg-9">
                                        <label>(M0100) Reason for Assessment:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="Start of Care - Further visits planned" />
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <hr />
                                    <h5 className="text-uppercase">Referral Information</h5>
                                    <div className="col-md-12 col-lg-12">
                                        <label>(M0102) Date of Physician-ordred Start of Care(Resumption of Care):</label>
                                        <input type="text" className="form-control" readonly="readonly" value="NA - No specific SOC date ordered by physician" />
                                    </div>
                                    <div className="col-md-12 col-lg-12">
                                        <label className="form-label">Comments</label>
                                        <textarea className="form-control" readonly="readonly" rows="3">Icing gummi bears wafer ice cream sweet roll sesame snaps donut dessert. Icing danish sweet tart fruitcake candy canes ice cream. Tiramisu biscuit tart macaroon cupcake biscuit toffee lollipop chocolate. Dessert tootsie roll ice cream tootsie roll croissant icing chocolate sesame snaps muffin. Cake cupcake cotton candy caramels sesame snaps jelly beans jelly pastry dessert. Marzipan halvah caramels gummi bears fruitcake icing chocolate bar jelly beans donut.</textarea>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>(M0104) Date of Referral:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="2/10/2022" />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label>(M0110) Episode Timing:</label>
                                        <input type="text" className="form-control" readonly="readonly" value="Early" />
                                    </div>
                                        <div className="col-md-12 col-lg-6">
                                            <label>(M0150) Current Payment Sources for Home Care:</label>
                                            <input type="text" className="form-control" readonly="readonly" value="2 - Medicare (HMO/Managed Care/Advantage plan)" />
                                        </div>
                                    <div className="row pb-2">
                                        <div className="col-md-5 col-lg-4">
                                            <label>(M0140) Race/Ethnicity:</label>
                                            <input type="text" className="form-control" readonly="readonly" value="6 - White" />
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <label>(M0066) Birth Date:</label>
                                            <input type="text" className="form-control" readonly="readonly" value="11/20/1985" />
                                        </div>
                                        <div className="col-md-3 col-lg-4">
                                            <label>(M0069) Gender:</label>
                                            <input type="text" className="form-control" readonly="readonly" value="Female" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 vh-100 overflow-auto">
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
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Words</div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                </div>
            </>
        );
    }
}