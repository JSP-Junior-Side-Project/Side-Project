import clsx from "clsx";
import PropTypes from "prop-types";
import Check from "@material-ui/icons/Check";
import { Step, StepLabel, Stepper, StepConnector, StepIcon } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './LinearStepper.css';

const MyConnector = withStyles({
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
    active: {
        '& $line': {
            borderColor: '#a2c1e0',
          },
    },
    completed: {
        '& $line': {
            borderColor: '#a2c1e0',
          },
    }
})(StepConnector);

const useMyStepIconStyles = makeStyles({
    root: {
      color: '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
    },
    active: {
      color: '#a2c1e0',
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      color: '#a2c1e0',
      zIndex: 1,
      fontSize: 18,
    },
  });
  
  function MyStepIcon(props) {
    const classes = useMyStepIconStyles();
    const { active, completed } = props;
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
      </div>
    );
  }
  
  MyStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
  };

function LinearStepper({steps, currentStep}) {
    const [activeStep, setActiveStep] = useState(0);
    
    useEffect(() => {
        setActiveStep(currentStep)
    }, [currentStep])

    return (
        <div className="linearStepper">
            <Stepper alternativeLabel activeStep={activeStep} connector={<MyConnector />}>
                {
                    steps.map((step) => (
                        <Step key={step}>
                            <StepLabel StepIconComponent={MyStepIcon}>{step}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
        </div>
    )
}

export default LinearStepper
