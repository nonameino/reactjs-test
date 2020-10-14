import React from 'react';

import './../css/view-register.scss';

import DecoratorImg from './../data/Decorator.png';
import Button from './subcomponents/Button';
import { View, ViewContainer } from './subcomponents/View';

export default class ViewRegister extends React.Component {
    render() {
        return (
            <View className='view-register'>
                <div className='full-parent view-register-bg' />
                <ViewContainer className='view-register-container'>
                    <img className='decorator-img' src={DecoratorImg} alt='decorator' />
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
                            <option disabled value='DEFAULT'>Country</option>
                            <option id='vn' value='1'>VietNam</option>
                            <option id='jp' value='2'>Japan</option>
                        </select>
                        <br/>
                        <select className='input-field' id='select-platform'>
                            <option disabled  value='DEFAULT'>Platform</option>
                            <option id='android' value='1'>Android</option>
                            <option id='windows' value='2'>Windows</option>
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
                            <Button>Button</Button>
                        </div>
                    </form>
                </ViewContainer>
            </View>
        );
    }
}