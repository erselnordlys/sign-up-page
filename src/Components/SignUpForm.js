import React, { Component } from 'react';
import './SignUpForm.css';

import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

export class SignUpForm extends Component {

    state = {
        name: '',
        lastName: '',
        date: '2017-05-24',
        gender: 'female',
    }

    setData = (key, e) => {
        this.setState({
            [key]: e.target.value,
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            lastName: '',
            date: '2017-05-24',
            gender: 'female',
        })
    }

    sendForm = () => {
        console.log('send form')
    }

    render () {
        const {name, lastName, date, gender} = this.state;

        return (
            <div className={'form'}>
                <h3>Sign up form 🙌</h3>
                <TextField className={'form__element'} label={'name'} value={name} onChange={(e) => this.setData('name', e)}/>
                <TextField className={'form__element'} label={'last-name'} value={lastName} onChange={(e) => this.setData('lastName', e)}/>
                <TextField
                    className={'form__element'}
                    id='date'
                    label='Date of birth'
                    type='date'
                    defaultValue={date}
                    value={date}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => this.setData('date', e)}
                />
                <FormLabel component='legend' className={'form__element'}>Gender</FormLabel>
                <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    className={'form__element form__element_radio-group'}
                    value={gender}
                    onChange={(e) => this.setData('gender', e)}
                >
                    <FormControlLabel value='female' control={<Radio />} label='Female' />
                    <FormControlLabel value='male' control={<Radio />} label='Male' />
                    <FormControlLabel value='other' control={<Radio />} label='Other' />
                </RadioGroup>
                <div className={'form__element form__element-buttons'}>
                    <Button
                        className={'form__element form__element-button'}
                        onClick={this.resetForm}
                    >
                        Reset
                    </Button>
                    <Button
                        className={'form__element form__element-button'}
                        variant='raised'
                        color='primary'
                        onClick={this.sendForm}
                    >
                        Sign up
                    </Button>
                </div>
            </div>
        )
    }
}