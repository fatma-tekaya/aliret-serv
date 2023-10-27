import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/calculator.css'
import imgc from '../assets/img-calc.jpg'
import { Stepper, Step } from 'react-form-stepper';
import StepWizard from 'react-step-wizard'
import question from './question';
const One = props => {
    const [info1, setInfo] = useState({});
    const [error, setError] = useState("");
    const validate = () => {
        props.nextStep();
    }
    return (<div className='container pt-5 ' >
        <div class="row ">
            <div className='col-md-12 text-center'>
                <h2 className='fs-5'><span class="text-primary" >Question 1</span> of 27</h2>
                <h1> {question[0].title}</h1>
                <p>Please, select one option</p>
            </div>
        </div>
        <div class="row text-center mt-3">
            {question[0].options.map((option, opt) => (
                <div class="col-xl-3 col-sm-6 mb-5 ">
                    <div key={opt} class=" rounded shadow-lg py-5 px-4  d-flex flex-column h-100">
                        <div className='mb-2' >{option.icon}</div>
                        <h5 class="mb-0 flex-fill">{option.titre}</h5>
                    </div>
                </div>
            ))}

        </div>
        <div className='row d-flex align-items-center justify-content-center'>
            <ActionButtons {...props} nextStep={validate} />
        </div>

    </div>)
};
const Two = props => {
    const Validate2 = () => {
        props.nextStep();
    }
    return (
    
        <div className='container pt-5 ' >
        <div class="row ">
            <div className='col-md-12 text-center'>
                <h2 className='fs-5'><span class="text-primary" >Question 2</span> of 27</h2>
                <h1> {question[0].title}</h1>
                <p>Please, select one option</p>
            </div>
        </div>
        <div class="row text-center mt-3">
            {question[0].options.map((option, opt) => (
                <div class="col-xl-3 col-sm-6 mb-5 ">
                    <div key={opt} class=" rounded shadow-lg py-5 px-4  d-flex flex-column h-100">
                        <div className='mb-2' >{option.icon}</div>
                        <h5 class="mb-0 flex-fill">{option.titre}</h5>
                    </div>
                </div>
            ))}

        </div>
        <div className='row d-flex align-items-center justify-content-center'>
            <ActionButtons {...props} nextStep={Validate2} />
        </div>
    </div>
    )
};
const Three = props => {
    const handleLastStep = () => {
        props.lastStep();
    }
    return (<div className='container pt-5 ' >
        <div class="row ">
            <div className='col-md-12 text-center'>
                <h2 className='fs-5'><span class="text-primary" >Question 27</span> of 27</h2>
                <h1> {question[0].title}</h1>
                <p>Please, select one option</p>
            </div>
        </div>
        <div class="row text-center mt-3">
            {question[0].options.map((option, opt) => (
                <div class="col-xl-3 col-sm-6 mb-5 ">
                    <div key={opt} class=" rounded shadow-lg py-5 px-4  d-flex flex-column h-100">
                        <div className='mb-2' >{option.icon}</div>
                        <h5 class="mb-0 flex-fill">{option.titre}</h5>
                    </div>
                </div>
            ))}

        </div>
        <div className='row d-flex align-items-center justify-content-center'>
            <ActionButtons {...props} lastStep={handleLastStep} />
        </div>
    </div>
    )
};
const ActionButtons = props => {
    const handleBack = () => {
        props.previousStep();
    }
    const handleNext = () => {
        props.nextStep();
    }
    const handleFinish = () => {
        props.lastStep();
    }
    return (
        <div>
            <div className='row justify-content-md-center'>
                {props.currentStep > 1 && (
                    <div className='col col-lg-2'>
                        <button className="btn btn-secondary " style={{ width: '100%' }} onClick={handleBack}>Back</button>
                    </div>
                )}
                <div className='col col-lg-2'>
                    {props.currentStep < props.totalSteps && (
                        <button className="btn border " style={{ width: '100%' }} onClick={handleNext}>Next</button>)}

                    {props.currentStep == props.totalSteps && (
                        <button className="btn btn-success" style={{ width: '100%' }} onClick={handleFinish}>Finish</button>)}
                </div>
            </div>
        </div>

    )

}
const Calculator = () => {
    let indexCounter = 0;
    const [stepWizard, setStepWizard] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const assignStepWizard = instance => {
        setStepWizard(instance);
    }
    const handleStepChange = e => {
        setActiveStep(e.activeStep - 1)
    }
    return (
        <div className='' >
            <Navbar />
            <div className='row mask'>
                <img src={imgc} className='img-calc' alt=''></img>
                <div className='content-calcul '>
                    <h1>App Cost Calculator</h1>
                    <p className=''>How much does it cost to make an app for your business?</p>
                </div>
            </div>
            <div className=' calc-form shadow-lg  '>

                <div class="row">
                    <div class="col-sm-12 col-md-8 col-lg-8 pt-5">
                        
                        <Stepper activeStep={activeStep} >
                            <Step  label="Product Design" />
                            <Step label="Key Features" />
                            <Step label="Communication" />
                            <Step label="Interactivity" />
                            <Step label="Security & Ownership" />
                            <Step label="Promotion" />

                        </Stepper>
                       
                        <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
                            <One />
                            <Two />
                            <Two />
                            <Two />
                            <Two />
                            <Three />

                        </StepWizard>
                       
                    </div>
                    <div class="cost-content col-sm-12 col-md-4 col-lg-4 pt-5 " >
                        <div className='row'>
                            <h1 className="ms-2">Total Cost</h1>
                            <div className='d-flex'>
                                <span className='fw-bold fs-1 ms-3'>TND</span> <span className='fw-bold fs-1 ms-3'>0</span>
                            </div></div>
                        <div className='row mt-4' >
                            <button type="button" class="btn btn-light btn-lg btn-block" style={{ width: '90%', marginLeft: '5%', marginRight: '5%' }}>Get free quote</button>
                        </div>
                        <hr/>
                        <div className='p-2 '>
                        <h5 className=''>plateform:</h5><span></span>
                        <h5>Features:</h5><span></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Calculator;
