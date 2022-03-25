import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import './App.css';
import TabPage from './TabPage';
import TabPage2 from './TabPage2';

function App() {
  return (
    <div>
      <div className="container-fluid px-0">

        <div className="d-flex">
            <div className="flex-fill ">
                <div className="nav flex-column nav-tabs py-4 ps-3 h-100" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="tab" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Demographics</a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="tab" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Patient History Diagnosis</a>
                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="tab" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Risk Assessment</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Prognosis</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Supportive Assistance</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Sensory Status</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Integumentary Status</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Respiration Status</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Endocrine</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Cardiac Status</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Elimination Status</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Nutrition</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Neuro/Emotional/Behavioral Status</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">ADL/IADLs</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Functional Abilities & Goals</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Medications</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Care Management</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Therapy Needed & Plan of Care</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Orders for Discipline & Treatments</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Oasis-D Addendum</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Care Plan</a>
                </div>
            </div>
            <div className="flex-grow-1 min-vh-100">
              <TabPage/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
