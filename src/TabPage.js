import React, { Component } from "react";


export default class TabPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            selectedCard: {},
        };
    }
    highlightValue = targetValue => (e) => {

        if(this.state.selectedCard !== undefined && this.state.selectedCard.classList !== undefined && this.state.selectedCard !== e.currentTarget)
        {
            this.state.selectedCard.classList.remove('is-selected');
        }

        e.currentTarget.classList.add('is-selected');
        this.setState({selectedCard: e.currentTarget});

        // var target = e.target;
        // var parent = e.target.parentNode;
        // var outmost = e.currentTarget;
        // while(parent)
        // {
        //     if(parent.parentNode == outmost)
        // }


        var content = document.getElementById('tab-demographics-content');
        var selected = this.state.selected;
        for (var i = 0; i < selected.length; i++) {
            selected[i].classList.remove('is-selected');
        }
        this.setState.selected = [];
        var divs = content.getElementsByClassName('selectable');
        for (var i = 0; i < divs.length; i++) {
            var div = divs[i];
            var indexOf = div.innerText.indexOf(targetValue);
            if (indexOf !== -1) {
                var targets = div.parentNode.getElementsByClassName('selectable-value');
                for (var j = 0; j < targets.length; j++) {
                    this.state.selected.push(targets[j]);
                    targets[j].classList.add('is-selected');
                }
            }
        }
    };

    render() {
        return (
            <>
                <div className="tab-pane fade show active" id="tab-demographics-content" aria-labelledby="tab-demographics">
                    <div className="container-fuild p-4">
                        <div className="row pb-2">
                            <div className="col-lg-9">
                                <div className="row pb-2">
                                    <div className="contianer-fluid d-flex">
                                        <h5 className="text-uppercase flex-fill">Patient Information</h5><div className="text-end timestamp flex-fill"><small>Visit Date: 3/18/2022 Time in: 8:00 PM Time out: 9:00 PM</small></div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="selectable selectable-div">Patient Id Number (M0020):</div>
                                        <div className="form-control selectable selectable-value">"10000008580" </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Start of Care (M0030):</div>
                                        <div className="form-control selectable selectable-value">1/20/2022</div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="selectable selectable-div">Resumption of Care (M0032):</div>
                                        <div className="form-control selectable selectable-value">NA - Not Applicable</div>
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col-md-6">
                                        <div className="selectable selectable-div">Patient Name (M0040):</div>
                                        <div className="form-control selectable selectable-value">Jane Smith</div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="selectable selectable-div">Social SecurityNumber (M0064):</div>
                                        <div className="form-control selectable selectable-value">UK - Unknown or Not Available</div>
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col-md-12 col-lg-4">
                                        <div className="selectable selectable-div">Patient Address</div>
                                        <div className="form-control selectable selectable-value">1800 southwest minster boulevard</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">City</div>
                                        <div className="form-control selectable selectable-value">Phoenix</div>
                                    </div>
                                    <div className="col-md-3 col-lg-2">
                                        <div className="selectable selectable-div">State (M0050):</div>
                                        <div className="form-control selectable selectable-value">AZ</div>
                                    </div>
                                    <div className="col-md-3 col-lg-3">
                                        <div className="selectable selectable-div">Zip (M0060):</div>
                                        <div className="form-control selectable selectable-value">85022</div>
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Medicare Number (M0063):</div>
                                        <div className="form-control selectable selectable-value">NA - No Medicare</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Medicaid Number (M0065):</div>
                                        <div className="form-control selectable selectable-value">NA - No Medicaid</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Birth Date (M0066):</div>
                                        <div className="form-control selectable selectable-value">11/20/2021 </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Gender (M0069):</div>
                                        <div className="form-control selectable selectable-value">Female</div>
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <hr />
                                    <h5 className="text-uppercase">Emergency Contact Information</h5>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Physician:</div>
                                        <div className="form-control selectable selectable-value">Dr. Who</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Physician Phone:</div>
                                        <div className="form-control selectable selectable-value">(123)456-7891</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Secondary Physician:</div>
                                        <div className="form-control selectable selectable-value">Dr. Dre</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Secondary Physician Phone:</div>
                                        <div className="form-control selectable selectable-value">(123)456-7891</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Emergency Contact Name:</div>
                                        <div className="form-control selectable selectable-value">Joe Bob</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Relationship:</div>
                                        <div className="form-control selectable selectable-value">Father</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">Contact Address:</div>
                                        <div className="form-control selectable selectable-value">1234 West G Street</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div>Contact Phone:</div>
                                        <div className="form-control selectable selectable-value">(123)456-7891</div>
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <hr />
                                    <h5 className="text-uppercase">Assessment Information</h5>
                                    <div className="col-md-12 col-lg-12">
                                        <div className="selectable selectable-div">(M0080) Discipline of Person Completing Assessment:</div>
                                        <div className="form-control selectable selectable-value">2 - PT</div>
                                    </div>
                                    <div className="col-md-12 col-lg-3">
                                        <div className="selectable selectable-div">(M0090) Date Assessment Completed:</div>
                                        <div className="form-control selectable selectable-value">3/18/2022</div>
                                    </div>
                                    <div className="col-md-12 col-lg-9">
                                        <div className="selectable selectable-div">(M0100) Reason for Assessment:</div>
                                        <div className="form-control selectable selectable-value">Start of Care - Further visits planned</div>
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <hr />
                                    <h5 className="text-uppercase">Referral Information</h5>
                                    <div className="col-md-12 col-lg-12">
                                        <div className="selectable selectable-div">(M0102) Date of Physician-ordred Start of Care(Resumption of Care):</div>
                                        <div className="form-control selectable selectable-value">NA - No specific SOC date ordered by physician</div>
                                    </div>
                                    <div className="col-md-12 col-lg-12">
                                        <div className="selectable selectable-div">Comments</div>
                                        <div className="form-control selectable selectable-value">Icing gummi bears wafer ice cream sweet roll sesame snaps donut dessert. Icing danish sweet tart fruitcake candy canes ice cream. Tiramisu biscuit tart macaroon cupcake biscuit toffee lollipop chocolate. Dessert tootsie roll ice cream tootsie roll croissant icing chocolate sesame snaps muffin. Cake cupcake cotton candy caramels sesame snaps jelly beans jelly pastry dessert. Marzipan halvah caramels gummi bears fruitcake icing chocolate bar jelly beans donut.</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">(M0104) Date of Referral:</div>
                                        <div className="form-control selectable selectable-value">2/10/2022</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="selectable selectable-div">(M0110) Episode Timing:</div>
                                        <div className="form-control selectable selectable-value">Early</div>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <div className="selectable selectable-div">(M0150) Current Payment Sources for Home Care:</div>
                                        <div className="form-control selectable selectable-value">2 - Medicare (HMO/Managed Care/Advantage plan)</div>
                                    </div>
                                    <div className="row pb-2">
                                        <div className="col-md-5 col-lg-4">
                                            <div className="selectable selectable-div">(M0140) Race/Ethnicity:</div>
                                            <div className="form-control selectable selectable-value">6 - White</div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="selectable selectable-div">(M0066) Birth Date:</div>
                                            <div className="form-control selectable selectable-value">11/20/1985</div>
                                        </div>
                                        <div className="col-md-3 col-lg-4">
                                            <div className="selectable selectable-div">(M0069) Gender:</div>
                                            <div className="form-control selectable selectable-value">Female</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 vh-100 overflow-auto">
                                <h5>Comments</h5>
                                <div className="card border border-phcn mb-3" onClick={this.highlightValue("Birth Date")}>
                                    <div className="card-body">
                                        <p className="card-text"><small className="text-muted">Birth Date</small></p>
                                        <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3/21/22 @9:00am</small></p>
                                    </div>
                                </div>
                                <div className="card border border-phcn mb-3" onClick={this.highlightValue("Gender")}>
                                    <div className="card-body">
                                        <p className="card-text"><small className="text-muted">Gender</small></p>
                                        <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3/21/22 @9:00am</small></p>
                                    </div>
                                </div>
                                <div className="card border border-phcn mb-3" onClick={this.highlightValue("Physician")}>
                                    <div className="card-body">
                                        <p className="card-text"><small className="text-muted">Physician</small></p>
                                        <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3/21/22 @9:00am</small></p>
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