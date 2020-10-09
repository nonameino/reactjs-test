import React from 'react';

import './../css/view-register.scss';

import DecoratorImg from './../data/Decorator.png';

export default class ViewRegister extends React.Component {
    render() {
        return (
            <div className='full-viewport view-container -text-blue view-register'>
                <div className='full-parent view-register-bg' />
                <div className='full-parent-width view-content-max-width view-content-container view-register-container'>
                    <img src={DecoratorImg} alt='decorator' />
                    <form className='register-form'>
                        <h2 className='register-form-header'>Stay in the Know!</h2>
                        <p className='register-form-details'>
                            Don't get left behind! <br/>
                            Subscribe to our newsletters today!</p>
                        <br/>
                        <input type='text' name='name' id='name' placeholder='Name' className='input-field'/>
                        <br/>
                        <input type='text' name='email' id='email' placeholder='Email' className='input-field'/>
                        <br/>
                        <select className='input-field' id='select-country'>
                            <option disabled selected>Country</option>
                            <option id='vn'>VietNam</option>
                            <option id='jp'>Japan</option>
                        </select>
                        <br/>
                        <select className='input-field' id='select-platform'>
                            <option disabled selected>Platform</option>
                            <option id='android'>Android</option>
                            <option id='windows'>Windows</option>
                        </select>
                        <br/>
                        <br/>
                        <div className='register-form-checkbox-group'>
                            <input type='checkbox' name='policy' id='check-policy'/>
                            <label>By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy.</label>
                        </div>
                        <div className='register-form-checkbox-group'>
                            <input type='checkbox' name='promotion' id='check-pomotion'/>
                            <label>I agree to receive promotional offers relating to all Gameloft games and services.</label>
                        </div>
                        <div className='register-form-button-container'>
                            <input type='submit' value='Button' id='submit'/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}