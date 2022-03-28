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

        <div className="d-flex align-items-start">
          <div className="nav flex-column nav-tabs py-4 ps-3 h-100" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="tab-demographics" data-bs-toggle="tab" data-bs-target="#tab-demographics-content" role="tab" aria-controls="tab-demographics-content" aria-selected="true" type="button">Demographics</button>
            <button className="nav-link" id="tab-patient-history" data-bs-toggle="tab" data-bs-target="#tab-patient-history-content" role="tab" aria-controls="tab-patient-history-content" aria-selected="false" type="button">Patient History Diagnosis</button>
            <button className="nav-link" id="tab-risk-assessment" data-bs-toggle="tab" data-bs-target="#tab-risk-assessment-content" role="tab" aria-controls="tab-risk-assessment-content" aria-selected="true" type="button">Risk Assessment</button>
            <button className="nav-link" id="tab-prognosis" data-bs-toggle="tab" data-bs-target="#tab-prognosis-content" role="tab" aria-controls="tab-prognosis-content" aria-selected="true" type="button">Prognosis</button>
            <button className="nav-link" id="tab-supportive-assistance" data-bs-toggle="tab" data-bs-target="#tab-supportive-assistance-content" role="tab" aria-controls="tab-supportive-assistance-content" aria-selected="true" type="button">Supportive Assistance</button>
            <button className="nav-link" id="tab-sensory" data-bs-toggle="tab" data-bs-target="#tab-sensory-content" role="tab" aria-controls="tab-sensory-content" aria-selected="true" type="button">Sensory Status</button>
            <button className="nav-link" id="tab-integumentary" data-bs-toggle="tab" data-bs-target="#tab-integumentary-content" role="tab" aria-controls="tab-integumentary-content" aria-selected="true" type="button">Integumentary Status</button>
            <button className="nav-link" id="tab-respiration" data-bs-toggle="tab" data-bs-target="#tab-respiration-content" role="tab" aria-controls="tab-respiration-content" aria-selected="true" type="button">Respiration Status</button>
            <button className="nav-link" id="tab-endocrine" data-bs-toggle="tab" data-bs-target="#tab-endocrine-content" role="tab" aria-controls="tab-endocrine-content" aria-selected="true" type="button">Endocrine</button>
            <button className="nav-link" id="tab-cardiac" data-bs-toggle="tab" data-bs-target="#tab-cardiac-content" role="tab" aria-controls="tab-cardiac-content" aria-selected="true" type="button">Cardiac Status</button>
            <button className="nav-link" id="tab-elimination" data-bs-toggle="tab" data-bs-target="#tab-elimination-content" role="tab" aria-controls="tab-elimination-content" aria-selected="true" type="button">Eliminiation Status</button>
            <button className="nav-link" id="tab-nutrition" data-bs-toggle="tab" data-bs-target="#tab-nutrition-content" role="tab" aria-controls="tab-nutrition-content" aria-selected="true" type="button">Nutrition</button>
            <button className="nav-link" id="tab-neuro" data-bs-toggle="tab" data-bs-target="#tab-neuro-content" role="tab" aria-controls="tab-neuro-content" aria-selected="true" type="button">Neuro/Emotional/Behavioral Status</button>
            <button className="nav-link" id="tab-adl" data-bs-toggle="tab" data-bs-target="#tab-adl-content" role="tab" aria-controls="tab-adl-content" aria-selected="true" type="button">ADL/IADLs</button>
            <button className="nav-link" id="tab-functional" data-bs-toggle="tab" data-bs-target="#tab-functional-content" role="tab" aria-controls="tab-functional-content" aria-selected="true" type="button">Functional Abilities &amp; Goals</button>
            <button className="nav-link" id="tab-medications" data-bs-toggle="tab" data-bs-target="#tab-medications-content" role="tab" aria-controls="tab-medications-content" aria-selected="true" type="button">Medications</button>
            <button className="nav-link" id="tab-care" data-bs-toggle="tab" data-bs-target="#tab-care-content" role="tab" aria-controls="tab-care-content" aria-selected="true" type="button">Care Management</button>
            <button className="nav-link" id="tab-therapy" data-bs-toggle="tab" data-bs-target="#tab-therapy-content" role="tab" aria-controls="tab-therapy-content" aria-selected="true" type="button">Therapy Needed &amp; Plan of Care</button>
            <button className="nav-link" id="tab-discipline" data-bs-toggle="tab" data-bs-target="#tab-discipline-content" role="tab" aria-controls="tab-discipline-content" aria-selected="true" type="button">Orders for Discipline &amp; Treatments</button>
            <button className="nav-link" id="tab-oasisd" data-bs-toggle="tab" data-bs-target="#tab-oasisd-content" role="tab" aria-controls="tab-oasisd-content" aria-selected="true" type="button">Oasis-D Addendum</button>
            <button className="nav-link" id="tab-care-plan" data-bs-toggle="tab" data-bs-target="#tab-care-plan-content" role="tab" aria-controls="tab-care-plan-content" aria-selected="true" type="button">Care Plan</button>
          </div>
          <div className='tab-content'>
            <TabPage />
            <TabPage2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
