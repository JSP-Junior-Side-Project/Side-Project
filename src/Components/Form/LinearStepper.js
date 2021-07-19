import { Step, StepLabel, Stepper } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function LinearStepper({steps, currentStep}) {
    const [activeStep, setActiveStep] = useState(0);
    
    useEffect(() => {
        setActiveStep(currentStep)
    }, [currentStep])

    return (
        <div className="linearStepper">
            <Stepper activeStep={activeStep}>
                {
                    steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
        </div>
    )
}

export default LinearStepper
