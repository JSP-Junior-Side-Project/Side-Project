import PropTypes from 'prop-types';
import { Step, StepConnector, StepLabel, Stepper } from '@material-ui/core'
import Check from '@material-ui/icons/Check';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import clsx from 'clsx';

function LinearStepper({steps, currentStep}) {
    const [activeStep, setActiveStep] = useState(0);
    
    useEffect(() => {
        setActiveStep(currentStep)
    }, [currentStep])

    return (
        <div className="root">
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
